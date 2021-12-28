<p align="center">
  <img alt="Logo for 2020" src="https://raw.githubusercontent.com/Glassig/newyear/master/src/images/logo2020.svg" width="100" />
</p>
<h1 align="center">
  A(n imperfect) new year's memory game
</h1>

## Made with love by
Design: [Andreas](https://github.com/decentninja).

Code: [Angelina](https://github.com/Glassig).

## Scripts

**`npm i`**: Install the app.

**`npm start`**: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**`npm run build`**: Builds the app for production to the `build` folder.

## File structure and code format
Some notes:

[Cards](src\cards.json): The talking prompts, in the code referred to as "cards", can be found in [src\cards.json](src\cards.json). Every card should have a `text` and `icon`, and inside the text there should be a part surrounded by `|`, which creates an emphasis. The icons are now, mostly broken, so that should be thought over. Not all can be seen.

[Styling](src\mem-2019.webflow.css): The app was designed in Webflow, so all CSS is generated from there. Maaaaybe you can ask Andreas about getting access to the project in webflow, but it is probably better to just start over yourself or. The generated file can be found in [src\mem-2019.webflow.css](src\mem-2019.webflow.css).

[Logic](src\Card\Card.tsx): Most of the logic for formatting the card, which card should be show etc is is [src\Card\Card.tsx](src\Card\Card.tsx). The basic logic is like this: it saves a list of which cards you have yet not seen, and when it is empty it starts over. Which card is shown is otherwise random. A nice cleanup would be to move the "random"-logic over to App.tsx, but would've could've should've. The project was designed and implemented in just a few short hours before the party started, so best practice wasn't always used.

## Example 2020

For the design in 2020, the theme was "imperfect", or "A(n imperfect) new year's memory game", as the year did not deserve effort. Most of the app was not updated, we just added a few cards and made an ugly logo.

<p align="center">
  <img alt="Design for 2020" src="https://raw.githubusercontent.com/Glassig/newyear/master/public/images/2020.PNG" width="100" />
</p>

## Example 2019

For the design in 2019, the theme was "1920's", with black and gold. The "clock" is the card symbol, when it is working, "moment" is emphasized, and "next" is the next card button.

<p align="center">
  <img alt="Design for 2019" src="https://raw.githubusercontent.com/Glassig/newyear/master/public/images/2019.PNG" width="1000" />
</p>

## Documentation

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
