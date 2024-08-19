# Angular Movie Search App

This is an Angular application that allows users to search for movies using the OMDB API. The app displays movie search results with pagination and provides detailed information about each movie. Users can also click on a movie's IMDb ID to be redirected to its IMDb page.

## Features

- **Movie Search**: Search for movies by title.
- **Pagination**: Navigate through pages of search results.
- **Movie Details**: View details of selected movies, including title, year, and poster.
- **IMDb Redirection**: Click on the IMDb ID to view the movie's IMDb page.
- **Loading Indicator**: Displays a loading animation while fetching data.
- **Debounce Search**: Prevents too many requests by adding debounce time to the search input.

## Technologies Used

- **Angular 17**
- **TypeScript**
- **RxJS**
- **OMDB API**
- **Visual Studio Code** (recommended IDE)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed on your machine.
- An API key from [OMDB API](http://www.omdbapi.com/apikey.aspx).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/angular-movie-search.git
   cd angular-movie-search
   ```
2. 	Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

```bash
ng serve
```

## Testing

```bash
ng test
```
This will run the tests and provide feedback on the functionality of the components and services.

## Project Structure

- src/app/components: Contains the main components like MainComponent and MovieItemComponent.
- src/app/services: Contains the MovieService which handles communication with the OMDB API.
- src/app/models: Contains the Movie interface for type safety.
- src/assets: Contains static assets like images.
- src/environments: Environment configuration.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [OMDB API](http://www.omdbapi.com/) for providing the movie data.
- [Angular](https://angular.io/) for the framework.
- [Visual Studio Code](https://code.visualstudio.com/) for the development environment.
