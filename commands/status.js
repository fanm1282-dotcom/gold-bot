module.exports = {

  name:'status',

  description:'เช็คระบบ',

  async execute(interaction){

    await interaction.reply({

      content:
      '🟢 ระบบออนไลน์',

      ephemeral:true

    });

  }

};
