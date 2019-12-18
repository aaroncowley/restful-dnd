$(document).ready(function() {
    $("#load").click(function () {
        var name = $("input[name=charname]").val();
        $.ajax({
            type: "POST",
            url: "/api/" + name,
            success: function(data){
                if (data){
                    $('input[name=classlevel]').val(data.classlevel);
                    $('input[name=background]').val(data.background);
                    $('input[name=playername]').val(data.playername);
                    $('input[name=race]').val(data.race);
                    $('input[name=alignment]').val(data.alignment);
                    $('input[name=experiencepoints]').val(data.experiencepoints);
                    $('input[name=Strengthscore]').val(data.strengthscore);
                    $('input[name=Strengthmod]').val(data.strengthmod);
                    $('input[name=Dexterityscore]').val(data.dexterityscore);
                    $('input[name=Dexteritymod]').val(data.dexteritymod);
                    $('input[name=Constitutionscore]').val(data.constitutionscore);
                    $('input[name=Constitutionmod]').val(data.constitutionmod);
                    $('input[name=Wisdomscore]').val(data.wisdomscore);
                    $('input[name=Wisdommod]').val(data.wisdommod);
                    $('input[name=Intelligencescore]').val(data.intelligencescore);
                    $('input[name=Intelligencemod]').val(data.intelligencemod);
                    $('input[name=Charismascore]').val(data.charismascore);
                    $('input[name=Charismamod]').val(data.charismamod);
                    $('input[name=proficiencybonus]').val(data.proficiencybonus);
                    $('input[name=Strength_save]').val(data.strengthsave);
                    $('input[name=Dexterity_save]').val(data.dexteritysave);
                    $('input[name=Constiution_save]').val(data.constiutionsave);
                    $('input[name=Wisdom_save]').val(data.wisdomsave);
                    $('input[name=Intelligence_save]').val(data.intelligencesave);
                    $('input[name=Charisma_save]').val(data.charismasave);
                    $('input[name=Acrobatics]').val(data.acrobatics);
                    $('input[name=Animal_Handling]').val(data.animalhandling);
                    $('input[name=Arcana]').val(data.arcana);
                    $('input[name=Athletics]').val(data.athletics);
                    $('input[name=Deception]').val(data.deception);
                    $('input[name=History]').val(data.history);
                    $('input[name=Insight]').val(data.insight);
                    $('input[name=Intimidation]').val(data.intimidation);
                    $('input[name=Investigation]').val(data.investigation);
                    $('input[name=Medicine]').val(data.medicine);
                    $('input[name=Nature]').val(data.nature);
                    $('input[name=Perception]').val(data.perception);
                    $('input[name=Performance]').val(data.performance);
                    $('input[name=Persuasion]').val(data.persuasion);
                    $('input[name=Religion]').val(data.religion);
                    $('input[name=Sleight_of_Hand]').val(data.sleightofhand);
                    $('input[name=Stealth]').val(data.stealth);
                    $('input[name=Survival]').val(data.survival);
                    $('input[name=passiveperception]').val(data.passiveperception);
                    $('input[name=otherprofs]').val(data.otherprofs);
                    $('input[name=ac]').val(data.ac);
                    $('input[name=initiative]').val(data.initiative);
                    $('input[name=speed]').val(data.speed);
                    $('input[name=maxhp]').val(data.maxhp);
                    $('input[name=currenthp]').val(data.currenthp);
                    $('input[name=temphp]').val(data.temphp);
                    $('input[name=totalhd]').val(data.totalhd);
                    $('input[name=remaininghd]').val(data.remaininghd);
                    $('input[name=atkname1]').val(data.atkname1);
                    $('input[name=atkbonus1]').val(data.atkbonus1);
                    $('input[name=atkdamage1]').val(data.atkdamage1);
                    $('input[name=atkname2]').val(data.atkname2);
                    $('input[name=atkbonus2]').val(data.atkbonus2);
                    $('input[name=atkdamage2]').val(data.atkdamage2);
                    $('input[name=atkname3]').val(data.atkname3);
                    $('input[name=atkbonus3]').val(data.atkbonus3);
                    $('input[name=cp]').val(data.cp);
                    $('input[name=sp]').val(data.sp);
                    $('input[name=ep]').val(data.ep);
                    $('input[name=gp]').val(data.gp);
                    $('input[name=pp]').val(data.pp);
                    $('input[name=personality]').val(data.personality);
                    $('input[name=ideals]').val(data.ideals);
                    $('input[name=bonds]').val(data.bonds);
                    $('input[name=flaws]').val(data.flaws);
                    $('input[name=features]').val(data.features);
                }
            }
        });
    });
});

