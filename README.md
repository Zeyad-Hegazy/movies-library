# Movie Library Application

This project is a Movie library Application built with React, utilizing TMDB API for movie data. Users can search for movies, view search results, and manage a watchlist. The application is styled with CSS modules and includes navigation features for easy browsing.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Search Movies**: Users can search for movies using a search bar, and results are fetched from the TMDB API.
- **Watchlist**: Users can add movies to a personalized watchlist for easy access.
- **Navigation**: Includes navigation options such as returning to the home page and accessing the watchlist.
- **Responsive Design**: Built with responsive CSS to ensure a seamless experience across devices.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For navigation and routing.
- **CSS Modules**: For component-specific styling.
- **TMDB API**: To fetch movie data.
- **React Context API**: For state management of movie data.
- **Vite**: For fast build tooling and development environment.

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Zeyad-Hegazy/movies-library.git
   cd movie-search-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the applications**:

   ```bash
   npm start
   ```

## Usage

To use the Movie Search Application, follow these steps:

1. **Search for Movies**: Use the search bar on the home page to find movies. Enter a keyword or title, and the app will display matching results from the TMDB API.

2. **View Movie Details**: Click on any movie from the search results to view more details, such as the synopsis, release date, and rating.

3. **Manage Watchlist**: Add movies to your watchlist by clicking the "Add to Watchlist" button on the movie details page. Access your watchlist from the navigation menu to view all your saved movies. You can also remove movies from the watchlist.

4. **Navigate the App**: Use the navigation bar to switch between the home page, search results, and watchlist.

## Project Structure

The project is organized as follows:

```bash
public
src/
├── components/
    ├── AddToWatchlist.jsx
    ├── MovieCard.jsx
    ├── Nav.jsx
├── context/
    ├── TMdbProvider.jsx
├── css/
    ├── addToWatchListBtn.module.css
    ├── home.module.css
    ├── movieCard.module.css
    ├── movieDetails.module.css
    ├── nav.module.css
    ├── searchResult.module.css
    ├── watchlist.module.css
├── pages/
    ├── Home.jsx
    ├── MovieDetails.jsx
    ├── SearchResult.jsx
    ├── Watchlist.jsx
├── App.jsx
├── index.css
├── main.jsx
.gitignore
.gitattributes
eslint.config.js
index.html
package-lock.json
package.json
README.md
vite.config.js
```
