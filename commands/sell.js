module.exports = {

  name:'sell',

  description:'เปิด Sell XAUUSD',

  async execute(interaction){

    await interaction.reply({

      content:
      '🔴 เปิด Sell XAUUSD สำเร็จ'

    });

  }

};
