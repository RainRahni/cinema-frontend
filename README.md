# How to run:
Prerequisites

Node.js

1) Clone the repository
2) Navigate to the project directory:
  cd cinema-front-end
3) Install the dependencies:
   npm install
To start the application:
1) In terminal run: npm run dev
   
# Implementation 

I implemented a system with seats where user can only select 1 seat at a time.
When opening the application the main page is also the page where movies are.
There are 2 movies created by me. - using a function that checks whether there are any movies in the database,
if not then sends 2 of them to database and then fetches them both.

When clicking on either of the movies you are redirected to movie page where you can
see all the information about the movie and select your seats. In the backend each movie
has 88 seats and in the front-end it is converted to 2d list where there are 7 different
lists, first of them with size 10 and others with size 13.
Seats displayed is just an image.
When entering your name, email, row number and seat number, then before sending it to
backend row number and seat number are converted to seat number that it would be in
1d list. 
Then the data is sent to the backend.

# What is missing.
I have implemented everything except filtering and recommendation due to lack of time.
How i would have implemented filtering:
There are boxes and when selected it would apply the filter -> 
  if box selected or unselected then new query to backend would be made to request movies with given filter.

How i would have implemented recommendation:
From the backend where recommendation algorithm would have been is sent which seat is recommended. 
  On the front-end it would have been converted to row and seat number which would have been displayed
    as text to user.

# Challenges and time spent.
Most challenging was displaying movie information in a specific page where there are seats etc. Also
carrying specific movie's information over from main page to movie page.

On the front-end i spent almost 7 hours.
