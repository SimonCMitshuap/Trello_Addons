console.log("SCRIPT CHARGE");

TrelloPowerUp.initialize({

    'card-buttons': function(t) {

        return [{
            text: buttonName,
            callback: genererRapport
        }];

    }

});
function genererRapport(t) {

   ...
}
