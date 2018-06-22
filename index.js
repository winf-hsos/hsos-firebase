import firebase from 'firebase';

firebase.initializeApp({
    projectId: "",
    apiKey: "",
    databaseURL: "",
    authDomain: "",
});

const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true,
};
firestore.settings(settings);

const auth = firebase.auth();

export default firebase;

export {
    firestore,
    auth
};
