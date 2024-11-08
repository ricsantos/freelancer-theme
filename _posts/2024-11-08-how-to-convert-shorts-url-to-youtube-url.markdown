---
title: How to convert a Shorts URL to a YouTube URL
date: 2024-11-08
author: ricsantos
layout: post
---

Why? My impetus was to use the video in a Google AdMob House Campaign. When you post a vertical video to YouTube, it becomes a short.

Take this [Swipe2delete video](https://www.youtube.com/shorts/lSJdcsAXMTo) for example. 

However, when you paste that Video URL into the Edit Campaign screen, you get an error "Enter a valid YouTube video url".

<br>
<div style="text-align: center;">
    <img alt="Stezza Red New" src="/img/blog/enter_a_valid_youtube_video_url.png" style="max-width: 511px;">
</div>
<br>

But it is a YouTube URL I hear you say! Well, apparently not, but we can make it so with a simple trick:

```
Replace shorts/ with watch?v=
```

Eg, `https://www.youtube.com/shorts/lSJdcsAXMTo` becomes `https://www.youtube.com/watch?v=lSJdcsAXMTo`.

Presto!

<br><br>

Here is an teeny tiny form to do it for you:
<br><br>

<div>
    <label for="shortsUrl">Shorts URL: </label>
    <input type="text" id="shortsUrl" placeholder="https://www.youtube.com/shorts/yourShortsID" style="width: 400px;">
</div>
<br>
<div>
    <button onclick="convertUrl()">Convert</button>
</div>
<br>
<div>
    <label for="youtubeUrl">YouTube URL: </label>
    <input type="text" id="youtubeUrl" readonly style="width: 400px;">
</div>

<script>
    function convertUrl() {
        const shortsUrl = document.getElementById('shortsUrl').value;
        const youtubeUrl = shortsUrl.replace('/shorts/', '/watch?v=');
        document.getElementById('youtubeUrl').value = youtubeUrl;
    }
</script>

<br><br>