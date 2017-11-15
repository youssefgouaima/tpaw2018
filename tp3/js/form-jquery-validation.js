$(document).ready(function () { //pour chargement de la page
    
        $('#submit').on("click", function (event) { //ajouter un "listener" à un élément
            event.preventDefault();
            console.log( "click" );
    
            if ($('#Nom').val() == ""|| $('#prenom').val() == "" || $('#datedenaissance').val() == "" || $('#Adresse').val() == "" || $('#Email').val() == "") {
    
                $(".modal-title").text("Erreur");
                $(".modal-body").html('Veuillez remplir tous les champs SVP');
                
            }
            else {
                $(".modal-body").text("Bienvenue "+$("#Nom").val());
                $(".modal-body").html(' Votre date de naissance est : ' + $("#datedenaissance").val() + 
            '</br>'  + 'Et vous habitez : ' + '</br>'  + ' <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#Adresse').val()+'&markers='+$('#Adresse').val()+'&size=800x400&zoom=13"/>');
                $('#myModal').modal("show");
    
            }
    $("#myModal").modal("show");
        });
    })
