const admin = require("firebase-admin")

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      project_id: "fordev-app",
    }),
    databaseURL: "https://fordev-app.firebaseio.com",
  })
}

export const firestore = admin.firestore()
