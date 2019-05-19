# CSE104 Website
by Noah Sarfati and William Koch. May 19, 2019

View project on [Github](https://github.com/NoahSfi/privacy.io).

## Facebook account
Please use this account when clicking on "sign in with Facebook" (details in project description):

email:      privacy.cs104@gmail.com

password:   bonjour123

## Goals and Project Outline
Our initial project was to create a game similar to Hill Climb Racing. After several weeks of reading libraries that would allow us to use some physics, we decided that we might not have sufficient time to successfully complete this ambitious project. We therefore changed our plan to something more achievable for the given timeframe.

We finally decided on creating a website for the Privacy Committee (to be renamed as X-Privacy) of Polytechnique. Focusing on the HTML/CSS and Javascript part of the website, we did not focus on filling the entire website with actual content but used lorem ipsum for certain parts.

## Website Overview
The website has 5 pages:
- Home
- Our Goals
- Importance of Privacy
- Online Data Collection
- Alternatives

The general structure of the individual pages is fairly similar, except for the home page where we added some additional Javascript for the home page (blur and parallax scroll effect). 

The website is mobile friendly in large parts, even logging in to Facebook and displaying the personal information works fine. Displaying your current location does not work on iPhone though.

We have hosted our website on [Github](https://noahsfi.github.io/privacy.io) since we needed a server to create a Facebook app, allowing you to login with your Facebook account.

## Facebook Login
The idea of adding the possibility of logging in with Facebook was to show the user what type of information they are giving to websites where they sign in with their Facebook accout. The goal is to show that it is generally better to create a new account for each website to minimize the information the website can get from you (which could give you cheaper prices for example).
Feel free to use the account given above to actually log in to Facebook and verify the information the website is collecting. We are getting everything from Facebook, even the random music links are personalized to this account.
We recommend you to use the login we provided because the Facebook app is private (i.e. it can currently only be used by the developer of the app). If you try logging in with your account instead of the one provided, you might get an error message. 

## Libraries and resources used
The code used to connect to Facebook was found in the Facebook developer documentation, just like the Google Maps API. We had to adapt both to fit our website perfectly.

We used Bootstrap CSS to skip some basic redundant styling. This was used for the full-width containers, as well as for creating a table faster.

We had to search through Stackoverflow and the W3Schools website for topics we had no knowledge on. 
