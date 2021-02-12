![alt text](https://github.com/cmcmanus8/itunes-react-app/blob/main/src/images/screenshot.png?raw=true)

# iTunes React App

This is a SPA making use of the public iTunes API built in React with Hooks.

## Objectives

### The main functionalities are:

- Initial view\
Search bar where you can enter the terms (whether artists, songs, albums, genres ...). 
- Results view\
Search results listed on the same page, showing the song title and artist, and more in detail, the album title, release date, cover thumbnail, song length, genre and price. Offers ability to sort the list over these last three fields.
- Player view\
Clicking on a result brings a player modal which enables you to see the cover detail, basic information about the song and the basic controls to listen the song, play and pause, and skip to the previous and next song in the list of search results. (NOTE: the skip function deoes not work fully as intended, future work to debug and fix this). This modal also has share buttons to several social networks.

### Further work to be done:
- Testing! Write unit, integration and e2e tests to check components, functionality for user flow.
e.g Mocha and Chai for unit or e2e testing across browsers and platforms.
- Deploy app
- Add informative errors to be displayed in front end

## Running the app locally

### via Docker
- Ensure Dockerfile is included from repoo.
- Open terminal in project directory.
- Run `docker build -t itunes-app-image .` to build the docker image.
- Run `docker images | grep itunes-app-image` to confirm image is up.
- Run `docker run -it -p 3000:3000 itunes-app-image` to run application in docker container on port 3000.
- Message should display to confirm that you can now view the app in the browser.
- Navigate to the Local link in your browser.

### via yarn
- Run `git clone https://github.com/cmcmanus8/itunes-react-app.git`
- Run `yarn` to download relevant packages.
- Open terminal and navigate to project directory, run `yarn start` to run app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
