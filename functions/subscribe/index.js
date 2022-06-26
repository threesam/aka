const client = require('@mailchimp/mailchimp_marketing')

// get env vars
const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID } = process.env

// configure mailchimp client
client.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX
})

exports.handler = async function (event, context) {
  const { email } = JSON.parse(event.body)

  try {
    const response = await client.lists.addListMember(MAILCHIMP_LIST_ID, {
      email_address: email,
      status: "pending",
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ email, response }, null, 2)
    }
  } catch (error) {
    const errorMessage = JSON.parse(error.response.text)
    return {
      statusCode: error.status,
      body: JSON.stringify({ response: errorMessage.title, error })
    }
  }
}

