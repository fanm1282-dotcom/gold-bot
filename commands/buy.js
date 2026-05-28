module.exports = {

  name:'buy',

  description:'เปิด Buy XAUUSD',

  async execute(interaction){

    await interaction.reply({

      content:
      '🟢 เปิด Buy XAUUSD สำเร็จ'

    });

  }

};
