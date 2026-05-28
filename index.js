require('dotenv').config();

const fs =
require('fs');

const path =
require('path');

const {
  Client,
  GatewayIntentBits,
  Collection,
  Events
} = require('discord.js');

const client =
new Client({

  intents:[
    GatewayIntentBits.Guilds
  ]

});

client.commands =
new Collection();

/* =========================
   LOAD COMMANDS
========================= */

const commandsPath =
path.join(
  __dirname,
  'commands'
);

const commandFiles =
fs.readdirSync(commandsPath)

.filter(file =>
  file.endsWith('.js')
);

for(
  const file of commandFiles
){

  const filePath =
  path.join(
    commandsPath,
    file
  );

  const command =
  require(filePath);

  client.commands.set(
    command.name,
    command
  );

}

/* =========================
   READY
========================= */

client.once('ready', async () => {

  console.log(
    `${client.user.tag} online`
  );

  /* =====================
     REGISTER COMMANDS
  ===================== */

  const slashCommands =

  client.commands.map(command => ({

    name:command.name,

    description:
    command.description

  }));

  await client.application
  .commands.set(
    slashCommands
  );

  console.log(
    'โหลดคำสั่งสำเร็จ'
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

    const command =
    client.commands.get(
      interaction.commandName
    );

    if(!command) return;

    try{

      await command.execute(
        interaction
      );

    }catch(err){

      console.log(err);

    }

  }

);

/* =========================
   LOGIN
========================= */

client.login(
  process.env.TOKEN
);
