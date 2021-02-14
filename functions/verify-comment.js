const { APP_TOKEN, FIREBASE_DATABASE_URL } = process.env

const admin = require('firebase-admin')
const serviceAccount = require('./firebase-cert.json')

const app = !admin.apps.length ? admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: FIREBASE_DATABASE_URL
}) : admin.app()

const db = admin.firestore()

exports.handler = async (event, context) => {
  const { token, commentId, action } = event.queryStringParameters

  if (APP_TOKEN != token)
    return { statusCode: 401, body: JSON.stringify({ message: 'Token is invalid!' }) }

  if (!['approve', 'reject'].includes(action))
    return { statusCode: 400, body: JSON.stringify({ message: 'Action must be: approve|reject' }) }

  const comment = await db
    .collection('comments')
    .doc(commentId)

  if (!(await comment.get()).exists)
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Comment not found!' })
    }

  comment.update({ approved: action === 'approve' })

  return {
    statusCode: 200,
    body: JSON.stringify({ message: action === 'approve' ? 'Approved!' : 'Rejected!' })
  }
}
