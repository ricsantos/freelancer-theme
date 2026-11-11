---
id: 135
title: 'Updating Flurry for iOS7 &#8211; Quickly'
date: 2013-09-07T12:07:58+09:30
author: ricsantos
layout: post
guid: http://www.ricsantos.net/?p=135
permalink: /2013/09/07/updating-flurry-for-ios7-quickly/
categories:
  - Developer
---
So, you just got spammed a whole lot of emails from Flurry, urging you to upgrade to the latest SDK (Flurry 4.3.2). Well, you can go and download it from dev.flurry.com, unzip, and be greeted with 3 PDF&#8217;s to wade through. Here is the tl;dr

  1. Download the SDK
  2. Delete the existing Flurry files in your XCode project (the libs are now named differently)
  3. Copy the files in the Flurry folder to your project
  4. Optional: Copy the files in the FlurryAds folder to your project
  5. Add **Security.framework** to your project (Build Phases > Link Binary With Libraries)
  6. Optional: If using Flurry ads, also add **AdSupport.framework** to your project

That&#8217;s it. You may want to test it 🙂