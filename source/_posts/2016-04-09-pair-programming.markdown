---
layout: post
title: "Pair Programming"
date: 2016-04-09 17:03:56 -0400
comments: true
categories: "Flatiron &nbsp; School" "Ruby" "Pair &nbsp; Programming"
---
## Programming in Paris..um, I meant Pairs.
*That was me fumbling because I was typing while pair programming, which often leads me to erratic typing and the inevitable ensuing typos.*



Pair Programming is an Agile Software Development practice where two (or sometimes three or four, if you’re working on a group project together at Flatiron School), program together.  Generally, there is one person that is typing at the keyboard, referred to as the driver, and the other is observing and offering input and direction, known as the navigator.

{% img https://rickischultz.files.wordpress.com/2010/02/kirk-spock-mccoy.jpg %}


The touted benefits of pair programming are enormous.  Most notably:

1. Pair programmers spend about 15% more time on programs than solo programmers, but the resulting code has about 15% fewer defects and bugs. 
2. The transfer of knowledge between pair programmers is immediate, from tips on programming language rules to overall skill, or just a handy keyboard shortcut.
3. In a survey of pair programmers, 96% of them stated that they enjoyed their work more than when they programmed alone, and that they were more confident in their solutions when they pair programmed.


{% img http://dsouthard.github.io/CSCI5828_PairProgramming/images/mistakes.png %}


Yet, though it’s been over two months that I’ve been pair programming, I still feel like I haven’t gotten the hang of the  different roles yet.  What is required of the navigator? Do they just watch as the other person types, and only jump in if they are directly asked a question? When is it okay to intervene if you think something is wrong? How long do you wait before pointing out a typo? If you aren’t following the driver’s thought process, how do you rectify that? 

What about the driver? Are you to always take the navigator’s suggestions and implement them? What if it takes you down a rabbit hole? Should you just be typing whatever the navigator dictates? How do you ensure that your partner isn’t just watching as you type, but instead is engaged in your thought process? 

So I’m going to attempt and break this down, so it’s clear what each role is supposed to be doing, and what some of the best practices are, so that everyone gets the most out of the experience as possible.

{% img http://assets.amuniversal.com/2607a8e06d5901301d7d001dd8b71c47 %}


First, let’s look at some of the no-nos while pairing. 

## Pairing Smells
* Unequal Access to Keyboard: Both Pair Programmers should be able to reach the keyboard and see the screen equally well.

* Worker/Rester: Both the driver and navigator should actively be participating at all times.  If one needs a rest, maybe take a break, or it's time to switch roles.


* Silence: At least the driver, but even the navigator, are expected to keep up a running commentary at all times, so that everyone stays in the loop. Pair programming is about "programming out loud”. If someone is silent too long, feel free to intervene.

* Debating: Debates lasting longer than a few minutes are pointless.  Rather than arguing about it, the better solution is for one or the other to quit telling and start showing how they want the code to work. Arguing in code is better than arguing about code.


Now for some tips in each of the roles.

## The Driver:

* When you start pairing, expect to feel clumsy and fumble-fingered as you drive. You’ll make typos and perhaps go at a faster or slower pace than you normally would while coding solo.  Things will greatly improve with time, and come naturally.  Just get it out of the way.

* You may feel or realize that the navigator sees ideas and expected problems sooner than you do. And they very well might.  This is because they have more time to think than the driver does.  That is their role.

* As you drive, think out loud.  This helps the navigator follow your thought process and understand your decision to go a certain direction.  It’s easier to follow the code if you are the one doing the typing.  Keep them in the loop.

* If the navigator suggests trying something out, and it won’t take too long to implement their idea, even if you don’t think it will work, try it.  You’ll never know otherwise.


* If the navigator is more experienced, respect that.  It’s all about the learning experience, so it only means you have more to gain.  Accept their input and implement their suggestions.  Learn from their insights and thought process.  

* Conversely, if the navigator is dictating code word for word, stop and listen. This will ensure that they tell you more of their plan than what syntax to type, so you can gain an understanding of what they are trying to implement.


* Don’t drive too long.  Ask the other person to drive!

## The Navigator:

* Let the driver finish writing a complete line of code before pointing out an error.  They may sometimes be aware of their mistake, but are waiting until they finish typing to go back and fix it.  A good navigator knows when to wait a little bit before pointing out a missing semicolon somewhere, and will do it when there’s a natural pause in the driving.


* Expect to feel like you want to step in and take the keyboard away from your partner. It’s so much easier than watching them fumble their way to something.  Relax, you’ll usually learn something by observing the other’s thought process.

* It’s easy to get carried away and treat the driver as an order-taker, especially if you are more experienced in the field. Try to avoid doing this by allowing the driver to go at it when they can, and offer direction when they get stuck on how to proceed.

* Pay attention. It’s easy to lose focus when you aren’t the driver. When you pay attention, talk, and listen, you become engrossed in the work.  If you do lose focus, mention this right away and be brought up to speed.  Don’t wait.

* The person who knows less about the system or language should do most of the driving, to ensure that they stay engaged, and that the knowledge gap doesn’t widen. You learn more actively than passively.

* If the driver is more familiar with the code or language, they might be going full speed ahead, leaving you to simply watch as a solution emerges.  In order to stay more involved, ask them to slow down and explain.  This might also be a good time to ask to drive.

* When a question arises, take a moment to look up the answer (I’m looking at you, StackOverflow), while the driver continues to type.  If the research requires more than a few minutes, investigate the solution together. Sometimes the best way to do so is to split up and then come back together to share what you’ve both learned.

* Ask to drive!


Lastly, whether you’re a driver or navigator, if you're confused about something, **ask questions**.  The ensuing discussion may enlighten your partner as much as it does you.  Often, forcing someone to explain something and break it down allows them to understand the concept on a whole new level, and see it in a different light.

It is possible that one partner knows more than the other or that there are multiple ways to achieve the same results. However, no matter the skill level, from my experience, there is always something to learn when pairing.

{% img https://hot4spock.files.wordpress.com/2009/05/naked2.png %}


#### *“'If you want to go fast, go alone. If you want to go far, go together"*

Resources: 

http://agileinaflash.blogspot.com/2009/02/pair-programming-smells.html

[Pair Programming Illuminated](http://www.amazon.com/Pair-Programming-Illuminated-Laurie-Williams/dp/0201745763)

To become a better pair programmer, also read about: [Egoless Programming](http://blog.codinghorror.com/the-ten-commandments-of-egoless-programming/)