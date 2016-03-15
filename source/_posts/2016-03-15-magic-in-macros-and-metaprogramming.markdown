---
layout: post
title: "That’s so meta"
date: 2016-03-15 00:24:19 -0400
comments: true
categories: "Flatiron &nbsp; School"
---

## Magic in Macros &amp; Metaprogramming 

{% img /images/magic.png 600 %}

I recently began learning Ruby on Rails, and my predominant thought was ‘Is this magic?'. Rails incorporates the use of ‘macros’, which are simple yet powerful statements that run many lines of code.  Some of the more common ones are ‘resources’, ‘has_many / belongs_to’, and ‘accepts nested attributes’.  And while a magician never reveals his tricks, macros are simply Ruby code. Ruby's flexible approach to syntax coupled with Rail’s ‘convention over configuration’ just makes this seem cooler that it actually is. AKA magic.



Using metaprogramming, Rails writes a lot of the methods for us.  And because Ruby is a dynamic language (versus a statically typed language),  it gives you the freedom to define methods and even classes during runtime.

A dynamic language, in a nutshell, allows you to set the same variable to an integer, string, hash, etc.  It allows you to do the following:

```ruby
var something = 1;
something = "Foo";
something = {foo => ‘bar’}
```

Here, I will attempt to break down the ActiveRecord has_many macro and explain how it works under the hood. 

```ruby
class Ruby

	def self.has_many(name)
		puts ‘#{self} has many #{name}”
	end

	has_many :gems

end

=> “Ruby has many gems”
```

If has_many :gems calls on the method Ruby.has_many method, and passed in gems for the name argument.

In Rails, the has_many dynamically defines a handful of methods for managing the association.  For example, in this case it would generate a gems method, that would return the gems associated with the Ruby class.  How would we do that? 

```ruby
class Ruby

	def self.has_many(name)
		puts "#{self} has many #{name}”

	def gems
	 	puts “SELECT * FROM gems WHERE …"
	 	puts “returning gems”
		[]
		
	end

	has_many :gems
end
```

However, this is hard-coded, and we don’t yet know the names of those methods until run-time, so we need to dynamically define those methods, on the fly.  

 Dynamic methods are a set of methods that can create or call methods when the actual name of the method is not known. The define_method is a dynamic method which takes the name of the method we want to generate.  The body of the block becomes the body of the method.

We want to define a method that corresponds to the name of the association, and we have that in the argument name.  define_methods, when executed, create other methods that can then be called on an instance object. It defines an instance method in the receiver, which in this case is the Ruby class.

```ruby
class Ruby

	def self.has_many(name)
		puts ‘#{self} has many #{name}”
	
		define_method(name) do
	 		puts “SELECT * FROM #{name} WHERE …”
			puts “returning #{name}”
			[]
			
	end

	has_many :gems

end

ruby = Ruby.new
ruby.gems

=>
Ruby has many gems
SELECT * FROM gems WHERE…
returning gems.
[“Annotate”, “Pry”, “Better_errors”]
```

When we run this code it first calls on has_many :gems, and defines the method.  Then if we call ruby.gems, it will run the method and return the gems.  
Because we define it dynamically, we can also say has_many :methods, or anything else, for that matter.

Now how do we share this across multiple classes?

```ruby
module ActiveRecord
  class Base
	def self.has_many(name)
		puts ‘#{self} has many #{name}”
	
		define_method(name) do
	 		puts “SELECT * FROM #{name} WHERE …”
			puts “returning #{name}”
			[]
	 end
  end
end

class Ruby < ActiveRecord::Base

	has_many :gems
	has_many :methods
end
```

Now things are beginning to look more familiar.  We put this in the class Base in a module named ActiveRecord, and have our classes inherit these magical powers.


{% img /images/i_love_magic.gif 600 %}



