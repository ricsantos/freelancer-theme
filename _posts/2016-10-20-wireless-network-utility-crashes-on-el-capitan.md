---
id: 232
title: Wireless Network Utility crashes on El Capitan
date: 2016-10-20T20:32:39+09:30
author: ricsantos
layout: post
guid: http://www.ricsantos.net/?p=232
permalink: /2016/10/20/wireless-network-utility-crashes-on-el-capitan/
categories:
  - Uncategorized
---
Have you just purchased a somewhat cheap USB WiFi adapter for your mac, only to find that the supplied driver fails to work. I was in that boat too.

I had downloaded and installed `Wlan_11n_USB_MacOS10.8_Driver_UI_2.0.1.zip`, which installs a utility application called &#8216;Wireless Network Utility.app&#8217;. Problem is, my machine is running El Capitan (10.11), so this driver seems a bit out of date.

The installed app never opened as advertised, and there was no new service in the list in System Preferences -> Network.

The fix? SIP &#8211; System Integrity Protection. El Capitan introduces this &#8216;feature&#8217; which locks down your system in many ways, including preventing unsigned drivers from installing. You will want to turn this off.

To turn off System Integrity Protection:

  * Restart your Mac
  * Hold down Command + R while the Mac is booting to access the recovery system
  * Open Terminal from the Utilities menu
  * Type csrutil disable and press return
  * Restart the Mac

Hopefully this post has helped you out a bit.