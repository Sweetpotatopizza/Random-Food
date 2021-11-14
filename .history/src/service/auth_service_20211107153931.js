import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login() {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
