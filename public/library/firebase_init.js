if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
var firebaseConfig = {
  "projectId": "pop-portal",
  "databaseURL": "https://pop-portal.firebaseio.com",
  "storageBucket": "pop-portal.appspot.com",
  "locationId": "southamerica-east1",
  "apiKey": "AIzaSyAlpaiXo9si-7H3EuqEn-PnWbAidWzVBjc",
  "authDomain": "pop-portal.firebaseapp.com",
  "messagingSenderId": "911639172538"
};
if (firebaseConfig) {
  firebase.initializeApp(firebaseConfig);
}
