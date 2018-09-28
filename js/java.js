$(function () {
    $("#button").on("click", function () {
        $(this).css({
            display:"none"
        })
        $("p").on("click",function () {
            $(this).remove();


        })

        var resultado = $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            data: {
                results: 50
            }
        });
        resultado.done(function (data) {
            for (var persona of data["results"]) {
                $("#persona").append("<p>" + "<img src='" + persona["picture"]["large"] + "'>"+persona["name"]
                    ["first"]+""+persona["name"]["last"]+"<br>"+persona["email"]+"<br>"+persona["location"]["street"]
                    +""+persona["location"]["postcode"]+" "+[","]+" "+persona["location"]["city"]+""+[","]+""+persona["location"]["state"]+" </p>")

            }


    })
    })


});


