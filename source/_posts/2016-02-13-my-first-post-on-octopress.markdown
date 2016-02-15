---
layout: post
title: "Pipes"
date: 2016-02-13 00:00:33 -0500
comments: true
categories: "Flatiron School" 
---
Double pipes. For me, they've been like that cool kid that you see around, but don't think you can ever relate to. But then you get acquainted, speak to them once or twice, finally get to know them, and they're suddenly someone you love having around. 

In it's simplest form, the || is used as an or operator. Ruby will first read what is on the left, and if that is truthy, will return true.it will never evaluate what is on the right side of the pipes. 

This is handy when you have anything that may evaluate to nil. 

For example, when used in a class variable where you are using the find method. What if the element doesn't exist? It will return a nil value. Any action you want to continue to do if that's the case, such as create the element, or continue to iterate through the loop, can be put on the right side of the pipes. 

Things get a little counter-intuitive when using it with the assignment operator. The || = is different than the syntactical sugar we use for += or -=. 
That would mean 
X+=Y
is the same as:
X = X + Y
So you would think it means:
X||=Y
Would mean:
X = X || Y

What it means:
X || X = Y

This is useful in class instance variables, when you have an empty array. You don't want it to return the empty array. 

That's that for pipes. It's a good friend to have. 