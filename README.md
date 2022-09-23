<h1><em>NOSTALGIC VIDEO PASTURE</em></h1>

<h2>Deployment Link:</h2>
https://www.videotape-pasture.fly.dev

<h2>Installation Instructions:</h2>
1) Fork and clone this repository.

2) Run <pre><code>npm i express express-ejs-layouts cookie-parser axios crypto-js sequelize pg</code></pre>

3) Ready to go!


<h2>Description:</h2>
The Nostalgic Video Pasture is a website that hosts a collection of user-submitted "nostalgic videos" sourced from Youtube. Users will have the opportunity to find, observe, and share movies, television, and other video from bygone eras.

<h2>Choice of API:</h2>
This app will use the Youtube API to source its videos.

<h2>Tech Stack:</h2>
HTML, CSS, JS, EJS, PostgresQL, Express

<h2>Proof Of Concept:</h2>
Youtube's API makes hosting videos and sourcing data about videos a very simple task. Here is a screenshot of JSON data from a GET request:
</br>
<img src="/diagrams/Search1.png" alt="API Results" title="API Results">


<h2>Wireframe:</h2>

Home Page:
<img src="/diagrams/homepage_wireframe.png" alt="Wireframe: Homepage" title="Wireframe: Homepage">

Create An Account:
<img src="/diagrams/signup_wireframe.png" alt="Wireframe: Create An Account" title="Wireframe: Create An Account">

Log In:
<img src="/diagrams/log_in_wireframe.png" alt="Wireframe: User Log In" title="Wireframe: User Log In">

Home Page (User Logged In):
<img src="/diagrams/homepage_userloggedin_wireframe.png" alt="Wireframe: Homepage with User Logged In" title="Wireframe: Homepage with user logged in">

Search Youtube:
<img src="/diagrams/search_page_wireframe.png" alt="Wireframe: Search archive.org database" title="Wireframe: Search archive.org database">

Display Search Results:
<img src="/diagrams/search_results_wireframe.png" alt="Wireframe: Display Search Results" title="Wireframe: Display search results">

Make a Post:
<img src="/diagrams/make_a_post_wireframe.png" alt="Wireframe: Create A Post" title="Wireframe: Create A Post">


<h2>Entity Relationship Diagram:</h2>
<img src="/diagrams/ERD.png" alt="Entity Relationship Diagram" title="Entity Relationship Diagram">

<h2> RESTful Routing Chart:</h2>
<img src="/diagrams/REST_routing.png" alt="RESTful Routing Chart" title="RESTful Routing Chart">

<h2>User Stories</h2>
<em>As a user, I want to...</em>
</br>-create an account with a unique username that I can log into whenever I use the website.
</br>-view what I and previous users have posted to the website.
</br>-search the Youtube database to find content to share.
</br>-select an individual video to post to the website, as well as type a description to accompany the video.

<h2>MVP Goals:</h2>
</br>-Create a system for users to make accounts
</br>-Render search results of videos from Youtube
</br>-Give users the ability to select a video from a search result to post to the main page
</br>-Give users the ability to type their own description of the video
</br>-Give users the ability to delete posts and edit descriptions they made

<h2>Stretch Goals:</h2>
</br>-Publicly post username of uploader who sends a video to the Pasture
</br>-Create a personal favorites system so that individual users may seperate their favorites from their community posts
</br>-Create a comment system for community posted videos, so other users may share thoughts on posts
</br>-Create a moderator system: certain users are granted ability to delete any post or comment
</br>-Create a like/dislike or other rating system as a way for users to interact with posts
</br>-Create a category system to organise videos throughout the website