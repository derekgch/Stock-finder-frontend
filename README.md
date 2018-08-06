# Stock Finder
The Stock Finder is a full stack single page web app that allows users to find stocks trading data based on name and/or symbols. A user can logged in, and he or she is able to save the stocks as favorite stocks. User can also Text scrolls across the screen as the user makes progress; if the user speeds up, the scrolling will speed up, but if the user slows down, the scrolling will also slow down. If the user types a letter correctly, the corresponding letter in the scrolling passage turns green, but if the user types the letter incorrectly, the corresponding letter in the scrolling passage will turn red. The game lasts 30 seconds, and once it is over, the user is given their accuracy, speed (in words per minute), and score. If the user’s score is in the top 10 of all users’ scores, their name and score will appear on the leaderboard.


## Getting Started
To install the Stock Finder, first fork and clone the frontend and backend repo.  
# Frontend: 
run 'npm install', then 'npm start', which will lauch the react frontend server.
# Backend
run `bundle install`, followed by `rails db:create && rails db:migrate`. Then, run `rails s -p 4000`, which will launch the API on a local server.

## Built With
React - Javascript
Ruby on Rails  
PostgreSQL  
Materialized UI
CSS

## Authors
Derek Chen  
Mendy Wolosow


## Acknowledgements
We would like to thank Jonathan Mines and Jason Decker for their help and support.
