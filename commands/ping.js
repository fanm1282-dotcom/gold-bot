module.exports = {

  name:'ping',

  description:'เช็คบอท',

  async execute(interaction){

    await interaction.reply(
      'pong 🏓'
    );

  }

};
