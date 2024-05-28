# Leaderboard

## Overview

This project involves creating a leaderboard app that enables users to view and interact with a list of users based on their banana count. The app provides various sorting options and search functionality to enhance the user experience.

## Key Features

- Sorting Options
  - Highest: Sorts users by the highest number of bananas.
  - Lowest: Sorts users by the lowest number of bananas.
  - A-Z: Sorts users alphabetically by name.
  - Z-A: Sorts users in reverse alphabetical order by name.

- Search Functionality
  - Users can search for specific or partial names in the leaderboard.
  - Searched names are highlighted in the leaderboard.
  - If the searched user is in the Top 10, the list displays their respective rank.
  - If the searched user is not in the Top 10, the last position is replaced with the searched user and their actual rank is shown.
  - Displays an error message if the searched username does not exist.

- Top 10 Display
  - The leaderboard always displays the top 10 users based on the selected sorting option.


## Technology Stack

- React Native
- TypeScript
- State Management (React Redux)
- Unit Test (Jest)

## Screenshots

Light Mode
<table>
  <tr>
    <td><img src="src/assets/screenshots/Home(Light).PNG" ></td>
    <td><img src="src/assets/screenshots/Search(Light).PNG" ></td>
  </tr>
 </table>

Dark Mode
 <table>
  <tr>
    <td><img src="src/assets/screenshots/Home(Dark).PNG" ></td>
    <td><img src="src/assets/screenshots/Search(Dark).PNG" ></td>
  </tr>
 </table>

## Unit Test

Script: `npm run test`