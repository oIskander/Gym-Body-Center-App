
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyBN8TehTMK_CaqYOUv3VH7eEMVgv3UTNUY",
            authDomain: "gym-bodycenter.firebaseapp.com",
            databaseURL: "https://gym-bodycenter.firebaseio.com",
            projectId: "gym-bodycenter",
            storageBucket: "gym-bodycenter.appspot.com",
            messagingSenderId: "611685071015"
        });
    }

}

module.exports = Firebase;