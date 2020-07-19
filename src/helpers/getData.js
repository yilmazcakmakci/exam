import db from './firebase'

export default (path) => {
    return db
        .ref(path)
        .once('value')
        .then((snap) => {
            return snap
        })
}
