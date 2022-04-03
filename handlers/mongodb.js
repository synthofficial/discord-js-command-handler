const userDb = require("../schemas/User")

module.exports = {
    createDocument : async function(user){ //Call this with the id of message author in an if() statement. Example: if(createDocument(message.author.id)) return message.channel.send('profile created.')

        let profile = await userDb.findOne({ userID: user})

        if(!profile){
            try{
                profile = await userDb.create(
                    {
                        userID: user,
                        xp: 0,
                        level: 1
                    }
                )
                profile.save();
                return true;
            }catch(err){
                console.log(err);
                return false;
            }
        }
    }
}