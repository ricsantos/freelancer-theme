---
title: Animate a UIView with SnapKit
date: 2021-10-13
author: ricsantos
layout: post
---

Say you want to animate a frame change, and you are using `SnapKit`. You can use the `remakeConstraints` function to set the new constraints, and then in an animation block call `layoutIfNeeded()` on the superview. 

<br>

```
func setPurpleViewVisible(_ visible: Bool) {
    self.purpleView.snp.remakeConstraints { make in
        make.leading.trailing.equalToSuperview()

        if visible {
            make.bottom.equalToSuperview()
        } else {
            make.top.equalTo(self.view.snp.bottom)
        }
    }
    
    UIView.animate(withDuration: 0.3, animations: {
        self.view.layoutIfNeeded()
    })
}
```

<br>

Sometimes it helps to make a container view so that `layoutIfNeeded()` can be called on that, ensuring other parts of the superview do not animate.

<br>
<br>