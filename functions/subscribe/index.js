const client = require('@mailchimp/mailchimp_marketing')

// get env vars
const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID } = process.env

// configure mailchimp client
client.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX
})

exports.handler = async function (event, context) {
  const { email } = event.body

  // const response = await client.lists.addListMember(MAILCHIMP_LIST_ID, {
  //   email_address: email,
  //   status: "pending",
  // })

  return {
    statusCode: 200,
    body: JSON.stringify({ event, context, email }, null, 2)
  }
}

