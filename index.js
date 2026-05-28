require('dotenv').config();

const {
  Client,
  GatewayIntentBits
} = require('discord.js');

const client =
new Client({

  intents:[
    GatewayIntentBits.Guilds
  ]

});

/* =========================
   READY
========================= */

client.once('ready', () => {

  console.log(
    `${client.user.tag} online`
  );

});

/* =========================
   LOGIN
========================= */

client.login(
  process.env.TOKEN
);
