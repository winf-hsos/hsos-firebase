if (typeof firebase == "undefined") {
    console.error("Please load firebase API!");
}

firebase.initializeApp({
    projectId: "web-engineering-project",
    apiKey: "AIzaSyBMjgUu-f8i_HB5R6ZzNoUVcUpK57K0UHY",
    databaseURL: "https://web-engineering-project.firebaseio.com",
    authDomain: "web-engineering-project.firebaseapp.com",
});

const firestore = firebase.firestore();
const auth = firebase.auth();

const settings = {
    timestampsInSnapshots: true,
};

firestore.settings(settings);

export default firebase;

export {
    firestore,
    auth
}
