var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Character = require('../models/character');
const db = require("../db");


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({"message":"api routes are " +
            "/api/upload to upload a char sheet, " +
            "/api/:firstname_lastname to request filled out char sheet," +
            "/api/:id to request by id"});
});

router.post('/upload', function(req, res, next) {
    var sh = req.body;
    var charSheet = new Character({
        charname: sh.charname,
        classlevel: sh.classlevel,
        background: sh.background,
        playername: sh.playername,
        race: sh.race,
        alignment: sh.alignment,
        experiencepoints: sh.experiencepoints,
        strengthscore: sh.Strengthscore,
        strengthmod: sh.Strengthmod,
        dexterityscore: sh.Dexterityscore,
        dexteritymod: sh.Dexteritymod,
        constitutionscore: sh.Constitutionscore,
        constitutionmod: sh.Constitutionmod,
        wisdomscore: sh.Wisdomscore,
        wisdommod: sh.Wisdommod,
        intelligencescore: sh.Intelligencescore,
        intelligencemod: sh.Intelligencemod,
        charismascore: sh.Charismascore,
        charismamod: sh.Charismamod,
        proficiencybonus: sh.proficiencybonus,
        strengthsave: sh.Strength_save,
        dexteritysave: sh.Dexterity_save,
        constiutionsave: sh.Constitution_save,
        wisdomsave: sh.Wisdom_save,
        intelligencesave: sh.Intelligence_save,
        charismasave: sh.Charisma_save,
        acrobatics: sh.Acrobatics,
        animalhandling: sh.Animal_Handling,
        arcana: sh.Arcana,
        athletics: sh.Athletics,
        deception: sh.Deception,
        history: sh.History,
        insight: sh.Insight,
        intimidation: sh.Intimidation,
        investigation: sh.Investigation,
        medicine: sh.Medicine,
        nature: sh.Nature,
        perception: sh.Perception,
        performance: sh.Performance,
        persuasion: sh.Persuasion,
        religion: sh.Religion,
        sleightofhand: sh.Sleight_of_Hand,
        stealth: sh.Stealth,
        survival: sh.Survival,
        passiveperception: sh.passiveperception,
        otherprofs: sh.otherprofs,
        ac: sh.ac,
        initiative: sh.initiative,
        speed: sh.speed,
        maxhp: sh.maxhp,
        currenthp: sh.currenthp,
        temphp: sh.temphp,
        totalhd: sh.totalhd,
        remaininghd: sh.remaininghd,
        atkname1: sh.atkname1,
        atkbonus1: sh.atkbonus1,
        atkdamage1: sh.atkdamage1,
        atkname2: sh.atkname2,
        atkbonus2: sh.atkbonus2,
        atkdamage2: sh.atkdamage2,
        atkname3: sh.atkname3,
        atkbonus3: sh.atkbonus3,
        atkdamage3: sh.atkdamage3,
        cp: sh.cp,
        sp: sh.sp,
        ep: sh.ep,
        gp: sh.gp,
        pp: sh.pp,
        personality: sh.personality,
        ideals: sh.ideals,
        bonds: sh.bonds,
        flaws: sh.flaws,
        features: sh.features
    });

    charSheet.save(function (err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
        res.status(200);
        res.redirect('/');
    });

});

module.exports = router;