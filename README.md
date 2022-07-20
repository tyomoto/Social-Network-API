# 18 NoSQL: Social Network Api
## Module 18 Challenge

## Description
The goal of this challenge was to build a social network api that allows for users to share their thoughts, react to friends' thoughts and create a friends list. This was all to be done using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
* WHEN I enter the command to invoke the application
    - THEN my server is started and the Mongoose models are synced to the MongoDB database
* WHEN I open API GET routes in Insomnia for users and thoughts
    - THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
    - THEN I am able to successfully create, update, and delete users and thoughts in my database
* WHEN I test API POST and DELETE routes in Insomnia
    - THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation
First install all dependencies:
```
npm install
```
Start the program:
```
npm start
```

## Video Walkthrough
This link will take you to the video walkthrough and demonstration on all the functioning routes.
[Social Network API Walkthrough](https://drive.google.com/file/d/1ahO8kIyFhdPhncmRxNy0ReqAhRUbPrgx/view)

## Website
This [link](https://github.com/tyomoto/special-fortnight) will take you to the code repository on github.