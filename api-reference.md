[click to view as a presentation](https://presentations.generalassemb.ly/e781586626f7a0b8e1d79faedfcb46b1#/1)

---
# Consuming 3rd Party API<small>s</small>

<img src="http://i2.wp.com/blog.mashape.com/wp-content/uploads/2013/11/tumblr_inline_mwmo0abIJ81rghs7f.png?resize=448%2C303" width="900">

---
# Learning Objectives
<br>

<p>Students will be able to:</p>

- Consume a third-party API from an Express backend

- Render an API's data in an EJS Template

- Make multiple requests to retrieve "detail" data

---
# Roadmap

1. What kind of API are we talking about?
1. Why consume third-party APIs?
1. Research available APIs
1. I have a simple request
1. Different architectural approaches
1. Generate our starting app
1. Code our `index.ejs`
1. Add the POST route
1. Install and require the `request` module
1. Review the GitHub API docs
1. Access Tokens
1. Fetch data from GitHub's API
1. Render the data
1. Details, I want details!

---
## What kind of API are we talking about?

---
### What kind of API are we talking about?
<br>

- The term _API_ is quite vague and used within several contexts.

- The acronym actually stands for **Application Programming Interface**.

- _Application Programming Interfaces_ originally, and still do, allow  programmers to use the functionality of a library, a framework, an operating system, or any piece of software that exposes its functionality through its defined interface.

---
### What kind of API are we talking about?
<br>

- As the Internet has evolved, the term API has also come to represent the process of sending HTTP requests to web servers to invoke a service, for example, update your status on Facebook. No UI required.

- However, in today's lesson we're interested in external (third-party) APIs that respond with data when we send them requests.  

---
## Why consume third-party APIs?

---
### Why consume third-party APIs?
<br>

- Data is information (duh), and...

- Information is a good thing!

- There's lots of data being exposed via APIs across the Internet, often free of charge, that we can use in our apps!

---
### Research Available APIs
<br>

- Pair up and search for third-party APIs that provide data.

- In five minutes, be prepared to share with the class:
	- The source of one of the APIs you found
	- What kind of data made available
	- It's access requirements and limitations (free, usage quotas, etc.)

---
## I have a simple request

---
### I have a simple request
<br>

- You've already seen simple requests made to APIs before.

- Just to get in the mood, let's make a GET request to a third-party API straight from the browser's address bar:

	```sh
	http://pokeapi.co/api/v2/pokemon/1
	```

- **What data format was returned?**

---
## Different architectural approaches

---
### Different architectural approaches
<br>

- When accessing APIs, there are a few different architectural approaches we can take:
	1. Make requests to the API directly from the browser using AJAX; then do some client-side rendering.
	2. Access the API from the server, pass JSON back to the browser and render there.
	3. Access the API from the server, perform server-side rendering of the data, and return the HTML page to the browser.

- In WDI, we'll ultimately use all three approaches. However, for this lesson, we'll use the third approach.

---
### Review the finished application
<br>

- The app we will build is a single view (_index.ejs_) application that displays basic information about users of GitHub.

- Let's take a look at what it will look like...

---
## Generate our Starting App

---
### Generate our Starting App
<br>

- Once again, we're going to use Express Generator to scaffold a basic app.

- Instead of my direct assistance, work with your pair to pull this off.

- Be sure to specify the EJS view engine.

- Name the app `github-users`.

- Kind of prefer `server.js` instead of `app.js` too.

- Make sure to test it out when you're done.

---
## Code our "index.ejs"

---
### Code our "index.ejs"
<br>

- We're going to use the existing `index.ejs`.  For now, we will want to:

	- Adjust the existing boilerplate.
	
	- Add the Search form

- Later, when we see what data is at our disposal, we'll come back and decide how to render it. 

---
### Adjust the boilerplate

- <p>We're adding [Bootstrap](http://getbootstrap.com/getting-started/), [jQuery](https://code.jquery.com/), changing the title and adding a Jumbotron:</p>

```html
<head>
	<title>GitHub Users</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel='stylesheet' href='/stylesheets/style.css' />
	<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>
<body class="container">
<h1 class="jumbotron text-center">GitHub Users</h1>
    
</body>
``` 

<p>Next, the search form...</p>

---
### Add the Search form

- We'll need a simple form to allow us to submit a GitHub username to retrieve data for:

	```html
	<div class="row">
	  <div class="col-xs-6 col-xs-offset-6">
	    <form action="/" method="POST">
	      <div class="input-group">
	        <input type="text" name="username" class="form-control"
	        		placeholder="Enter a GitHub Username">
	        <span class="input-group-btn">
	          <button class="btn btn-success"
	          	type="submit">Go!</button>
	        </span>
	      </div>
	    </form>
	  </div>
	</div>	
	```

---
## Add the POST route

---
### Add the POST route
<br>

- We're going to need a `POST /` route for when the form is submitted by clicking the "Go!" button.

- In _routes/index.js_:

	```js
	router.get('/', function(req, res, next) {
  		res.render('index');
	});

	router.post('/', function(req, res, next) {
  		console.log(`username: ${req.body.username}`);
  		res.render('index');
	});
	```
- For now, we're just logging out to the server terminal what was typed in the input then rendering back out index view.

---
## Install and require the "request" module

---
### Install and require the "request" module
<br>

- In order to make HTTP requests from our Express server to the GitHub API, we will need to install and require a NPM module named [request](https://www.npmjs.com/package/request), a simple HTTP request client:

	```
	? npm install --save request
	```

---
### Install and require the "request" module
<br>

- Now lets require it in _routes/index.js_:

	```js
	var express = require('express');
	var router = express.Router();
	var request = require('request');
	```
- What? No separate controller module? Let's be rebels this lesson!

- Now, we need to review the documentation for the GitHub API...

---
### Review the GitHub API docs
<br>

- Let's pair up and review the [GitHub API](https://developer.github.com/v3/) docs with the goal of discovering:
	- What is the API's **Root Endpoint**?  The root endpoint is the first part of the API's URL that remains fixed. Paths are then appended to the root endpoint to form other endpoints for specific requests.
	- Are there limits to the number of times we can "hit" the API?

- After the above...

---
### Review the GitHub API docs
<br>

- After identifying the _root endpoint_, use your browser to make a request using that endpoint.

- GitHub has written their API so that when we do a GET request on the _root endpoint_, it returns JSON representing all endpoints available.

- Scrolling down toward the bottom will reveal a couple of endpoints that we are going to use - so take note of them:
	- **user_url**: This endpoint returns some info about a user, such as a link to their avatar...
	- **user_repositories_url**: This endpoint returns an array of repositories the user is involved with.

---
## Access Tokens

---
### Access Tokens
<br>

- So, the answer to this question...

>Are there limits to the number of times we can "hit" the API?

- Is **YES**.

- According to their docs, GitHub limits anonymous user's requests to only 50 per hour, tracked by IP address; and guess what, because we are all on the same wireless network, the API will see us as all having the same IP address.

- Yup, we're going to need to obtain an access token so that we can make up to 5,000 requests/hr.

---
### Access Tokens (cont.)

- Let's check out the API's rate limiting by making a request in Terminal using `curl`:

	```
	? curl -i https://api.github.com/
	```

- Scroll up to the beginning of the output and check the headers:

	```
	HTTP/1.1 200 OK
	Server: GitHub.com
	Date: Sun, 02 Oct 2016 14:52:10 GMT
	Content-Type: application/json; charset=utf-8
	Content-Length: 2064
	Status: 200 OK
	X-RateLimit-Limit: 60
	X-RateLimit-Remaining: 57
	```
- Run the request again and check out the limits now.

---
### Access Tokens (cont.)

- According to the docs, we can obtain personal use tokens directly from our personal GitHub accounts.

- Make sure you are logged in to your GitHub account and go to _settings_.

- Select _Personal access tokens_ from the menu at the bottom-left.

- Click the _Generate new token_ button.

- Enter a description and click the _Generate token_ button at the bottom. There is no need to select any of the scopes listed.

- Copy your token to the clipboard...

---
### Access Tokens (cont.)
<br>

- Now let's hit the API again but this time providing our token in a query string like this:

	```
	? curl -i https://api.github.com/?access_token=1a1596cfe44...
	```

- Inspect the limits in the headers and you'll notice that we each personally have 5000 requests available - and no more sharing!

- Note that the docs show how tokens can also be submitted in the headers of the request.

---
### Access Tokens (cont.)
<br>

- Remember, we do not want to expose tokens, keys, database connection strings, or other secrets in our source code.

- Instead, for development purposes, we store secrets in a `.env` file and load its contents into the system's environment variables - like we saw with the _Figaro_ gem in Rails.

- In Node apps, we use a module called **_dotenv_**...

---
### Access Tokens (cont.)
<br>

- Let's install _dotenv_:

	```
	? npm install dotenv --save
	```
	
- Then all we have to do is add this code near the top of _server.js_:

	```js
	var bodyParser = require('body-parser');
	// load secrets from .env file
	require('dotenv').config();
	``` 

---
### Access Tokens (cont.)
<br>

- Lastly create a `.env` file and add a variable for our token:

	```sh
	GITHUB_TOKEN=1a1596cfe4484ff...
	```

- No spaces or quotes please.

- Uppercase with underscores between words is best practice.

- Now you will be able to access the token in code like this:

	```js
	var token = process.env.GITHUB_TOKEN;
	```

---
## Fetch data from GitHub's API

---
### Fetch data from GitHub's API
<br>

- When we submit the GitHub username in our app our goal is to display the user's:
	-  GitHub username
	-  Avatar
	-  A list of their repos (as hyperlinks that open the repo home pages in new tab.
	
- The docs don't detail what is returned when we make a request to a specific endpoint, so we're going to have to examine what comes back and go from there.

---
### Fetch data from GitHub's API (cont.)
<br>

- Earlier we discovered the _**user\_url**_ endpoint that returns general info for a username along with other endpoints that drill into that user's resources.

- The _**user\_url**_ endpoint was documented as _**https://api.github.com/users/{user}**_.

- Note that any segment that is in curly braces, such as _**{user}**_ shown above, is a named parameter and is where we need to provide actual values for.

---
### Fetch data from GitHub's API (cont.)
<br>

- First, let's define a `const` to hold the _root endpoint_ in _routes/index.js_:

	```js
	var request = require('request');
	
	const rootURL = 'https://api.github.com/';
	```

---
### Fetch data from GitHub's API (cont.)

- Now let's use the _request_ module to send a GET request to the _**user\_url**_ endpoint for the submitted username and render the entire JSON response:

- In _routes/index.js_:

	```js
	router.post('/', function(req, res) {
	  request(
	    rootURL + 'users/' + req.body.username + 
	    	'?access_token=' + process.env.GITHUB_TOKEN,
	    function(err, response, body) {
	      res.render('index', {userData: body});
	    }
	  );
	});
	```

---
### Fetch data from GitHub's API (cont.)
<br>

- We're passing the content returned from the request to our _index.ejs_.  Let's display it:

	```html
		<!-- new HTML just above closing body tag -->
		<hr>
	    <div class="row col-xs-8 col-xs-offset-2">
		    <% if (userData) { %>
		      <%= userData %>
		    <% } else { %>
		      <h3 class="text-center text-info">
		        Submit a GitHub username!
		      </h3>
		    <% } %>
	    </div>
  	</body>
	```

- Also, we have to...

---
### Fetch data from GitHub's API (cont.)
<br>

- Pass an object from the GET '/' route as well to prevent a _"userData is not defined"_ error when the home page is rendered:

	```js
	router.get('/', function(req, res) {
	  res.render('index', {userData: null});
	});
	```

---
### Fetch data from GitHub's API (cont.)
<br>

- Make sure nodemon is serving our app and try submitting your GitHub username.

- Bad news...

---
### Fetch data from GitHub's API (cont.)
<br>

>Request forbidden by administrative rules. Please make sure your request has a User-Agent header (http://developer.github.com/v3/#user-agent-required)...

- If we read what the provided link to the docs has to say, we'll learn that all requests to the API must have an `User-Agent` header and the `request` module obviously does not provide one by default.

- Let's see how we can pass an _options_ object instead of a URL only...

---
### Fetch data from GitHub's API (cont.)

- Here's our updated POST route:

	```js
	router.post('/', function(req, res) {
	  var options = {
	    url: rootURL + 'users/' + req.body.username,
	    headers: {
	      'User-Agent': 'jim-clark',
	      'Authorization': 'token ' + process.env.GITHUB_TOKEN
	    }
	  };
	  request(options, function(err, response, body) {
	    res.render('index', {userData: body});
	  });
	});
	```

- The docs suggested we pass our username as the value for the `User-Agent` header.

---
### Fetch data from GitHub's API (cont.)

- One more refactor to send our token in a header instead of the query string:

	```js
	router.post('/', function(req, res) {
	  var options = {
	    url: rootURL + 'users/' + req.body.username,
	    headers: {
	      'User-Agent': 'jim-clark',
	      'Authorization': 'token ' + process.env.GITHUB_TOKEN
	    }
	  };
	  ...
	```

- Sending auth tokens in headers is preferred over the query string.

---
### Fetch data from GitHub's API (cont.)
<br>

- One more try and we'll finally see what is returned by the API!

- Examining the JSON response we'll see that the _**login**_ property holds the username and the _**avatar\_url**_ points to user's avatar image.

- Now let's improve our view a bit to render the username and display the avatar...

---
### Render the data (cont.)

- We'll use a Bootstrap _panel_:

	```html
	<% if (userData) { %>
		<div class="panel panel-default">
		  <div class="panel-heading text-center">
		    <img src="<%= userData.avatar_url %>"
		    	class="img-circle" width="300">
		    <h2><%= userData.login %></h2>
		  </div>
		  <div class="panel-body">
		    <h3>Repos:</h3>
		    need to list repos here...
		  </div>
		</div>
	<% } else { %>
	```

- Testing it out we'll find it not working because the response `body` is just a string and needs to be parsed into JSON...

---
### Render the data (cont.)
<br>

- Update this piece of code in the POST:

	```js
	request(options, function(err, response, body) {
		var userData = JSON.parse(body);
    	res.render('index', {userData: userData});
	});
	```

- `JSON.parse()` converts a string into a JS Object and `JSON.stringify()` does just the opposite, converting a JS Object into a JSON string.

---
### Render the data (cont.)
<br>

- Finally! Not looking too bad.  Now we need to list the user's repositories.

- Do what you have to to find the endpoint that we can hit to grab the array of repos.

- Then, it's time to do some nesting...

---
### Details, I want details!

- Quite often you will need to make multiple requests to different endpoints to fetch all of the detail data you need before rendering.

- Of course, multiple requests will result in nested callbacks.  Update this section of the POST:

	```js
	...
	request(options, function(err, response, body) {
		var userData = JSON.parse(body);
		// update the options url to fetch the user's repos
		options.url = userData.repos_url;
		request(options, function(err, response, body) {
		  // add a repos property
		  userData.repos = JSON.parse(body);
		  console.log(userData.repos[0]);
		  res.render('index', {userData: userData});
		});
  	});
	``` 

---
### Details, I want details! (cont.)
<br>

- We logged out the first repo in the array so that we could see what properties are in there - and there's a bunch!

- However, we only need the `name` and the `html_url` props to accomplish our mission.

---
### Details, I want details! (cont.)
<br>

- Bootstrap has a nice version of its _List group_ component that's great for listing links:

	```html
	<div class="panel-body">
		<h3>Repos:</h3>
		<!-- new stuff below -->
		<div class="list-group">
			<% userData.repos.forEach(function(repo) { %>
				<a href="<%= repo.html_url %>" target="_blank"
		   			class="list-group-item">
		   			<%= repo.name %>
		    	</a>
		  	<% }); %>
		</div>
	<!-- new stuff above -->
	</div>
	```

---
### Congrats on consuming a third-party api!
<br>

<p>On to the lab where you will add search capability to this app.</p>
0

<br> <br> <br>

[click to view as a presentation](https://presentations.generalassemb.ly/84f0b589e03909f33106e14b9bf00a97#/1)

---
# Create an API for an Express App

<img src="http://chilion.nl/wp-content/uploads/2016/02/Node.js-REST-API-frameworks.jpg" height="500">

---
# Learning Objectives
<br>

- Know the use case for adding an API to apps

- Create namespaced routes dedicated to an API

- Respond with JSON and appropriate status codes

---
# Roadmap
<br>

- Why expose API access to an app?
- Views not required
- Postman
- We need an Express app
- Install Mongoose and connect to a DB
- Model?  Puppies, what else?
- API RESTful routes
- Proper response codes
- Set up the routes for the API
- Responding with JSON and a Status Code
- CORS
- Essential Questions

---
### Why expose API access to an app?
<br>

- Earlier we made request to third-party API endpoints. Now it's our turn to expose our own endpoints.

- Exposing an API in our own app enables:
	- Development of single-page applications (no full-page refreshes).
	- Our app's RESTful resources and functionality to be accessed by multiple front-ends (web, mobile and desktop).

---
### Views not required
<br>

- Our app's API routes will return JSON, not HTML views.

- This being the case, views do not apply when developing an API.

- However, your web app may continue to work using views as we've been doing, even after we expose an API.  They are not mutually exclusive.

---
### Postman
<br>

- In this lesson we'll be using a Chrome extension called Postman.

- Postman enables us to make any type of HTTP request, including sending along a data payload.

- Install it in Chrome by browsing to `chrome://extensions` and clicking the _Get more extensions_ link at the bottom.

- Search for and install **Postman**. 

---
### We need an Express app
<br>

- I bet you don't need me to show you how to create an Express app anymore.

- Create one named `puppies-api`

---
### Install Mongoose and connect to a DB
<br>

- Again, you're on your own (you and your classmates that is).

- Install **Mongoose** and connect to a database named `puppies`.

---
### Model?  Puppies, what else?
<br>

- You're on a roll so keep on rolling!

- Create a schema/model called `Puppy` with the following paths:
	- **name**: String / required
	- **breed**: String / default to "Mixed"
	- **age**: Number / default to 0

- When ready, we'll test in Node's REPL.

---
### API RESTful routes
<br>

- Setting up our API's routes will be very similar to how we've set up non-API routes.

- However, it's a best practice to "namespace" API related code from our app's non-API code.

- Let's start by renaming the _routes/users.js_ file to _routes/api.js_.  We'll use this file to hold the routes for our API.

- Make the necessary changes in _server.js_. If done correctly, requests will have to be made as follows...

---
### API RESTful routes (cont.)
<br>

- <p>These are the RESTful routes we need to implement:</p>

<img src="https://i.imgur.com/Y9n4SPT.png" width="900">

---
### Proper response codes

- Virtually all web APIs respond with JSON.

- However, well designed APIs also set the _status code_ of the HTTP response appropriately as well as depicted in this graphic:

<img src="http://networkop.github.io/images/rest-crud.png" width="900">

---
### Proper response codes (cont.)

- <p>Here's a more complete list of status codes:</p>

<img src="http://image.slidesharecdn.com/techgigwebservices-140514010219-phpapp01/95/webservices-overview-xml-rpc-soap-and-rest-29-638.jpg?cb=1400030388" width="900">

---
### Set up the routes for the API
<br>

- Assuming we are going to require the following controller in _routes/api.js_<br>

	```js
	var puppiesCtrl = require('../controllers/api/puppies');
	```
	
	Let's create the routes for these actions:
	- `puppiesCtrl.getAllPuppies`
	- `puppiesCtrl.getOnePuppy`
	- `puppiesCtrl.createPuppy`
	- `puppiesCtrl.updatePuppy`
	- `puppiesCtrl.deletePuppy`
	
---
### Responding with JSON and a Status Code
<br>

- We will be sending JSON and a Status Code with every request to our API.

- This is how we can do it:

	```js
	function getAllPuppies(req, res) {
		Puppy.find({}, function(err, puppies) {
			res.status(200).json(puppies);
		});
	}
	```

---
### Responding with JSON and a Status Code (cont.)
<br>

- First, let's create the controller and code the `getAllPuppies` route.

- When we're done, we'll use Postman to test out our first API route!

---
### Responding with JSON and a Status Code (cont.)
<br>

- Now, let's build out the other 5 routes.

- Let's write the `createPuppy` route next so that we need more puppies!

- We'll test the routes as we go.

---
### Congrats on exposing an API for your app!

- Although we have built-out an API for a RESTful resource, be aware that an API can also provide functionality such as logging in/out.

- Tomorrow, you'll see how to make requests from within a webpage using AJAX; as well as render the JSON response using client-side rendering.

---
### CORS
<br>

- Browsers have a security mechanism that prevents JS from making a request for a resource to a domain different from the one that the current web page was loaded from.

- The domain is made up of the **host** and **port**. Therefore, `localhost:3000` is considered a different domain than `localhost:8080`.

---
### CORS (cont.)
<br>

- To improve web applications, developers asked modern browser vendors to allow cross-origin requests and the **_cross-origin resource sharing_ (CORS)** standard came to be.

- The details can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

- To enable CORS access to our app's API, we will use middleware - of course!

---
### CORS (cont.)
<br>

- Install the [CORS](https://www.npmjs.com/package/cors) module:

	```
	? npm install cors --save
	```

- Then we simply have to mount the middleware in _server.js_:

	```js
	var cors = require('cors');
	...
	var app = express();
	
	app.use(cors());
	```

- As usual, check the docs for additional info and options.

---
### Essential Questions
<br>

- How do these two routes behave differently?<br>
	`GET /accounts` and<br>`GET /api/accounts`
	
- In addition to responding with JSON, it is proper to set the HTTP Response's _______ _______ as well.

- What is the use case for exposing an API in our app?
0
<br> <br> <br> <br>


[Click to View this Presentation](https://presentations.generalassemb.ly/df29b268f26f6892036d#/1)

<p>Note: This lesson is not broken into distinct 1:15 modules. It is designed to be spread throughout a day...</p>

---
<img src="http://www.nikola-breznjak.com/blog/wp-content/uploads/2015/01/loginfacebook2.jpg" style="width:500px">

## OAuth Authentication<br>with<br>Express & Passport

---
# Learning Objectives
<br>

- Identify the advantages OAuth provides for users and web apps

- Explain what happens when a user clicks "Login with [OAuth Provider]"

- Add OAuth authentication to an Express app using PassportJS

- Use Middleware & PassportJS to provide authorization

---
# Roadmap
<br>

- Why OAuth?
- What is OAuth?
- How Does OAuth Work?
- Preview the App
- The App's User Stories
- Review the Starter Code
- Today's Game Plan (11 Steps)

---
# Why OAuth?

---
### Why OAuth?
<br>

- In Unit 2, we learned how to implement username/password authentication.

- The users of your project had to sign up, providing their name, email, password, etc.

- **What are the pitfalls of username/password authentication from a _user's_ perspective?**

---
### Why OAuth?
<br>

<p style="text-align:left">Pitfalls from a user prospective:</p>

- Creating multiple logins requires you to remember and manage all of those login credentials.

- You will often use the same credentials across multiple sites, so if there's a security breach at one of the sites where you are a member, the hackers know that users often use the same credentials across all of their sites - oh snap!

- You are tempted to use simple/weak passwords so that you can remember all of them.

---
### Why OAuth?
<br>

- **<p>What would be the pitfalls from a<br><em>website or developer's</em> perspective?</p>**
  
---
### Why OAuth?
<br>

<p style="text-align:left">Pitfalls from a website or developer prospective:</p>

- Managing users' credentials requires carefully crafted security code written by highly-paid devs.

- Users (customers) are annoyed by having to create dedicated accounts, especially for entertainment or personal interest type websites.

- Managing credentials makes your site a target for hackers (internal and external) and that brings with it liability.

---
### Why OAuth?
<br>

- The bottom-line is that the majority of users prefer to use OAuth instead of creating another set of credentials to use your site.

- When users are your customers, you want to make them as happy as possible!

- OAuth is hot - use it!

---
# What is OAuth?

---
### What is OAuth?
#### Vocab
<br>

- **OAuth provider**: A service company such as _Google_ that makes its OAuth authentication service available to third-party applications.
- **client application**: Our web application!  Remember, this is from an _OAuth provider's_ perspective.
- **owner**: A user of a service such as _Facebook_, _Google_, _Dropbox_, etc.
- **resources**: An _owner's_ information on a service that **may** be exposed to _client applications_. For example, a user of Dropbox may allow access to their files.
- **access token**: An temporary key that provides access to an _owner's_ _resources_.
- **scope**: Determines what _resources_ and rights (read-only, update, etc) a particular _token_ has.

---
### What is OAuth?
<br>

- OAuth is an open standard that provides **client applications** access to **resources** of a service such as Google with the permission of the resources' **owner**.

- There are numerous OAuth Providers including:
	- Facebook
	- Google
	- GitHub
	- Twitter
	- [Many more...](https://en.wikipedia.org/wiki/List_of_OAuth_providers)

---
# How Does OAuth Work?

---
#### OAuth 2's Flow

<img src="http://jlabusch.github.io/oauth2-server/img/diag_rfc_abstract_flow.png" width="900">

---
### How Does OAuth Work?
<br>

- The ultimate goal is for the _client application_ (our server app, not the browser app) to obtain an __access token__ from an OAuth provider that allows the app to access the user's resources from that server's API's.

- **Important:** We will only want access to the most basic of resources the user could grant us - their name and email. This is all our app typically cares about, unless it is designed to work with a user's Facebook friends, tweets, Dropbox data, etc.

---
### How Does OAuth Work?
<br>

- Interestingly, with OAuth, it is not _required_ for an application to persist its users in a database. That's right, no _user_ model!

- However, in most cases web applications want to persist its users in a database because:
	- The web app will want to persist additional information about its users not provided by the OAuth provider, for example, storing a user's preferences when using an app.
	- They want to track the number of users their app has, and perhaps their usage frequency, etc.

---
### How Does OAuth Work?
<br>

- OAuth is **token** based.

- Once a user okays our web app's access, we receive what's called a _code parameter_ that is then exchanged for an **access token**.

---
### How Does OAuth Work?
<br>

- Each token has a **scope** that determines what resources an app can access for that user. Again, in this lesson, we will only be interested in accessing our users' basic profile info.

- If in your Project you would like to access more than a user's profile, you will need to modify the **scope** - check the specific provider's documentation on how to access additional resources.

---
### How Does OAuth Work?
<br>

- <p>Yes, OAuth is complex. But not to worry, we don't have to know all of the nitty gritty details in order to take advantage of it in our apps.</p>

- Plus, we will be using a very popular piece of middleware that will handle most of the OAuth _dance_ for us.

---
### OAuth Review Questions
<br>

- **True or false - if your site allows users to authenticate via OAuth, you should ensure they create a "strong" password.**

- **What are the advantages provided to users by OAuth?**

- **The advantages for web sites & developers?**

- **What is the _client application_ within the context of an OAuth provider?**

---
### Example App using OAuth
<br>

- My first WDI project was a realtime, multi-player "ultimate" Tic-Tac-Toe game.

- The app uses a technology, Firebase, that makes implementing realtime communications and OAuth authentication "easy".

- [TIC-TAC-TOE X 9](https://tic-tac-toe-x-9.firebaseapp.com)

- The app uses GitHub's OAuth service to authenticate those who want to play.

- Check it out...

---
### Example App using OAuth
<br>

- GitHub will present you with a dialog to authorize TTT to access your GitHub account.

- As with all OAuth providers, you can revoke your authorization at any time, so go ahead and click the green "Authorize application" button to log in.

- You are then logged in and can play the game.

- To revoke TTT's authorization, go to settings in your GitHub account, click on "Applications", then click the "Revoke" button next to the TTT app.

---
# Preview the App

---
### The App We Will Build Today
<br>

- Today, we are going to take a starter application and add OAuth authentication & authorization to it.

- The app will allow you, as WDI Students, to list fun facts about yourself and read facts about fellow students, past and present.

- The app will add you as a student to its database when you log in for the first time using Google's OAuth provider.

- Allow me to demo what the finished app will look like.

---
# The App's User Stories

---
### The App's User Stories
<br>

- As a Visitor (these are COMPLETE in the starter code):
	- I want to view fun facts about past and present WDI Students so that I can know more about them.
	- I want to be able to search for students by their name so that I don't have to scroll through a long list.
	- I want to sort the list of students by cohort or name so that I can more easily find the student I'm looking for.

---
### The App's User Stories
<br>

- As a Logged in Student (we will complete these today):
	- I want to add fun facts about myself so that I can amuse others.
	- I want to be able to delete a fact about myself, in case I embarrass myself.
	- I want to be able to designate what cohort I was a part of.
	- I want to view the Google avatar instead of the placeholder icon.

---

### Setup the Starter Code

- Optionally, copy the `starter-code/wdi-students` folder.

- `npm install` to install the app's node modules.

- `subl .` to open the code in Sublime Text.

- Replace `<dbuser>` and `<dbpassword>` in the `.env` file so that `DATABASE_URL` contains the proper credentials (provided by yours truly).

- `nodemon` and browse to `localhost:3000` to test.

---
# Review the Starter Code

---
### Review the Starter Code
<br>

- Let's discuss the app's structure and introduce a couple of tidbits that you may or may not have seen yet.

- First, this is a SPA - there is only one server-side _index.ejs_ view. However, logging in/out, triggers a full page refresh.

- The app was scaffolded using the `express-generator` and the main server script has been renamed to `server.js`.

---
### Review the Starter Code<br><small>CSS Framework</small>
<br>

- The app uses the [_Materialize_ CSS framework](http://materializecss.com/) based upon [Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html).

- Materialize's CSS and JavaScript files are being loaded via a CDN.

---
### Review the Starter Code<br><small>SASS Middleware</small>

- The app has middleware installed and configured to process SASS stylesheets.

- The `node-sass-middleware` module is required, configured and mounted **before** the `static` middleware in _server.js_.

- When a `*.css` file is requested, the middleware will intercept the request and return the CSS file - if it exists. If it does not, it looks for a matching `.scss` or `.sass` file, compiles it to CSS, sends it to the browser, and saves it for next time.

- Its documentation can be found [here](https://github.com/sass/node-sass-middleware).

---
### Review the Starter Code<br><small>The View</small>
<br>

- Since this is a SPA, the page is dynamically updated with client-side templating using _Underscore_.

- Review `index.ejs` and `app.js` for the implementation details of rendering and responding to user interaction such as searching and sorting.

- Note in _server.js_ the _ejs_ view engine has been configured to use `$` as a delimiter to avoid the conflict with _underscore_ using the same tags.

---
### Review the Starter Code<br><small>Config</small>
<br>

- A `.env` file is being used to provide environment settings such as the database's connection string.

- This allows us to configure our app with different settings locally vs. when deployed.

- The variables within `.env` are loaded on line 9 of _server.js_ allowing its values to be used as shown on lines 3 & 7 of `config/database.js`.

---
### Review the Starter Code<br><small>Database</small>
<br>

- The connection to MongoDB with Mongoose is done on line 12 of _server.js_. We will use a hosted MongoDB so that we can see each other's fun facts!

- Notice how we are not assigning whatever the `config/database` module exports to a variable?

- Since we don't intend to use the exported mongoose object anywhere else in _server.js_, we can simply ignore it!

---
### Review the Starter Code<br><small>Models</small>
<br>

- Looking at `models/student` module reveals a single `Student` model.

- Of interest is `factSchema`. This second schema is used to define the structure of the _subdocuments_ **embedded** in the `facts` field of the Student model.

- In Mongoose, schemas define the structure of documents and only models are mapped to collections in the database.

---
### Review the Starter Code<br><small>Models (cont.)</small>
<br>

- The embedding of a Student's _facts_ is highly improbable to cause any Student document to exceed the 16MB size limit and thus is perfect use case for embedded docs.

- Thanks to the `factSchema`, when we push a new fact into the `facts` array, all we do is provide the `text` field, and the `created` field and an `_id` will automatically be created in the subdocument for us!

---
### Review the Starter Code<br><small>Routing</small>
<br>

- We have two separate route files: _index.js_ & _api.js_.

- In _index.js_, there is only the root route used to return our only view.

- _api.js_ contains our routes that will be accessed directly from the client using AJAX.

- Always put routes in separate files if you would like to namespace them using a different base path when mounting them.

---

### Review the Starter Code<br><small>Controllers</small>
<br>

- Examining _routes/api.js_ reveals that we are going to be putting our route handler code in two controllers modules: `controllers/facts` and `controllers/students`.

- Currently, there is only one method, `index`, in _students.js_ that returns all students in the database.

- In _facts.js_ the `create` and `delete` methods have been stubbed up.

---
# Ready for Some OAuth?

---
### Today's Game Plan
<br>

- **Step 1:** Register our App with Google's OAuth Server.
- **Step 2:** Discuss PassportJS.
- **Step 3:** Install & Configure Session middleware.
- **Step 4:** Install PassportJS.
- **Step 5:** Create a Passport config module.
- **Step 6:** Install a Passport Strategy for OAuth.
- **Step 7:** Configure Passport.
- **Step 8:** Define routes for authentication.
- **Step 9:** Add Login/Logout UI.
- **Step 10:** Code the First User Story
- **Step 11:** Authorization

---
### Step 1 - Register our App
<br>

- Every OAuth provider requires that our web app be registered with it.

- When we do so, we obtain a _Client ID_ and a _Client Secret_ that identifies **our application** (not a user) to the OAuth provider.

- For this lesson, we are going to use Google's OAuth server - the details of how to do so are [here](https://developers.google.com/identity/protocols/OAuth2).

- Time to register our app...

---
### Step 1.1 - Google Developers Console
<br>

- You must be logged into [Google Developers Console](https://console.developers.google.com).

- Then select _Create a project..._ from the nav bar's dropdown, or head over [here](https://console.developers.google.com/projectselector/apis/credentials) to create a new _Google Project_.

- Click _Create a project_ and give it a _Project name_ of your liking.

- Click the _create_ button.

---
### Step 1.2 - Enable Google+ API
<br>

- At this point, we should be in the _Overview_ section.

- As mentioned, we only want basic profile access. To obtain this, we only need to **enable** the Google+ API for our app.

- _Google+ API_ is located below _Social APIs_. Click it then enable it by clicking the blue button.

---
### Step 1.3 - Obtain Credentials for App
<br>

- Time to obtain our app's credentials.

- In the side menu, click _Credentials_.

- Click the blue _Create credentials_ dropdown, select _OAuth client ID_.

- Now let's configure the consent screen as requested. The consent screen is what is shown to the user when they click our app's login button.

- Enter a **Product name** and leave all the optional fields blank, then click **Save**.

---
### Step 1.3 - Obtain Credentials for App

- Next, select _Web application_ as the **Application type**.

- Enter a **Name**, _WDI Students_ perhaps?

- We can leave the _Authorized JavaScript origins_ blank since we will be authenticating from our server app.

- _Authorized redirect URIs_ is an additional security mechanism used by some providers, let's enter the value **http://localhost:3000/oauth2callback**.

- You will **have to add** a second URI for your Project 3's deployed app (assuming you use Google OAuth).

---
### Step 1.3 - Obtain Credentials for App
<br>

- After clicking the _Save_ button, we will be presented with our app's credentials!

- Let's put **YOUR** credentials, along with that callback we provided, in our `.env` file so that it looks something like this:

```sh
DATABASE_URL=mongodb://<dbuser>:<dbpassword>@ds053954.mongolab.com:53954/wdi-students
GOOGLE_CLIENT_ID=245025414219-2r7f4bvh3t88s3shh6hhagrki0f6op8t.apps.googleusercontent.com
GOOGLE_SECRET=Yn9T_2BKzxr4zgprzKDGI5j3
GOOGLE_CALLBACK=http://localhost:3000/oauth2callback
```

---
### Step 1 - Register our App
<br>

- With registering our app now completed, just remember that each provider will have its own unique process.

- Any questions about what we just did?

---
### Step 2 - Passport Discussion
<br>

- Implementing OAuth is complex. There are redirects going on everywhere, access tokens that only last for a short time, refresh tokens used to obtain a fresh access token, etc.

- As usual, we will stand on the shoulders of giants that have done much of the hard work for us - enter **PassportJS**.

- Passport is by far the most popular authentication framework out there for Express apps.

---
### Step 2 - Passport Discussion
<br>

- [Passport's website](http://passportjs.org/) states that it provides _Simple, unobtrusive authentication for Node.js_.

- Basically this means that it handles much of the mundane tasks related to authentication for us, but leaves the details up to us, for example, not forcing us to configure our user model a certain way.

---
### Step 2 - Passport Discussion
<br>

- There are numerous types of authentication, if Passport itself was designed to do them all, it would be ginormous!

- Instead, Passport uses **Strategies** designed to handle a given type of authentication. Think of them as plug-ins for Passport.

- Each Express app with Passport can use one or more of these strategies.

- [Passport's site](http://passportjs.org/) currently shows over 300 strategies available.

---
### Step 2 - Passport Discussion
<br>

- OAuth, or more specifically, OAuth2, although a standard, can be implemented slightly differently by OAuth providers such as Facebook and Google.

- As such, there are strategies available for each flavor of OAuth provider.

- For this lesson, we will be using the [passport-google-oauth](https://github.com/jaredhanson/passport-google-oauth) strategy.

---
### Step 2 - Passport Discussion
<br>

- **Passport is just middleware designed to authenticate requests**.

- Passport's middleware will automatically add a `user` object to the `req` object if the request was made by an authenticated user.

- We will then have that `req.user` object available to our route handler code!

---
### Step 3 - Session Middleware
<br>

- Before we install Passport and a strategy, we need to install the [`express-session`](https://github.com/expressjs/session?_ga=1.40272994.1784656250.1446759094) middleware.

- Sessions, as we saw with Rails, are a server-side way of remembering a user's browser session.

- It remembers the browser session by setting a cookie that contains a _session id_. No data is stored in the cookie, just the _id_ of the session.

---
### Step 3 - Session Middleware
<br>

- On the server-side, the application can store data pertaining to the session.

- Passport will use the session, which is an in-memory data-store by default, to store a nugget of information that will allow us to lookup the user in our database.

- FYI, since sessions are maintained in memory by default, if we restart our server, session data will be lost. You will see this happen when nodemon restarts the server and we are no longer logged in :)

---
### Step 3.1 - Installing Session Middleware
<br>

- Let's install the module:

	```sh
	? npm install express-session --save
	```

- Next, require it below the `body-parser`:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

	```js
	var bodyParser = require('body-parser');
	// new code below
	var session = require('express-session');
	```

---
### Step 3.2 - Configure and Mount Session Middleware

- Finally, we can configure and mount our session middleware below the `cookieParser`:

	```js
	app.use(cookieParser());
	// new code below
	app.use(session({
	  secret: 'WDIRocks!',
	  resave: false,
	  saveUninitialized: true
	}));
	```

- The _secret_ is used to digitally sign the session cookie making it very secure. You can change it to anything you want. Don't worry about the other two settings, they are only being set to suppress deprecation warnings.

---
### Step 3.3 - Verifying Session Middleware
<br>

- `nodemon` to make sure your server is running.

- Browse to our app at `localhost:3000`.

- Open the _Resources_ tab in _DevTools_, then expand _Cookies_ in the menu on the left.

- A cookie named `connect.sid` confirms that the session middleware is doing its job.

---

####Congrats, the session middleware is now in place!

#### Time for a few questions :)

---
### Review Questions
<br>

- **Before a web app can use an OAuth provider, it must first ___________ with it to obtain a ___________ and a client secret.**

- **Passport uses ___________ designed to handle specific types of authentication.**

- **In your own words, explain what a _session_ is.**

- **If there is an authenticated user, the request (`req`) object will have what attached to it by Passport?**

---
### Step 4 - Install Passport
<br>

- The Passport middleware is easy to install, but challenging to set up correctly.

- First the easy part:

	```sh
	? npm install passport --save
	```

- Require it as usual below `express-session`:

	```js
	var session = require('express-session');
	// new code below
	var passport = require('passport');
	```

---
### Step 4.1 - Mount Passport
<br>

- With Passport required, we need to mount it. Be sure to mount it **after** the session middleware and always **before** any of your routes are mounted that would need access to the current user:

	```js
	// app.use(session({... code above
	app.use(passport.initialize());
	app.use(passport.session());
	```
	
- The `passport.initialize()` is always required, however, `passport.session()` can be removed if you don't need persisted login sessions (like for a pure backend api where credentials are sent with each request).

---
### Step 5 - Create a Passport Config Module
<br>

- Because it takes a significant amount of code to configure Passport, we will create a separate module so that we don't further pollute _server.js_.

- Let's create the file:

	```sh
	? touch config/passport.js
	```
- In case you're wondering, although the module is named the same as the `passport` module we've already required, it won't cause a problem because a module's full path uniquely identifies it to Node.

---
### Step 5.1 - Passport Module's Exports Code 

- Our `config/passport` module is not middleware.

- Its code will basically configure Passport and be done with it. Nor does it need to export any functionality, thus, we don't even need to store the empty object returned by _module.exports_.

- Requiring below our database is as good of a place as any in _server.js_:

	```js
	require('./config/database');
	// new code below
	require('./config/passport');
	```

---
### Step 5.2 - Require Passport 
<br>

- In our `config/passport.js` module we will certainly need access to the `passport` module:

	```js
	var passport = require('passport');
	```

- It's important to realize that this `require` returns the very same `passport` object that was required in _server.js_.<br>**Why is this?**

---
### Step 6 - Install the OAuth Strategy
<br>

- Time to install the strategy that will implement Google's flavor of OAuth:

	```sh
	? npm install passport-google-oauth20 --save 
	```

- This module implements Google's OAuth 2.0 API. [It's docs can be found here.](https://github.com/jaredhanson/passport-google-oauth2)

- Note that _OAuth 1.0_ does still exist here and there, but it's pretty much obsolete.

---
### Step 6.1 - Require the OAuth Strategy
<br>

- Now let's require the `passport-google-oauth20` module below that of `passport` in our _passport.js_ module:

	```js
	var passport = require('passport');
	// new code below
	var GoogleStrategy = require('passport-google-oauth20').Strategy;
	```

- Note that the variable is named using upper-camel-case.<br>**What does that typically hint at?**

- Let's make sure there's no errors before moving on to the fun stuff!

--- 
### Step 7 - Configuring Passport

<p style="text-align:left">To configure Passport we will:</p>

1. Call the `passport.use` method to plug-in an instance of the OAuth strategy and provide a _verify_ callback function that will be called whenever a user has logged in using OAuth.

2. Define a _serializeUser_  method that Passport will call when it wants to know what data we want to store in the session to identify our user.

3. Define a _deserializeUser_ method that Passport will call when we need to fetch our user from the database. Passport will then assign the user to the `req.user` object. 

--- 
### Step 7.1 - <span style="text-transform:lowercase">passport.use</span>

- <p>Now it's time to call the `passport.use` method to plug-in an instance of the OAuth strategy and provide a _verify_ callback function that will be called whenever a user logs in with OAuth. In _passport.js_:</p>

```js
var GoogleStrategy = require('passport-google-oauth20').Strategy;
// new code below
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth...
  }
));
```

---
### Step 7.1 - <span style="text-transform:lowercase">passport.use</span>
<br>

- Note the settings from the `.env` file being passed to the `GoogleStrategy` constructor function.<br>**What is the name of the module we've been using that loads the settings from the `.env` file?**

- Next we have to code the _verify_ callback function...

--- 
### Step 7.2 - The <em>Verfiy</em> Callback
<br>

- The callback will be called by Passport when a user has logged in with OAuth.

- It's called a _verify_ callback because with most other strategies we would have to verify the credentials, but with OAuth, well, there are no credentials!

- In this callback we must:
	- Fetch the user from the database and provide them back to Passport by calling the `cb` callback method, or...
	- If the user does not exist, we have a new user! We will add them to the database and pass along this new user in the `cb` callback method.

---
### Step 7.2 - The <em>Verfiy</em> Callback
<br>

- But wait, how can we tell what user to lookup?

- Looking at the callback's signature:

	```js
	function(accessToken, refreshToken, profile, cb) {
	```
	
- We can see that we are being provided the user's _profile_ - this is the key. It will contain the user's _Google Id_.
	
- However, in order to find a user in our database by their _Google Id_, we're going to need to add a field to our `Student` model's schema to hold it...

---
### Step 7.3 - Modify the <em>Student</em> Model
<br>

- Let's add a field to our `studentSchema` inside `models/student.js` file:

	```js
	var studentSchema = new mongoose.Schema({
	  name: String,
	  email: String,
	  cohort: Number,
	  facts: [factSchema],
	  googleId: String,
	  created: { type: Date, default: Date.now }
	});
	```

- Cool, now when we get a new user via OAuth, we can use the Google `profile` object's info to create our new user!

---
### Step 7.4 - Callback Code
<br>

- Now we need to code our callback!

- We're going to need access to our `Student` model:

	```js
	var GoogleStrategy = require('passport-google-oauth20').Strategy;
	// new code below
	var Student = require('../models/student');
	```

- Let's do another error check by ensuring our server is running and we can refresh our app.

- Cool, the next slide contains the entire `passport.use` method.<br>Copy/paste it, then we'll review it...

---

```js
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Student.findOne({ 'googleId': profile.id }, function(err, student) {
      if (err) return cb(err);
      if (student) {
        return cb(null, student);
      } else {
        // we have a new student via OAuth!
        var newStudent = new Student({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newStudent.save(function(err) {
          if (err) return cb(err);
          return cb(null, newStudent);
        });
      }
    });
  }
));
```

---
### Step 7.5 - <span style="text-transform:lowercase">de/serialize</span>U<span style="text-transform:lowercase">ser</span> Methods
<br>

- Our `passport.use` method has been coded. Now we need to write two more methods inside of `config/passport` module.

- First the callback method we just created is called when a user logs in, then the `passport.serializeUser` method is called in order to set up the session.

- The `passport.deserializeUser` method is called everytime a request comes in from an existing logged in user - it is this method where we return what we want passport to assign to the `req.user` object.

---
### Step 7.5 - <span style="text-transform:lowercase">serialize</span>U<span style="text-transform:lowercase">ser</span> Method
<br>

- First up is the `passport.serializeUser` method that's used to give Passport the nugget of data to put into the _session_ for this authenticated user. Put this below the `passport.use` method:

	```js
	passport.serializeUser(function(student, done) {
	    done(null, student.id);
	});
	```

- Passport gives us a full user object when the user logs in, and we give it back the tidbit to stick in the session.

- Again, this is done for server scalability and performance reasons - a lot of session data sucks.

---
### Step 7.6 - <span style="text-transform:lowercase">deserialize</span>U<span style="text-transform:lowercase">ser</span> Method

- The `passport.deserializeUser` method is used to provide Passport with the user from the db we want assigned to the `req.user` object. Put it below the `passport.serializeUser` method:

	```js
	passport.deserializeUser(function(id, done) {
	  Student.findById(id, function(err, student) {
	    done(err, student);
	  });
	});
	```
	
- Passport gave us the `id` from the session and we use it to fetch the student to assign to `req.user`.

- Let's do another error check.

---
### Step 8 - Define Routes for Authentication
<br>

- Our app will provide a link for the user to click to login with Google OAuth. This will require a route on our server to handle this request.

- Also, we will need to define that route,<br>`/oauth2callback`<br> we told Google to call on our server after the user confirms or denies their OAuth login.

- Lastly, we will need a route for the user to logout.

---
### Step 8.1 - <span style="text-transform:lowercase">routes/index</span> Module
<br>

- We're going to code these three new auth related routes in our `routes/index` module.

- These new routes will need to access the `passport` module, so let's require it in _routes/index.js_:

	```js
	var router = require('express').Router();
	// new code below
	var passport = require('passport');
	```

---
### Step 8.2 - Login Route

- In `routes/index.js`, let's add our login route below our root route:

	```js
	// Google OAuth login route
	router.get('/auth/google', passport.authenticate(
	  'google',
	  { scope: ['profile', 'email'] }
	));
	``` 

- The `passport.authenticate` function will take care of coordinating with Google's OAuth server.

- The user will be presented the consent screen if they have not previously consented.

- Then Google will call our Google callback route...

---
### Step 8.2 - Login Route
<br>

- Note that we are specifying that we want passport to use the `google` strategy. Remember, we could have more than one strategy in use.

- We are also specifying the _scope_ that we want access to, in this case, `['profile', 'email']`.

---
### Step 8.3 - Google Callback Route
<br>

- Below our login route we just added, let's add the callback route that Google will call after the user confirms:

	```js
	// Google OAuth callback route
	router.get('/oauth2callback', passport.authenticate(
	  'google',
	  {
	    successRedirect : '/',
	    failureRedirect : '/'
	  }
	));
	```

- Note that we can specify the redirects for a successful and unsuccessful login. For this app, we will redirect to the root route in both cases.

---
### Step 8.4 - Logout Route
<br>

- The last route to add is the route that will logout our user:

	```js
	// OAuth logout route
	router.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});
	```
	
- Note that the `logout()` method was automatically added to the request (`req`) object by Passport!

- Good time to do another error check.

---
### Step 9 - Add Login/Logout UI
<br>

- Before we can dynamically modify our _index.ejs_ view depending upon whether there's an authenticated user or not, we need to modify our root route to pass `req.user` to it:

	```js
	router.get('/', function(req, res) {
		res.render('index', { user: req.user });
	});
	```

- Now the logged in student is in a `user` variable that's available inside of `index.ejs`. If nobody is logged in, `user` will be undefined (falsey).

---

### Step 9.1 - Add the Login / Logout UI Logic

- We're going to need a link to for the user to click to login/out.<br>Let's modify our `index.ejs`:

	```html
	<a href="" class="brand-logo left">WDI Student Fun Facts</a>
	<!-- new html below -->
	<ul class="right">
	  <$ if (user) { $>
	  <li><a href="/logout"><i class="material-icons left">trending_flat</i>Logout</a></li>
	  <$ } else { $>
	  <li><a href="/auth/google"><i class="material-icons left">vpn_key</i>Login with Google</a></li>
	  <$ } $>
	</ul>
	```

- Note the use of `<$ $>` for ejs tags.<br>This was necessary due to the conflict with Underscore's<br>client-side templating and was set in _server.js_.

---

### Step 9 - Try Logging In!
<br>

- We've finally got to the point where you can test out our app's authentication!

- May the force be with us!

---

### Step 10 - Code the First User Story
<br>

- Our first user story reads:<br>_I want to add fun facts about myself so that I can amuse others._

- We will want to add an `<input>` for the fact's text and a button element to the logged in student's card only.

---

### Step 10.1 - Add Dynamic UI
<br>

- Add dynamic UI to add a fact. Ensure it's added in the correct location! It's around line 73 of _index.ejs_:

	```html
		<li class="collection-item ... ">
    <% }) %>
    <!-- new html below -->
    <% if (student._id === '<$= user && user.id $>') { %>
      <div class="card-action">
        <input type="text" id="fact" class="white-text">
        <input type="button" class="btn white-text"
        	onclick="addFact()" value="Add Fact">
      </div>
    <% } %>
	```

---

### Step 10.2 - AJAX, etc.
<br>

- Sprinkle in a little jQuery AJAX inside _app.js_ to post our new fact, update our in-memory array, and re-render the view:

	```js
	function addFact() {
	  $.post(
	    '/api/facts',
	    { fact: $('#fact').val() }).done(function(data) {
	      $('#fact').val('');
	      var updated = allStudents.find(function(student) {
	        return student._id === data._id;
	      });
	      updated.facts.push(data.facts.pop());
	      render();
	    }
	  );
	}
	```

---

### Step 10.3 - Controller Code
<br>

- Lastly, the controller code for the route (already defined). In `controllers/facts.js`:

	```js
	function create(req, res) {
  	  Student.findById(req.user.id, function(err, student) {
   	    student.facts.push({ text: req.body.fact });
   	    student.save(function(err) {
   	      res.json(student);
   	    });
   	  });
	}
	```

---

### Step 10 - Code the First User Story
<br>

- That should take care of our first user story - try it out!

- Cool, just one step left!

---

### Step 11 - Authorization
<br>

- **What is _authorization_?**

- Passport adds a nice method to the request object, `req.isAuthenticated()` that returns _true_ or _false_ depending upon whether there's a logged in user or not.

- We can easily write our own little middleware function to take advantage of `req.isAuthenticated()`.

---

### Step 11.1 - Authorization Middleware
<br>

- As we know by now, Express's middleware and routing is extremely flexible and powerful.

- We can actually **insert** additional middleware functions before a route's final middleware function!  Let's modify `routes/api.js` to see this in action:

	```js
	  // POST /api/facts
  	router.post('/facts', isLoggedIn, factsCtrl.create);
	```

- Take note of the inserted `isLoggedIn` middleware function!

---

### Step 11.2 - Authorization Middleware
<br>

- Our custom `isLoggedIn` middleware function, like all middleware, will either call `next()`, or respond to the request.

- Let's put our new middleware at the very bottom of<br>`routes/api.js` - just above the _module.exports_:

	```js
	// Insert this middleware for routes that require a logged in user
	function isLoggedIn(req, res, next) {
	  if ( req.isAuthenticated() ) return next();
	  res.redirect('/auth/google');
	}
	```

- That's all there is to it!

---

## Congrats!

### You have implemented OAuth authentication and authorization!

---

## Practice Exercises
<br>

- For a challenging practice, complete the remaining three _user stories_:
	- I want to be able to delete a fact about myself, in case I make a mistake.
	- I want to be able to designate what cohort I was a part of.
	- I want to show the user's Google avatar instead of the current icon.

- Start a new application from scratch that implements authentication and authorization as shown in this lesson. Remember, this is a requirement of Project 3!

---

## References
<br>

- [Google OAuth2](https://developers.google.com/identity/protocols/OAuth2)

- [Mongoose](http://mongoosejs.com/)

- [Materialize CSS](http://materializecss.com/)
0

