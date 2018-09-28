$("#services a").click(function(e) {

    //pour récupérer le text il suffit de laisser text (), si on veut changer il suffit de faire .text("rrrrr")
    if ($(this).html() == "Read More »") {

        e.preventDefault()
        jQuery.data(
            $(this).parent().parent().children("p"), "text",
            $(this).parent().parent().children("p").text()

        )

        $(this).parent().parent().children("p").append("biiillleeieuerirorororororoorororororoorororooror")
        $(this).html("Read Less &raquo;")
    } else {

        $(this).html("Read More »")
    }

})