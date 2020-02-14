---
id: 91
title: How to find a Facebook Page ID
date: 2012-12-03T13:29:52+09:30
author: ricsantos
layout: post
permalink: /2012/12/03/how-to-find-a-facebook-page-id/
categories:
  - Uncategorized
---
So you visit a Facebook page, and you want to find out its ID &#8211; the unique number that represents the page in the Facebook database. How do you find it out?

Well, one simple way involves inspecting the profile picture&#8217;s link, like so:

[<img class="alignnone size-medium wp-image-93" title="The Simpsons Facebook Page" src="http://www.ricsantos.net/wp-content/uploads/2012/12/Screen-Shot-2012-12-03-at-2.25.59-PM-300x215.png" alt="The Simpsons Facebook Page" width="300" height="215" srcset="https://www.ricsantos.net/wp-content/uploads/2012/12/Screen-Shot-2012-12-03-at-2.25.59-PM-300x215.png 300w, https://www.ricsantos.net/wp-content/uploads/2012/12/Screen-Shot-2012-12-03-at-2.25.59-PM.png 883w" sizes="(max-width: 300px) 100vw, 300px" />](http://www.ricsantos.net/wp-content/uploads/2012/12/Screen-Shot-2012-12-03-at-2.25.59-PM.png)

Right &#8211; Click the profile picture (in this case, Homer), and select Copy Link Address. Then paste it to a text editor and you will see it looks like:

http://www.facebook.com/photo.php?fbid=10150919682383697&set=a.455775213696.233520.**29534858696**&type=1

The Facebook Page ID is the number after the last decimal point, in this case: **29534858696**

Power users: skip the above steps and dive straight into the <a title="Facebokk Graph Explorer" href="https://developers.facebook.com/tools/explorer" target="_blank">Facebook Graph Explorer</a>.