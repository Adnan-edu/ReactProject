# superhero-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was created to get familiar with the React framework

## Projects:

![2020-02-10_18-19-12](https://user-images.githubusercontent.com/44027826/75325331-bd41cc00-58cc-11ea-9b77-d68b85d0a90d.png)

![2020-02-10_18-21-21](https://user-images.githubusercontent.com/44027826/75325410-e5312f80-58cc-11ea-8956-122439df7d70.png)


Here we are fetching list of super heroes from third party API. React's ES6 class components have lifecycle methods. The render() lifecycle method is mandatory to output a React element, because after all you may want to display the fetched data at some point.
There is another lifecycle method that is a perfect match to fetch data: componentDidMount(). When this method runs, the component was already rendered once with the render() method, but it would render again when the fetched data would be stored in the local state of the component with setState().

The componentDidMount() lifecycle method is the best place to fetch data.
When the data is fetched successfully, it will be stored in the local state with React's this.setState() method. Then the render() method will trigger again and you can display the fetched data.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
