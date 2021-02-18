import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBN4EtYZSsCkWG0A1KknHu0Z9qdsnLT6EI",
  authDomain: "fordevs-78647.firebaseapp.com",
  projectId: "fordevs-78647",
  storageBucket: "fordevs-78647.appspot.com",
  messagingSenderId: "351819736162",
  appId: "1:351819736162:web:88db490a184c2427081d3b",
  measurementId: "G-E1FT3YEH0T",
}

// If it isn't initialized then initialize it
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapDataFromFirebaseAuthToUserObject = (user) => {
  const { displayName, email, photoURL } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const userObject = mapDataFromFirebaseAuthToUserObject(user)
    onChange(userObject)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
  // .then(mapDataFromFirebaseAuthToUserObject)
}
