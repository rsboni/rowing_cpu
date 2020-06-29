// Import the firebase package downloaded to this project folder through npm
import firebase from "firebase";

// Define a variable of the project name, which is used in the config parameters for firebase
const firebaseProjectName = "rowing-cpu"

// Parameters required by the initializeApp used below
const config = {
  apiKey: "ymjHkVF8ZdwuL6bBE4ofsEI8lUzP6LXSnjdY5t5A",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`
};

firebase.initializeApp(config);

export default firebase;