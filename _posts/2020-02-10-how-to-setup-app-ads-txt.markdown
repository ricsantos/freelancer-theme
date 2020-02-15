---
title: How to setup app-ads.txt for AdMob and iOS
date: 2016-10-20T20:32:39+09:30
author: ricsantos
layout: post
---

Did you receive an email from Google recently telling you to `Protect your apps with app-ads.txt`? I did. I run Google Ads on a bunch of my iOS apps, and decided to figure out how easy or hard it is to set this up.

From the email:

> *What is app-ads.txt?*
> App-ads.txt is a simple, flexible, and secure method for app publishers and distributors to fight ad fraud by declaring authorized sellers for their inventory.
> Developed by the IAB Tech Lab, the standard is a way to secure your inventory and ensure advertiser spend is reaching the intended publisher.
> Similar to robots.txt, app-ads.txt can only be posted to a developer’s domain by the app developer’s webmaster, making it valid and authentic.


There is a [Google support](https://support.google.com/admob/answer/9363762) link to read more about how to set it up provided in the email.

First step is creating the actual `app-ads.txt` file, for which the article links to  [Authorised Sellers for Apps specification](https://www.iabtechlab.com/wp-content/uploads/2019/03/app-ads.txt-v1.0-final-.pdf). I decided that that specification was too long, and simply started with a blank file.

*Say what? Yes, if you are looking for an example app-ads.txt file that works, you just need a blank text file.*

Then head over to your [AdMob](https://apps.admob.com) account, and click the [How to setup app-ads.txt](https://apps.admob.com/v2/apps/appadstxt) button, which will present a popup with a code snippet. Mine looks like this:

```
google.com, pub-5817733678647789, DIRECT, f08c47fec0942fa0
```

Grab that, and paste it into that blank text file, and host the file at the root of your domain, eg [here](https://www.ricsantos.net/app-ads.txt)

You can confirm it is setup correctly via the status light on the [AdMob app-ads.txt](https://apps.admob.com/v2/apps/appadstxt) page. I had to wait over a day for the status became green.

Also, not all of my apps had a value in the `app-ads.txt URL` column on that page. This base url is determined from the *Marketing URL* property on your App Store listing (for iOS), so make sure you have the correct value set there.
...