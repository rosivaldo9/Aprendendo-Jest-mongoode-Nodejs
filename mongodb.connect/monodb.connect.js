const mongoose = require('mongoose');

async function connect(){
    try {
      return  mongoose.connect('mongodb+srv://trr:2804@cluster0.oq0qb.mongodb.net/My?retryWrites=true&w=majority'
      , { useNewUrlParser: true, useUnifiedTopology: true }); 
    }catch(err){
     return  console.error("erro connecting to mongodb");
        console.error(err);
    }
}


module.exports = {connect};
