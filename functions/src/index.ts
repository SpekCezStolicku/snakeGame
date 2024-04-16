import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp()

export const trimScores = functions.firestore
  .document('scores/{scoreId}')
  .onCreate(async (snap, context) => {
    const scoresRef = admin.firestore().collection('scores')

    const scoresSnapshot = await scoresRef.orderBy('score').get()

    if (scoresSnapshot.size > 20) {
      const toDeleteCount = scoresSnapshot.size - 20
      const batch = admin.firestore().batch()

      scoresSnapshot.docs.slice(0, toDeleteCount).forEach((doc) => {
        batch.delete(doc.ref)
      })

      await batch.commit()
    }
  })
