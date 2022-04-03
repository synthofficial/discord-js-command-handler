const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema( //This is a basic schema, you can add more values if needed. THESE DO NOT WORK! YOU NEED TO MANUALLY ADD YOUR XP SYSTEM!
    {
        userID: { type: String, require: true, unique: true },
        xp: { type: Number },
        level: { type: Number }
    }
);

const model = mongoose.model("UserProfiles", profileSchema); //This can be changed to whatever you want to name the document.

module.exports = model;