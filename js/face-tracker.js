// Grid configuration (must match your generated images)
const P_MIN = -15;
const P_MAX = 15;
const STEP = 3;
const SIZE = 256;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function quantizeToGrid(val) {
  const raw = P_MIN + (val + 1) * (P_MAX - P_MIN) / 2; // [-1,1] -> [-15,15]
  const snapped = Math.round(raw / STEP) * STEP;
  return clamp(snapped, P_MIN, P_MAX);
}

function sanitize(val) {
  const str = Number(val).toFixed(1); // force one decimal, e.g. 0 -> 0.0
  return str.replace('-', 'm').replace('.', 'p');
}

function gridToFilename(px, py) {
  return `gaze_px${sanitize(px)}_py${sanitize(py)}_${SIZE}.webp`;
}

function updateDebug(debugEl, x, y, filename) {
  if (!debugEl) return;
  debugEl.innerHTML = `Mouse: (${Math.round(x)}, ${Math.round(y)})<br/>Image: ${filename}`;
}

function initializeFaceTracker(container) {
  const basePath = container.dataset.basePath || '/faces/';
  const showDebug = String(container.dataset.debug || 'false') === 'true';

  const img = document.createElement('img');
  img.className = 'face-image';
  img.alt = 'Face following gaze';
  container.appendChild(img);

  let debugEl = null;
  if (showDebug) {
    debugEl = document.createElement('div');
    debugEl.className = 'face-debug';
    container.appendChild(debugEl);
  }

  let useGyroscope = false;
  let gyroNx = 0;
  let gyroNy = 0;

  function setFromNormalized(nx, ny) {
    const clampedX = clamp(nx, -1, 1);
    const clampedY = clamp(ny, -1, 1);

    const px = quantizeToGrid(clampedX);
    const py = quantizeToGrid(clampedY);

    const filename = gridToFilename(px, py);
    const imagePath = `${basePath}${filename}`;
    img.src = imagePath;

    if (debugEl) {
      debugEl.innerHTML = `Normalized: (${nx.toFixed(2)}, ${ny.toFixed(2)})<br/>Image: ${filename}`;
    }
  }

  function setFromClient(clientX, clientY) {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const nx = (clientX - centerX) / (rect.width / 2);
    const ny = (centerY - clientY) / (rect.height / 2);

    setFromNormalized(nx, ny);
  }

  function handleMouseMove(e) {
    if (!useGyroscope) {
      setFromClient(e.clientX, e.clientY);
    }
  }

  function handleTouchMove(e) {
    if (!useGyroscope && e.touches && e.touches.length > 0) {
      const t = e.touches[0];
      setFromClient(t.clientX, t.clientY);
    }
  }

  function handleOrientation(event) {
    // DeviceOrientationEvent provides:
    // - beta: front-to-back tilt (-180 to 180, where 0 is flat)
    // - gamma: left-to-right tilt (-90 to 90, where 0 is flat)

    const beta = event.beta;   // front-back tilt
    const gamma = event.gamma; // left-right tilt

    // Map gamma (-90 to 90) to nx (-1 to 1)
    // Tilt left (negative gamma) = look left (negative nx)
    gyroNx = clamp(gamma / 45, -1, 1);

    // Map beta to ny (-1 to 1)
    // When phone is held upright (portrait), beta ~90
    // Tilt forward (beta > 90) = look down (negative ny)
    // Tilt backward (beta < 90) = look up (positive ny)
    const betaCentered = beta - 90; // Center around portrait position
    gyroNy = clamp(-betaCentered / 45, -1, 1);

    setFromNormalized(gyroNx, gyroNy);
  }

  // Check if device supports orientation and request permission on iOS 13+
  function enableGyroscope() {
    if (typeof DeviceOrientationEvent !== 'undefined') {
      // iOS 13+ requires permission
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              useGyroscope = true;
              window.addEventListener('deviceorientation', handleOrientation, true);
            }
          })
          .catch(console.error);
      } else {
        // Non-iOS or older iOS
        useGyroscope = true;
        window.addEventListener('deviceorientation', handleOrientation, true);
      }
    }
  }

  // Auto-detect mobile and enable gyroscope
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    // For iOS 13+, we need a user gesture to request permission
    // Add a tap listener to request permission
    const requestPermission = () => {
      enableGyroscope();
      document.removeEventListener('touchstart', requestPermission);
    };
    document.addEventListener('touchstart', requestPermission, { once: true });
  }

  // Track pointer anywhere on the page (fallback for desktop or when gyro unavailable)
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('touchmove', handleTouchMove, { passive: true });

  // Initialize at center
  const rect = container.getBoundingClientRect();
  setFromClient(rect.left + rect.width / 2, rect.top + rect.height / 2);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.face-tracker').forEach((el) => initializeFaceTracker(el));
});
