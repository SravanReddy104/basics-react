import {initializeApp,getAuth,createUserWithEmailAndPassword} from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyC6VVb_zsOFd7J_YUcp7fFWRwMT7OHqMDQ",
    authDomain: "form-848b9.firebaseapp.com",
    projectId: "form-848b9",
    storageBucket: "form-848b9.appspot.com",
    messagingSenderId: "418981941340",
    appId: "1:418981941340:web:543b968618fee82ea81699",
    measurementId: "G-RHXC25CFFB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
createUserWithEmailAndPassword(auth,"sravba@gmail.com","aklall,am,")