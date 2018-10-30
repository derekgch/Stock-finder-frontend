# Stock Finder
The Stock Finder is a full stack single page web app that allows users to find stocks trading data based on name and/or symbols. A user can logged in, and he or she is able to save the stocks as favorites. Favorite stocks will be displayed at the bottom of the page with a simplified chart.  User is able to click on one of the favorite and it will display on the main stock chart to show the detailed stock infomations.

# Motivation
Searching stocks should be easy and simple, and this is what this app about.

## Getting Started
To install the Stock Finder, first fork and clone the frontend and backend repo.  
### Frontend: 
run `npm install`, then `npm start`, which will lauch the react frontend server.
### Backend
run `bundle install`, followed by `rails db:create && rails db:migrate`. Then `rails c` and StockSymbol.get_symbols, finally run `rails s -p 4000`, which will launch the API on a local server.

## Screenshot
![screen shot 2018-09-29 at 9 31 56 pm](https://user-images.githubusercontent.com/25042871/46251979-5007de00-c42f-11e8-88cb-40255b4a1ec6.png)


## Video Demo
https://www.youtube.com/watch?v=hIrq1UIZmIo

## Heroku Demo 
Please allow 30 seconds for the server to boot up
https://frontend-stockfinder.herokuapp.com

## Built With
React - Javascript  
Ruby on Rails  
PostgreSQL  
JWT Authorization
Materialized UI
CSS

## Authors
Derek Chen  
Mendy Wolosow


## Acknowledgements
We would like to thank Mike Cheng and Garry Clerge for their help and support.
