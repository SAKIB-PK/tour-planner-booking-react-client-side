import { initializeApp } from 'firebase/app'
import firebaseConfig from './Firebase.config'
function FirebaseInitial(){
    initializeApp(firebaseConfig)
}
export default FirebaseInitial