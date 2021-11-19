import firebaseConfig from "./firebase.config"
import {initializeApp} from 'firebase/app'

const AuthenticationINIT=()=>{
    initializeApp(firebaseConfig)
}

export default AuthenticationINIT;