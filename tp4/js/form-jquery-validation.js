$(document).ready(function () { //pour chargement de la page
    
        $('#submit').on("click", function (event) { //ajouter un "listener" à un élément
            event.preventDefault();
            console.log( "click" );
    
            if ($('#name').val() == ""
            || $('#firstname').val() == "" 
            || $('#birth').val() == "" 
            || $('#adresse').val() == ""
            || $('#mail').val() == "") {
    
                $(".modal-title").text("remplissez tous les champs");
                $('#myModal').modal("show");
            }
            else {
                
                contactStore.add($('#name').val(), $('#firstname').val(), $('#birth').val(), $('#adresse').val(), $('#mail').val());
                contactStore.getList();
                document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
                '<tr><td>'+$('#name').val()+'</td><td>'+$('#firstname').val()+'</td><td>'+$('#birth').val()+'</td><td>'+$('#adresse').val()+'</td><td>'+$('#mail').val()+'</td></tr>';
            }
    
        });
    
    $('#name').on("keyup", function (event) {
        $('#namecount').text($(this).val().length);
    });

    $('#firstname').on("keyup", function (event) {
        $('#firstnamecount').text($(this).val().length);
    });
});