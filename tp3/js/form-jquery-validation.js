$(document).ready(function () { 
    
    console.log( "DOM ready!" );
    
        $('#submit').on("click", function (event) { 
            event.preventDefault();
            console.log( "click" );
    
            if ($('#Nom').val() == "" || $('#prenom').val() == "" || $('#datedenaissance').val() == "" || $('#Adresse').val() == "" || $('#Email').val() == "") {
    
      $(".modal-title").text("remplissez tous les champs");
                $('#myModal').modal("show");
            }
            else {
                
                $(".modal-title").text("Bienvenue "+$("#Nom").val());
                
                $(".modal-body").html (' Votre date de naissance est :' +$('#datedenaissance').val() + 
            '</br>'  + 'Et vous habitez : ' + '</br>'  + 
            ' <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#Adresse').val()+'&markers='+$('#Adresse').val()+'&size=800x400&zoom=13&key=AIzaSyCRUEGa_filcrHmtcB_0WkQwuRW4NIcOas"/>');
                
                $('#myModal').modal("show");
    
            }
    
        });
    })
