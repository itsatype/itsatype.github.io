---
layout: post
title: "How to: Access Adwords API &amp;&amp; Parse the Response"
date: 2016-10-23 00:06:56 -0400
comments: true
categories: "JSON Adwords Api OAuth"
---

When accessing APIs, I find it usually goes one of two ways:  Surprisingly effortless, or unexpectedly painful.  This isn’t necessarily because the documentation or the API structure is lacking, just that sometimes you run into unaccounted errors or difficulties.  
Recently, I’ve attempted to access the Google Adwords API to automate reports.  This post will serve as a tutorial for A.  How to access the  Adwords API (using OAuth2 and the Adwords Client Library)  B. Parsing the JSON response to extract useful data (using Python).

## Accessing the Adwords API

What we'll need:

1. Developer Token
2. Client Customer Id 
3. OAuth2 Client Id, OAuth2 Client Secret
4. Refresh Tokens (This is where things might get tricky)
	1. Setting up the Client Library
	2. Generating Refresh Tokens

  {% img http://www.bobservation.com/wp-content/uploads/2013/02/Coins.png %}

Okay, let's do this.

### 1. Developer Token

  When you're logged in to AdWords with your manager account, click on the gear icon in the top right corner; select Account settings from the drop-down menu; then AdWords API Center from the left menu, and follow the instructions to apply for AdWords API access.
  *Note: Your pending developer token must be approved before using it with production AdWords accounts.  I know, it's a process.

### 2. Client Customer Id
	
  This will simply be the Google Adwords Client for which you would like to request data.  Easy breezy.
  
{% img /images/adwords_account.png %}

### 3. OAuth2 Client Id, OAuth2 Client Secret
#### A word on OAuth
> OAuth allows notifying a resource provider (e.g. Google Adwords) that the resource owner (e.g. your Adwords Account ) grants permission to a > third-party (e.g. your Application) access to their information (e.g. the list of your keywords).

#### Now for OAuth2
> OAuth 2.0 focuses on client developer simplicity while providing specific authorization flows for web applications, desktop applications, and mobile phones. 
[Source](https://oauth.net/2/)

Erm, okay.  Bigger and better, we get it.  But what does that mean? One improvement you may have noticed is that it allows support for non-browser applications, such as mobile apps.  For example, in OAuth 1.0, mobile apps had to direct the user to their browser, authenticate with the service, and copy the token from the service back to the app. 

Now that we've established beneficial reasons to go through this arduous process, let's begin.

Log in to the [Google API Console Credentials Page](https://console.developers.google.com/apis/credentials)

1. From the project drop-down, choose Create a new project, and complete the form.
2. From the Create credentials drop-down, choose OAuth client ID and complete the form.
	 *Note: You may be prompted to Configure Consent Screen. Supply the requested info and click Save.*

The OAuth2 client ID and client secret appear.  Voila.  3 down, 2 more to go.  Inhale.

### 4. Setting up the Client Library and adding your tokens.
1. Install the adwords gem: `gem install google-adwords-api`
2. Copy the [adwords_api.yml](https://raw.githubusercontent.com/googleads/google-api-ads-ruby/master/adwords_api/adwords_api.yml) file into your home directory.
	**Important:** Place the file in your Home directory! That is the default location the Client Library will look for your credentials. You can move into your home directory with `cd ~`. 
3.  Copy all of the tokens you received in steps 1 - 3 as values to the relevant keys.
{% img /images/screenshot.png %}

### 5. Generating a Refresh Token
	
1. Make a new file, named setup_oauth2.rb, and copy [this file](https://raw.githubusercontent.com/googleads/google-api-ads-ruby/master/adwords_api/examples/v201605/misc/setup_oauth2.rb) into it.
Run the file (make sure you're in the right directory) from the terminal: `ruby setup_oauth2.rb`  
{% img /images/adwords_2.png %}
2. It will then prompt you to visit a URL where you will need to allow the OAuth credentials to access the API. Navigate to the URL, and click Allow on the OAuth2 consent screen.
3. Copy and paste the code into the terminal. It should then display an offline refresh token.

*Note for Step 2. You might hit a snag and receive the following error, as I did:*
	`Error: SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (Faraday::SSLError)`
	[SSL Solution here](https://github.com/google/google-api-ruby-client/issues/235)

And that's that! You’re all set up to make your API Call.

{% img https://i.ytimg.com/vi/-wzz4BvFQSI/maxresdefault.jpg  400 %}

### (Finally) making your API Call
To get a list of all campaigns, make a new file, named get_campaigns.rb, and copy [this code](https://raw.githubusercontent.com/googleads/google-api-ads-ruby/master/adwords_api/examples/v201609/basic_operations/get_campaigns.rb).
Run from your terminal: `ruby get_campaigns.rb`

## Parsing that JSON:

Now that we’ve received our JSON response from the Adwords API, we’d like to start interacting with out data.  

First, A word about JSON:
> JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write. It's easy for machines to parse and generate. JSON is a text format that is completely language independent. These properties make JSON an ideal data-interchange language.

[Source](http://www.json.org/)

### `{"JSON": "Awesome" }`
This is so easy and simple to use, that after a brief single-page description, the documentation offers this artful statement: Excepting a few encoding details, that completely describes the language.

What makes valid JSON? It’s simple.  Basically, Each name, which must be a string, is followed by a colon and the name/value pairs are separated by a comma.
{% img http://www.json.org/object.gif %}

A value can be almost anything.  It can be a string in double quotes,  a number, true or false or null,  an object, or an array. These structures can be nested, as well.

  {% img http://www.json.org/value.gif %}

We’re going to use this example, derived from the adwords account of a science fiction bookstore.
```json
{
  "I, Robot": {
    "Avg. position": 3.1,
    "Clicks": 1,
    "Conversions": 0,
    "Cost": 1490000,
    "Impressions": 55,
  },
  "Do Androids Dream of Electric Sheep? ": {
    "Avg. position": 2.9,
    "Clicks": 109,
    "Conversions": 13,
    "Cost": 6520000,
    "Impressions": 22,
  },
  ...
}  
```

### Let's sort this out

Now let’s assume we want to know which keyword has the most clicks, or the highest cost, or the most conversions.
First, we create an Adwords class, which we initialize with the JSON Data we received, and we parse it with the Python json library.

```ruby
import json
class Adwords(object):
  def __init__(self, report):
    self.report = json.loads(report)
```

Then, we can create a sort_by method, which will take an argument of the criteria we’d like to sort by, such as ‘clicks’ or ‘conversions’:

```python
def sort_by(self, criteria):
  keywords = list()
  for keyword, data in self.report.items():
    keywords.append((keyword, data[criteria]))
  return sorted(keywords, key=operator.itemgetter(1))

Adwords(report).sort_by("Clicks")
# =>[('Do Androids Dream of Electric Sheep? ', 109), ('science fiction books about time travel', 50), 
# ('science fiction books about space', 10), ('doctor who books', 8), ('I, Robot', 3)...]

Adwords(report).sort_by("Impressions")
# => [('science fiction books about the future', 1000),  ("The Hitchhiker's Guide to the Galaxy", 346), 
# ('science fiction books about robots', 152), ("The Hitchhiker's Guide to the Galaxy"', 100), ('I, Robot', 55), ...)
```

This method will first create a list of tuples of just the keywords and the value of the criteria we’d like to sort by.  Then we sort it with the following: `return sorted(keywords, key=operator.itemgetter(1))`

This way, we can pass any criteria we’d like, and it will return a sorted array of keywords.

However, as we mentioned, parsing a format like JSON presents a bit of a problem, because anything could show up in the JSON body.  So before we sort the data, we want to ensure it's a number.
```if type(data[criteria]).__name__ == 'int': keywords.append((keyword, data[criteria]))```

*As a bonus: If we’d like to abstract the data so that our program will take a different action, depending on the data type, whether it is a list, dictionary, string, etc., we can do the following:*

<script src="https://gist.github.com/itsatype/f7a47a443e813d4837f1881749465530.js"></script>

Takeaways: It's a step-by-step process getting up and running with the Adwords API.  But we can then do all this pretty cool stuff with the JSON response, which is pretty awesome.

#### **Helpful Resources:**
[Adwords API Docs](https://developers.google.com/adwords/api/docs/guides/first-api-call)
[Json.org](http://www.json.org/)
