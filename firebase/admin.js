const admin = require("firebase-admin")
const serviceAccount = require("../service-account.json")

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fordev-app.firebaseio.com",
  })
}

export const firestore = admin.firestore()
