---
title: How to get() the value from a Swift Result
date: 2021-10-14
author: ricsantos
layout: post
---

So you are being a good Swift dev, and started using `Result<Success, Failure>` in your code as a return type where necessary.
<br>

But, you say, it is an `enum`, which is cool, except you need to switch on it or even worse do a `case let` dance to get the success value.
<br>

There has to be an easier way. Well there is, and it's all in the name!
<br>


```
func getPurpleThing() -> Result<Thing, Error> { ... }

func doIt() {
    guard let thing = try? self.getPurpleThing().get else { return }
}
```

<br>
