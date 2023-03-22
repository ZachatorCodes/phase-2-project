# Bunk Sales

Bunk Sales is a web search application that can be used to find the best price for any given PC game, given that there are active deals happening.

Additionally, the application can also be used to find all deals for a given online marketplace, as well as to save a user's favorites games to a "favorites" database.

## Installation

In order to install the application, please ```fork``` and ```clone``` this repository to your local device.

In order to start the application, please make sure you are in the project directory, then run ```npm start```.

If an error is encountered running ```npm start```, please run ```npm install``` to install the required dependencies, then try running ```npm start``` once more.

To make sure that the Favorites page of the application works, you must fork and clone the [database repository](https://github.com/ZachatorCodes/phase-2-project-server), and then start a json-server with the ```db.json``` file. Further instructions for installing the database can be found in the README file in the [database repository](https://github.com/ZachatorCodes/phase-2-project-server).

## Usage



## API

This application was created using the [CheapShark Deals API](https://apidocs.cheapshark.com/). As requested by the API creator, all redirects to specific deals are done so through CheapShark's specific redirect URL. Many thanks to CheapShark for creating such a helpful API!