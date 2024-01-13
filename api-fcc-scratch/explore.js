// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// console.log("Starting ...");
// client.messages
//   .list({ limit: 20 })
//   .then((messages) => messages.forEach((m) => console.log(m.sid)))
//   .catch((err) => console.log("err:", err));
// console.log("Gathering");

async function deleteAllMessages() {
  const msgs = await client.messages.list();

  // eslint-disable-next-line
  for (msg of msgs) {
    console.warn(`Deleting ${msg.sid}`); // eslint-disable-line
    msg.remove(); // eslint-disable-line
  }
}

console.log("Starting ...");
deleteAllMessages()
  .then(() => console.log("Done!!"))
  .catch((err) => console.error("Error:", err));
