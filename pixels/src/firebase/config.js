import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyANGwHmguP7FCRyuQhTX_9EFJPfeE1kCCs",
    authDomain: "pixel-editor-b0e48.firebaseapp.com",
    projectId: "pixel-editor-b0e48",
    storageBucket: "pixel-editor-b0e48.appspot.com",
    messagingSenderId: "676280986074",
    appId: "1:676280986074:web:e687c4b0c9c9a617b538e3",
    measurementId: "G-FD6FL43PVF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };