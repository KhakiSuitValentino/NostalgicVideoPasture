<h1><em>NOSTALGIC VIDEO PASTURE</em></h1>

<h2>Description:</h2>
The Nostalgic Video Pasture is a website that hosts a collection of user-submitted "nostalgic videos" sourced from The Internet Archive. Users will have the opportunity to find, observe, and share movies, television, and other video from bygone eras.

<h2>Choice of API:</h2>
This app will use the archive.org metadata API to source its videos.

<h2>Tech Stack:</h2>
HTML, CSS, JS, EJS, PostgresQL, AJAX

<h2>Proof Of Concept:</h2>
This project will make use of two APIs from archive.org. The first API makes a request to the Internet Archive to search for videos. The return result displays a list of videos in HTML format. Each return result contains an identifier string in the href link to the video.
</br>
<img src="/diagrams/Search1.png" alt="API 1 HTML Results" title="API 1 HTML Results">

</br>
We can use the identifier from the href link to make the second API request. This will return JSON data, which can be used to show information unique to the video.

<img src="/diagrams/Search2.png" alt="API 2 JSON Results" title="API 2 JSON Results">


<h2>Wireframe:</h2>

Home Page:
<img src="/diagrams/homepage_wireframe.png" alt="Wireframe: Homepage" title="Wireframe: Homepage">

Create An Account:
<img src="/diagrams/signup_wireframe.png" alt="Wireframe: Create An Account" title="Wireframe: Create An Account">

Log In:
<img src="/diagrams/log_in_wireframe.png" alt="Wireframe: User Log In" title="Wireframe: User Log In">

Home Page (User Logged In):
<img src="/diagrams/homepage_userloggedin_wireframe.png" alt="Wireframe: Homepage with User Logged In" title="Wireframe: Homepage with user logged in">

Search archive.org:
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
</br>-view what previous users have posted to the website, and view which usernames posted which videos.
</br>-search the Internet Archive database to find content to share.
</br>-select an individual video to post to the website, as well as type a description to accompany the video.
</br>-comment on posts from other users, and view which users made which other comments.
</br>-delete my own comments or posts if necessary.

<h2>MVP Goals:</h2>
</br>-Create a system for users to make accounts
</br>-Render search results of videos from The Internet Archive
</br>-Give users the ability to select a video from a search result to post to the main page
</br>-Give users the ability to comment on posts made to the main page
</br>-Give users the ability to delete posts and comments they have made

<h2>Stretch Goals:</h2>
</br>-Create a moderator system: certain users are granted ability to delete any post or comment
</br>-Create a like/dislike or other rating system as a way for users to interact with posts
</br>-Create a post organization system across the website, to sort video posts by decade