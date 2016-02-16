---
layout: post
title: "Pipes"
date: 2016-02-13 00:00:33 -0500
comments: true
categories: "Flatiron School" 
---
<img src = "../images/pipes.png" width = "500px;" />

The double pipes, also known as a short circuit operator because it will only evaluate the second argument if the first argument is not sufficient to determine the value of the expression, is a great tool for writing concise code.   In addition to being the logical "or" operator, they're handy when used with a method which may evaluate to nil, such as find, or when used with the assignment operator, the "or equals". 
For me, they've been like that cool kid that you see around, but don't think you can ever relate to. But then you get acquainted, speak to them once or twice, finally get to know them, and they're suddenly someone you love having around. 


## Double Pipe Equals: ||=
However, things may seem counter-intuitive when using it as a conditional assignment operator, because the || = works differently than other operators such as the += or -=. 

### The Misconception
<img src = "../images/misconception.jpg" width = "300px;" />


So:
```ruby 
X += Y
```
is the same as:
```ruby 
X = X + Y
```
Therefore you would expect:
```ruby 
X ||= Y
```
To mean:
```ruby 
X = X || Y
```

But what it is actually shorthand for is:
```ruby 
X || X = Y
```

What it means is if X is false, nil or undefined, then evaluate Y and set X to the result.  Ruby's short circuit evaluation means that if X is defined and evaluates to true, then the right hand side of the operator is not evaluated, and no assignment takes place. 

In Essence: 

```ruby 
a ||= 1;
=> 1
a ||= 2;
=> 1

foo = false;
=> false
foo ||= true;
=> true
foo ||= false;
=> true
```


This can be handy when assigning key/value pairs with hashes.  For example, when given a hash, this expression:

```ruby 
hash[:key] ||= "value"
```

Expands to:

```ruby 
hash[:key] || hash[:key] = "value"
```

This means that hash[:key] = "value" will only be executed if hash[:key] is either false or nil, meaning the key does not yet exist.  So if the key already exists, the value will not be changed, since the left side evaluates to true, and it will return the value for that key.  If, however, the key does not exist, the left side will evaluate to nil, in which case it will execute the right side, and create the key/value pair.

This distinction is also significant when used with a setter/getter method in a Class.  For example, we can has an instance method for calculating the total:

```ruby 
Class CashRegister

  def total
    @total ||= (1..100).to_a.inject(:+)
  end

end
```

Now we can call on the total method as many times as we'd like.  The first time, @total will evaluate to nil, and will calculate the total to the right.  It will then also assign @total to that value.  On all future events where we call on that method, it will simply return the value of @total.



That's that for pipes. It's a good friend to have. 

<img src = "../images/time_up.png" width="400px;" />

