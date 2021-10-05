# Fancy GitHub Repos

An excercise for building a simple web app around data fetched from the GitHub API. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

After cloning this repository:

- Run `npm ci` to install dependencies from the lock file
- Run `npm start` to start up the app

## User stories

- As a user, I want to fetch all Github repositories above 25k stars and display the repo name and star count (stargazers_count) as a list on the screen, so I can check them out

## Github API

Here's an example of the endpoint we will be submitting requests to:

`https://api.github.com/search/repositories?q=stars:>25000&sort=stars&order=desc`
