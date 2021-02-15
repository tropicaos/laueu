const client = require('@sendgrid/mail')
const {
  APP_TOKEN,
  SENDGRID_API_KEY,
  SENDGRID_TO_EMAIL,
  SENDGRID_FROM_EMAIL
} = process.env

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: JSON.stringify({ message: 'Method not allowed' }) }

  if (!event.body)
    return { statusCode: 405, body: JSON.stringify({ message: 'Body is empty' }) }

  const { message, name, email, permalink, commentId } = JSON.parse(event.body)

  client.setApiKey(SENDGRID_API_KEY)

  const data = {
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_FROM_EMAIL,
    subject: `Novo comentário de ${name} (${email})`,
    html: `
      Permalink: ${permalink}<br />
      <br />
      ${message}<br />
      <br />
      <a href="https://laureano.eu/.netlify/functions/verify-comment?token=${APP_TOKEN}&commentId=${commentId}&action=approve">Aprovar comentário</a><br />
      <a href="https://laureano.eu/.netlify/functions/verify-comment?token=${APP_TOKEN}&commentId=${commentId}&action=reject">Recusar comentário</a>
    `,
  }

  return client.send(data)
    .then(response => ({
      statusCode: 200, body: JSON.stringify({ message: 'Email sent!' }),
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }))
    .catch(error => ({ statusCode: 400, body: JSON.stringify({ message: error.message }) }))
}
