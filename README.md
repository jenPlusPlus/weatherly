## About
This was a Turing School project, and it was our first time to work with React. The app uses the Weather Underground API to retrieve weather data that is displayed. It also uses an auto-complete function that was built as a previous project.

### Required Technology
- ReactJS
- fetch for api requests
- weather underground API
- Use this react starter kit repo.

### Requirements
Your weather underground API key should not be stored on github. Store it in a seperate file. This file should be added to your .gitignore file.

Your app should have at a minimum the following components.

1. App
2. Welcome
3. Search
4. Current Weather
5. 7 Hour Forecast
6. 10 Day Forecast
7. Card (used in 7 hour and 10 day)

#### Phase one
Create your Current Weather component

You will create your User Interface using mock data. This will speed up your development time by not waiting for api requests. You can find the mock data here. Copy it into a seperate file that you can then import into your App file.

Your Current Weather component should display the following information

- the name of the current city
- the current condition
- the current day
- the current temperature
- the expected high and expected low for the day
- a summary of what the weather is going to be like that day (“Windy, chance of a few late night showers. Lows overnight in the mid 50s.)

#### Phase two
The application should have a 7 hour weather forecast component. Each hour should be a card component and should display
- the hour
- an image that reflects the weather
- the projected temperature
- Application should handle when a user searches for a location that is not found by the API. Team should research different ways to handle unfound locations by looking around on different weather and other location searching applications and implement a solution for their project that they find intuitive.

#### Phase three
The application should have a 10 day forecast component. Each day should be a card component and should display
- the name of the day
- an image that reflects the weather
- the projected high and low temperature

#### Phase four
Your application should have a welcome page that greets the user. The welcome page has a search component.
The search component consists of an input field and a submit button that allows the user to search for a location (the location should work with both a zip code and city/state).

Once the desired location is submitted there should be a way for the user to change location information. Once the location information is changed the weather should reflect the desired location.

location persists after refresh.

##### Phase five
Add autocomplete functionality to your search input
import your completeMe into your Weathrly project. Populate it with this list of city/states. When a user starts typing in a city/state or zip code display a list of possible suggestions using your completeMe’s suggest function.
