$(document).ready(function(){
    $('#formulaire').on('submit', function(e){  
        if($('#inputPassword4').val() !== $('#inputConfirmPassword4').val()) {
            e.preventDefault();
            alert("Les deux mots de passes sont différents !");
        }
        else {
            alert("Compte créé !");
        }
    });
});