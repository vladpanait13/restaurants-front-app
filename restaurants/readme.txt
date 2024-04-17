1) Set up a new React Native Project: You can create a new React 
Native project using Expo CLI or React Native CLI. 
For simplicity, I'll use Expo CLI.

in bash, type:

expo init MyRestaurantApp

2) Use TypeScript: Expo supports TypeScript out of the box. 
When setting up the project with Expo CLI, you can choose 
TypeScript as the language option.

3) Use Supabase or Firebase: Since you mentioned either Supabase 
or Firebase, let's choose Firebase for this example.

- Set up a Firebase project in the Firebase console 
(https://console.firebase.google.com/).
- Add Firebase to your React Native project by following 
the instructions provided by Firebase.
- Install Firebase SDK and configure it in your project.

4) Use Redux for state management: Install Redux and related 
packages in your project.

in bash, type:

npm install redux react-redux @reduxjs/toolkit

5) Create a simple API for restaurant names: You can create 
a simple Express server with Node.js for this purpose.

- Install Express in your project. in bash, type:

npm install express

- Create a simple Express server with a route that serves 
a random list of 10 restaurant names. (server.js)

6) Connect the React Native app with the API: Use fetch or 
Axios to fetch restaurant data from your Express server.

7) Run your React Native app: Start your React Native app to 
see the list of restaurant names fetched from the Express server.

in bash, type: 

npm start

FINAL NOTE: These steps should help you set up a React Native app 
with TypeScript, Redux for state management, Firebase for backend, 
and an Express server serving a simple API for restaurant names.



ADDITIONAL STEPS:
create actions, reducers and set up the Redux store















