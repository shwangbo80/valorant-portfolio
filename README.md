#VALORANT portfolio app

To start, run "yarn start" in the root folder.

This is a portfoiio project for Nucamp React course.

Valorant is a trendy game made by Riot games. It has a very large player base, and lots of content is available for me to use, and this was perfect, because I wanted to make a stylish website with rich content, 

Designing the website was not difficult, because of my design background. What made this tough was that this was first React app I built on my own, after 5 weeks of class at Nucamp. The task was daunting, but as I set up the all the components one by one, and connected them with routes, the repetitive muscle memory kicked in and it was not so bad in the end. Still there were some bugs that I had to do research on and fix.

1. Beta version of the website used public Api from https://valorant-api.com/. The Api had loads of content, and it did not require an api key, so it was very easy to use. But after 1 day of use "and hundreds of calls for testing..." the server blocked me with CORS policy, and I was not able to fetch images. This lead me to fetching all the images manually to my local folder, and linking the images to there. Thankfully, the text data form JSON still worked, so that made it a little less tedious.

2. On the agent select screen, after the agent is selected, when I tried to go back a page or refresh, the agent compent did not render, resulting in just the navbar and footer showing. The problem was that this was a router inside a router, and it had to use HashRouter instead of BrowserRouter, both imported from React Router.

3. when trying to deploy to netlify, it gave me an red error when trying to build from github repo. This was fixed by changing build command from "yarn build" to "CI= npm run build" in settings.

4. When delopyed to netlify, there was an 404 error everytime I refreshed a page. Thanks to Stack OVerflow community, I found out that this is easily fixed by making a netlify.toml file in my root folder with below code pasted inside.

//
[[redirects]]
  from = "/*"
  to = "/"
  status = 200
//
