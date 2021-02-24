import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAg0bgyZ9h1lGw6hQumP7bW1cnQvL7GIi0",
  authDomain: "fordev-app.firebaseapp.com",
  projectId: "fordev-app",
  storageBucket: "fordev-app.appspot.com",
  messagingSenderId: "585389744223",
  appId: "1:585389744223:web:3dc23401f21969b27c3bea",
  measurementId: "G-53EJXKPD3D",
}

// If it isn't initialized then initialize it
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const mapDataFromFirebaseAuthToUserObject = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    email,
    username: displayName,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const userObject = user ? mapDataFromFirebaseAuthToUserObject(user) : null
    onChange(userObject)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
  // .then(mapDataFromFirebaseAuthToUserObject)
}

export const addPost = ({ avatar, content, uid, username }) => {
  return db.collection("posts").add({
    avatar,
    content,
    uid,
    username,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likeCount: 0,
    repostCount: 0,
  })
}

export const fetchLatestPosts = () => {
  return db
    .collection("posts")
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        }
      })
    })
}
