
// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/api`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL_7BHASjmGtu9Ku8PA1C0vQwNKrmJOMI",
  authDomain: "ntuma-business-test.firebaseapp.com",
  databaseURL: "https://ntuma-business-test-default-rtdb.firebaseio.com",
  projectId: "ntuma-business-test",
  storageBucket: "ntuma-business-test.appspot.com",
  messagingSenderId: "670779336040",
  appId: "1:670779336040:web:958c543e3baf3e5ce4e2dd",
  measurementId: "G-T5NYSLRZTE"
};