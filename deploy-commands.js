require('dotenv').config();

const {
  REST,
  Routes,
  SlashCommandBuilder
} = require('discord.js');

const commands = [

  new SlashCommandBuilder()
    .setName('ping')
    .setDescription(
      'เช็คบอท'
    ),

  new SlashCommandBuilder()
    .setName('status')
    .setDescription(
      'เช็คระบบ'
    )

]

.map(command =>
  command.toJSON()
);

const rest =
new REST({ version:'10' })

.setToken(
  process.env.TOKEN
);

(async () => {

  try{

    console.log(
      'กำลัง deploy commands...'
    );

    await rest.put(

      Routes.applicationCommands(
        process.env.CLIENT_ID
      ),

      { body:commands }

    );

    console.log(
      'deploy สำเร็จ'
    );

  }catch(err){

    console.log(err);

  }

})();
