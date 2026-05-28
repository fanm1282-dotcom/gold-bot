const axios =
require('axios');

module.exports = {

  name:'price',

  description:'เช็คราคาทอง',

  async execute(interaction){

    try{

      const response =
      await axios.get(

        'https://api.gold-api.com/price/XAU'

      );

      const gold =
      response.data.price;

      await interaction.reply({

        content:
        `🟡 ราคาทองตอนนี้: ${gold} USD`

      });

    }catch(err){

      console.log(err);

      await interaction.reply({

        content:
        '❌ ดึงราคาทองไม่สำเร็จ'

      });

    }

  }

};
