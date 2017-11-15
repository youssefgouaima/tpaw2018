$(document).ready(function () { //pour chargement de la page
    
        $('#submit').on("click", function (event) { //ajouter un "listener" à un élément
            event.preventDefault();
            console.log( "click" );
    
            if ($('#Nom').val() == ""|| $('#prenom').val() == "" || $('#datedenaissance').val() == "" || $('#Adresse').val() == "" || $('#Email').val() == "") {
    
                $(".modal-body").html(' ');
                $(".modal-title").text("Veuillez remplir tous les champs SVP");
                $('#myModal').modal("show");
            }
            else {
                $(".modal-body").text("Bienvenue "+$("#Nom").val());
                $(".modal-body").html(' <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#Adresse').val()+'&markers='+$('#Adresse').val()+'&size=800x400&zoom=13"/>');
                $('#myModal').modal("show");
    
            }
    
        });
    })