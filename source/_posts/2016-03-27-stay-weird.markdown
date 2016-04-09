---
layout: post
title: "Stay weird, JS"
date: 2016-03-27 14:54:13 -0400
comments: true
categories: "Flatiron&nbsp;School"
---

##Why the Wat

{% img /images/what.gif 300 %}


Javascript is weird.  There are some odd behaviors it exhibits, with strange outcomes. You can learn more about some of it’s oddities by watching [this lightning talk](https://www.destroyallsoftware.com/talks/wat) by Gary Bernhardt from CodeMash 2012.

But hey, that’s enough trash talk.  In the spirit of giving the benefit of the doubt, let’s explore the reasons for some of its odd behavior. Maybe it's just having a bad day.  Maybe it was never loved as a child.  We don't know.

First and foremost, we should know that the general rule in Javascript is that the plus operator can be used for the following: 

1. As an addition operator, operating on two numbers
2. As a string concatenation operator, operating on two strings
3. As a prefix operator, indicating a positive number, operating on a single number

 This means you can only add Numbers and Strings, so any time you are using the + operator and are trying to add other values, such as arrays or objects, Javascript will convert it to either a string or a number, first.  

* Boolean, Null, and Undefined coerce to a number
* Objects and functions all coerce to a string


Here we go.
___
**Array + Array = Empty String**

```javascript
[] + [] = ‘’
```

Since our object is an array, and an array object has a valid toString() method on it, Javascript will try to convert it to a string by calling the object.toString().  

```javascript
[].toString() 

=> ‘’
```


For arrays, this is the same as calling [ ].join(), which will also return an empty string.  Therefore, [] + [] is the concatenation of two empty strings, which will return a single empty string.

```javascript
‘’ + ‘’

 => ‘’
```


Next:

**Array + Object = '[object Object]’**

```javascript
[] + {} = '[object Object]’
```



Similar to the above, we already know Javascript will attempt to convert both to primitives.  It will return an empty string for the array.  Then, it will attempt to call the toString method on the right-hand side (RHS), which is our object.  However, {} does not implement a toString() method. However, all objects do inherit this method from Object.prototype, which, when calling toString() on Object, will return ‘object’, and the value of the object, as follows: 

 * If the value is undefined: "[object Undefined]"
 * If the value is null “[object Null] 

Since an empty object is neither null, nor undefined, it will return ‘[object Object]’.  

```javascript
String( { foo: ‘bar’ } )

=>  ‘[object Object]’
```

So when concatenating ‘’ +  ‘[object Object]’, it will still return: '[object Object]’

**Object + Empty Arary = 0**

```javascript
{} + [] = 0
```


This is where things start getting weird.  When coding in JS, we wrap our statements in curly braces, such as if and else, to indicate a code block. Generally speaking, if the { appears at the beginning of a statement it’s going to be interpreted as a code block, so it will simply look at the left-hand side (LHS) operand as an empty block of code.  That would mean the + appears as the beginning of the next statement, and it is interpreted as prefixing a positive number.  And an array, all together now, is coerced into an empty string.  Because of the + prefix, it will then convert that to a number.  What happens when we coerce an empty string to a number?

```javascript
Number(“”)

 => 0
```

We’ve got this.

**Object + Object = Not A Number**

```javascript
{} + {} = NaN
```


This should be easy, seeing as we already know Javascript’s quirks.  It will interpret the LHS as an empty code block. It will then try to convert the RHS, by first returning ‘[object Object]’, if you remember that.  Then, since it sees + as a prefix + operator indicating a positive number, it will attempt to convert it to a number.  What happens when we convert strings to numbers?

```javascript
Number(“Foo”) 

=> NaN
```
___

And voila, there we have it.


Okay, so maybe Javascript is still a little weird. But weird is good.  At least that's what my mother used to tell me.

#### *“Be weird. Be random. Be who you are."*
-- *C.S. Lewis*	

{% img /images/bowties.png 500 %}
