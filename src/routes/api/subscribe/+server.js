import client from "@mailchimp/mailchimp_marketing";
import { env } from "$env/dynamic/private";

client.setConfig({
  apiKey: env.MAILCHIMP_API_KEY,
  server: env.MAILCHIMP_SERVER_PREFIX,
});

export async function GET({ url }) {
  const { searchParams } = new URL(url);

  if (searchParams.get("i_will_allow_it")) {
    const response = await client.lists.getListMembersInfo(
      env.MAILCHIMP_LIST_ID
    );

    return new Response(JSON.stringify(response, null, 2));
  }
}

export async function POST({ request }) {
  const { email } = await request.json();

  let event;
  // create member
  try {
    event = await client.lists.setListMember(env.MAILCHIMP_LIST_ID, email, {
      status: "pending",
    });
  } catch (e) {
    console.error(e);
  }

  if (!event) {
    try {
      event = await client.lists.addListMember(env.MAILCHIMP_LIST_ID, {
        email_address: email,
        status: "pending",
      });
    } catch (e) {
      console.error(e);
    }
  }

  return new Response(JSON.stringify({ email, event }, null, 2));
}
