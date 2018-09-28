$(function () {
    $("#button").on("click", function () {
        $(this).css({
            display:"none"
        });



        var resultado = $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            data: {
                results: 50
            }
        });
        var resultados =resultado.done(function (data) {
             for (var persona of data["results"]) {
                $("#persona").append("<p id='p'>" + "<img src='" + persona["picture"]["large"] + "'> </p>")
            }
                $("p").on("click",function () {
                    $(this).remove( );

    })
        })

        })


});
