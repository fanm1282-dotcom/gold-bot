require('dotenv').config();

const {
  Client,
  GatewayIntentBits,
  Events
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
   INTERACTION
========================= */

client.on(

  Events.InteractionCreate,

  async interaction => {

    if(
      !interaction.isChatInputCommand()
    ) return;

    /* =====================
       PING
    ===================== */

    if(
      interaction.commandName ===
      'ping'
    ){

      await interaction.reply(
        'pong 🏓'
      );

    }

    /* =====================
       STATUS
    ===================== */

    if(
      interaction.commandName ===
      'status'
    ){

      await interaction.reply({

        content:
        '🟢 ระบบออนไลน์',

        ephemeral:true

      });

    }

    /* =====================
       BUY
    ===================== */

    if(
      interaction.commandName ===
      'buy'
    ){

      await interaction.reply({

        content:
        '🟢 เปิด Buy XAUUSD สำเร็จ'

      });

    }

    /* =====================
       SELL
    ===================== */

    if(
      interaction.commandName ===
      'sell'
    ){

      await interaction.reply({

        content:
        '🔴 เปิด Sell XAUUSD สำเร็จ'

      });

    }

  }

);

/* =========================
   LOGIN
========================= */

client.login(
  process.env.TOKEN
);
