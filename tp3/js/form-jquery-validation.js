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
                $(".modal-body").html(' Votre date de naissance est : ' + $("#datedenaissance").val() + 
            '</br>'  + 'Et vous habitez : ' + '</br>'  + 
            '<img src="https://maps.googleapis.com/maps/api/staticmap?center=Noisy%20Le%Grand&markers=Noisy%20Le%Grand&size=800x400&zoom=12&key=AIzaSyAflbMoDv0Agz3Wu7NarKAoUD3uc1iAr_Y"  height="260" width="420"/>' 
             + $("#Adresse").val() +  '</a>' );
             
                $('#myModal').modal("show");
    
            }
    
        });
    })
