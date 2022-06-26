const client = require('@mailchimp/mailchimp_marketing')

// configure mailchimp client
client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
})

exports.handler = async function (event, context) {
  const { email } = await event.body

  const response = await client.lists.addListMember("list_id", {
    email_address: email,
    status: "pending",
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ event, context, email, response }, null, 2)
  }
}