
$(document).ready(function(){
    // first();
    second();
});

function first(){
    $.getJSON( "team.json", function( data ) {
        var items = [];
        $.each( data.members, function( key, val ) {
            console.log(val);
            items.push( "<h2>" + val.name  + "</h2><h5>" + val.position + "</h5><p>" + val.bio + "</p>" );
        });
        $('#team').empty();
        $('#team').append(items);
    });
}

function second(){
    $.ajax({
        cache:false,
        url: "team.json",
        dataType: "json",
        beforeSend: function(){
            $('#team').empty();
            $('#team').append("<h5>Loading</h5>");
        },
        success: function(result) {
            var items = [];
            $.each( result.members, function( key, val ) {
                items.push( "<h2>" + val.name  + "</h2><h5>" + val.position + "</h5><p>" + val.bio + "</p>" );
            });
            setTimeout(function() {
                $('#team').empty();
                $('#team').append(items);
            }, 3000);  
        },
        error: function() {
            setTimeout(function() {
                $('#team').empty();
                $('#team').append("There is something wrong.Please try again.");
            }, 3000);    
        }
    });
}