import db from './firebase'

const saveData = (username, results) => {
    db.ref(`/users/${username}`).set({
        results,
    })
}

export default saveData
