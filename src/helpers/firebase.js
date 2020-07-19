import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAULtbhkB9XyLIUSfFlky_zfv1VFzyPcHw',
    authDomain: 'exam-a8b8b.firebaseapp.com',
    databaseURL: 'https://exam-a8b8b.firebaseio.com',
})

const db = firebaseApp.database()
export default db
