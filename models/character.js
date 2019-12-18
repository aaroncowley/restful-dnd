const mongoose = require('mongoose');

var charSchema = mongoose.Schema({
    charname: {
        type: String,
        trim: true
    },
    classlevel: {
        type: String,
        trim: true
    },
    background: {
        type: String,
        trim: true
    },
    playername: {
        type: String,
        trim: true
    },
    race: {
        type: String,
        trim: true
    },
    alignment: {
        type: String,
        trim: true
    },
    experiencepoints: {
        type: String,
        trim: true
    },
    strengthscore: {
        type: String,
        trim: true
    },
    strengthmod: {
        type: String,
        trim: true
    },
    dexterityscore: {
        type: String,
        trim: true
    },
    dexteritymod: {
        type: String,
        trim: true
    },
    constitutionscore: {
        type: String,
        trim: true
    },
    constitutionmod: {
        type: String,
        trim: true
    },
    wisdomscore: {
        type: String,
        trim: true
    },
    wisdommod: {
        type: String,
        trim: true
    },
    intelligencescore: {
        type: String,
        trim: true
    },
    intelligencemod: {
        type: String,
        trim: true
    },
    charismascore: {
        type: String,
        trim: true
    },
    charismamod: {
        type: String,
        trim: true
    },
    proficiencybonus: {
        type: String,
        trim: true
    },
    strengthsave: {
        type: String,
        trim: true
    },
    dexteritysave: {
        type: String,
        trim: true
    },
    constiutionsave: {
        type: String,
        trim: true
    },
    wisdomsave: {
        type: String,
        trim: true
    },
    intelligencesave: {
        type: String,
        trim: true
    },
    charismasave: {
        type: String,
        trim: true
    },
    acrobatics: {
        type: String,
        trim: true
    },
    animalhandling: {
        type: String,
        trim: true
    },
    arcana: {
        type: String,
        trim: true
    },
    athletics: {
        type: String,
        trim: true
    },
    deception: {
        type: String,
        trim: true
    },
    history: {
        type: String,
        trim: true
    },
    insight: {
        type: String,
        trim: true
    },
    intimidation: {
        type: String,
        trim: true
    },
    investigation: {
        type: String,
        trim: true
    },
    medicine: {
        type: String,
        trim: true
    },
    nature: {
        type: String,
        trim: true
    },
    perception: {
        type: String,
        trim: true
    },
    performance: {
        type: String,
        trim: true
    },
    persuasion: {
        type: String,
        trim: true
    },
    religion: {
        type: String,
        trim: true
    },
    sleightofhand: {
        type: String,
        trim: true
    },
    stealth: {
        type: String,
        trim: true
    },
    survival: {
        type: String,
        trim: true
    },
    passiveperception: {
        type: String,
        trim: true
    },
    otherprofs: {
        type: String,
        trim: true
    },
    ac: {
        type: String,
        trim: true
    },
    initiative: {
        type: String,
        trim: true
    },
    speed: {
        type: String,
        trim: true
    },
    maxhp: {
        type: String,
        trim: true
    },
    currenthp: {
        type: String,
        trim: true
    },
    temphp: {
        type: String,
        trim: true
    },
    totalhd: {
        type: String,
        trim: true
    },
    remaininghd: {
        type: String,
        trim: true
    },
    atkname1: {
        type: String,
        trim: true
    },
    atkbonus1: {
        type: String,
        trim: true
    },
    atkdamage1: {
        type: String,
        trim: true
    },
    atkname2: {
        type: String,
        trim: true
    },
    atkbonus2: {
        type: String,
        trim: true
    },
    atkdamage2: {
        type: String,
        trim: true
    },
    atkname3: {
        type: String,
        trim: true
    },
    atkbonus3: {
        type: String,
        trim: true
    },
    atkdamage3: {
        type: String,
        trim: true
    },
    cp: {
        type: String,
        trim: true
    },
    sp: {
        type: String,
        trim: true
    },
    ep: {
        type: String,
        trim: true
    },
    gp: {
        type: String,
        trim: true
    },
    pp: {
        type: String,
        trim: true
    },
    personality: {
        type: String,
        trim: true
    },
    ideals: {
        type: String,
        trim: true
    },
    bonds: {
        type: String,
        trim: true
    },
    flaws: {
        type: String,
        trim: true
    },
    features: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Character', charSchema);

