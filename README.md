# Important!

This application will work best by cloning the repo and running it locally using 'yarn start'. The FEMA API calls that are used to generate the data displayed on the "Local" and "Global" pages times out when using Heroku.

# Overview

Spark is an app that strives to be the medium for anyone eager to be socially conscious by enabling users to be informed on natural disasters around the globe in real time. Furthermore, Spark pairs users with the best corresponding charity or NGO to donate to in order to alleviate the crises’ both domestic and abroad. The driving ideology behind this app is “think globally, act locally.” 

![Home Page](./resources/images/Home_page.png "Home Page")

Upon signing up for the app by providing an email, a unique password, and allowing geolocation, users will be met with three tabs to choose from: Local, National, and Global. 

## Navigating the Pages
![Local](./resources/images/Local.png "Local")

![National](./resources/images/National.png "National")

![Global](./resources/images/Global.png "Global")

For the local tab, national, and international tabs will focus on what pressing relief funds need your help by prompting the user with a brief summary of a natural disaster (ex. Tsunami in indonesia for the international tab or the california wildfires for the national tab) and the corresponding charity or NGO that is best suited to address the relief efforts. 

## Functionality 

Each card item is listed with two buttons: Donate & Get Charity Details. 
The donate button works by taking the user to the Charity Navigator page to enable the transaction, whereas Charity Details prompts a Modal with the following: 

![Charity Details](./resources/images/Charity.png "Charity Details")

Users are then enabled to Save that charity information in case they want to learn more about it, bookmark it to continue donating, or just to be able to keep an eye on it. 

## Technologies
      React.js
      MySql
      Sequelize
      Firebase Authentication
      Bootstrap
      Material UI

## APIs
      Charity Navigator
      World Relief
      FEMA
      Google Maps

@Drewbott | @delphine18