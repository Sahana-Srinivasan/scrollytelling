This is a customizable template to make scrollytelling stories (scrollable text over static images or animation, a la NYT). Uses [React](https://reactjs.org/) and [React Scrollama](https://www.npmjs.com/package/react-scrollama). Built on top of Jason Kao's [example](https://github.com/jsonkao/react-scrollama/tree/master/example). Currently in *BETA* with the following updates in progress
- Making the data input flow better than writing the story, piece by piece, into a JSON
- Developing new layout options (e.g. translucent text box on top of a full-screen image, removing the Bootstrap card for the image)
- Mobile responsive layout
- Adding a second template with a better foundation and instructions for D3 visualizations or React components in lieu of static images

Below are instructions for (a) how to run this demo app locally and (b) how to customize it and insert your own stories.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this project locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## How to customize

Currently, the text that appears as you scroll is taken from 'src/assets/data/narration.json.' The JSON consists of a dictionary, in which each entry has a key and a description. The order of entries in this dictionary will determine the order of text that appears as you scroll. The key of each entry doesn't really matter itself but will determine which image is displayed with the text of that entry. For example, the entry that is fourth in your dictionary and has a key of "hello" and a description of "this is my text" will appear fourth as you scroll. The image called "hello.png" (in your 'src/assets/data/images' folder) will be displayed along with the description "this is my text."

You should enter the text you want to display in your story into 'narration.json' in order, with one piece of scrollable text per entry in the dictionary. Make all your keys unqiue and make sure the key for an entry corresponds to the name of the image for that entry. Images should be put in 'src/assets/data/images'.

You can also pull the Scrollyteller component into your own site.


