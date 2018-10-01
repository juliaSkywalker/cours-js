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




//*******************************************EXERCICE CHANGEMENT IMAGE*******************************************
// selection.objet(fonction)

$("#intro img").mouseenter(function() {

    $(this).attr("src", "https://www.redwallpapers.com/public/redwallpapers-small-thumb/grayscale-photo-of-group-of-people-inside-stadium-free-stock-photo-image-wallpaper.jpeg")
})
$("#intro img").mouseout(function() {

    $(this).attr("src", "images/demo/450x250.gif")
})

//*******************************************EXERCICE invisible lien******************************************* 
// $("footer one_quarter ul").click(function() {

//     $(this).hide()

// $("footer one_quarter title").mouseenter(function() {

//     $(this).children("ul").show
// })

// correction


$("#footer li").click(function(e) {

    e.preventDefault();
    $(this).hide(); //equivaut a $(this).css(display,"none")

})

$("#footer .title").click(function() {
    $(this).next().find("li").show();

})


//*******************************************exercice date et change text n anglais*******************************************

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date();
let todayFr = today.toLocaleDateString('fr-FR', options) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let todayEn = today.toLocaleDateString('en-EN', options) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


$("#copyright .fl_left").text("copyright © " + todayFr + "- All Rights Reserved - Domain Name")



// *******************************************exercice changer la langue au click*******************************************:

// $("#copyright .fl-left").click(function() {


//     if (today.toLocaleDateString() == true) {

//         today = today.toLocaleDateString('en-EN', options) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
//     } else {
//         today.toLocaleDateString() == true
//     }
// })

let isFrench = true; //en créant un index, on a décidé par défaut que la phrase serait en français 
$("#copyright .fl-left").click(function() {


    if (isFrench) {


        $("#copyright .fl_left").text("copyright © " + todayEn + "- All Rights Reserved - Domain Name")
        isFrench = false;
    } else {


        $("#copyright .fl_left").text("copyright © " + todayFr + "- All Rights Reserved - Domain Name")
        isFrench = true;
    }
})



/*******************************************TERNAIRES*******************************************/
//cela ne marche que si on a une seule instruction et si on a if
isFrench = (isFrench) ? false : true;
//version classique=
// if (isFrench) 
// { isFrench = false } 
// else { isFrench = true }




// $(".form-group #button1id").click(function() {
//     let text = $.attr("#textinput");
//     $("input").val(text);

// })

/*******************************************Exercice form*******************************************/
// changer les données dans un formulaire quand on cliquer sur le bouton


$("form").submit(function(e) {
    e.preventDefault()

    $("#textinput").val("Entrer votre nom")
    $("#texarea").text("Entrer votre adresse")
    $("#selectmultiple").val("2")
    $("#selectbasic").val("2")
    $("input[name=radios]").attr("checked", false)
    $("input[name=radios]").eq(1).attr("checked", true)
    $("input[type=checkbox]").prop("checked", false)
    $("input[type=checkbox]").eq(1).prop("checked", true)
})


/*******************************************Exercice form*******************************************/

let tab1 = [$("#services img").eq(0).attr("src", "http://blog.lefigaro.fr/theatre/Tournesols.jpg"),
    $("#services img").eq(1).attr("src", "http://3.bp.blogspot.com/-IoKNC8xkERY/TrzLNAHZPyI/AAAAAAAADmY/CXmpCfFGuko/s1600/Chandragiri+Fort.jpg"),
    $("#services img").eq(2).attr("src", "http://chinanews.bannedbook.org/wp-content/uploads/2016/07/1135bafcecb4cc2dc383ded09807bd18.jpg")
]




/*******************************************Exercice form*******************************************/

$("#services img").on("click", function() {
    //je stock mon image dans une variable stockage
    let stockage = $("#services img").eq(0).attr("src")
    $("#services img").eq(0).attr("src", $("#services img").eq(2).attr("src"))
    $("#services img").eq(2).attr("src", $("#services img").eq(1).attr("src"))
    $("#services img").eq(1).attr("src", stockage)

})

// if ($("#services img").mouseenter(function() {

//         $("#services img").eq(0).attr("src", $("#services img").eq(2).attr("src")).tab2
//         $("#services img").eq(2).attr("src", $("#services img").eq(1).attr("src")).tab2
//         $("#services img").eq(1).attr("src", stockage).tab2
//     })

//   $("#services img").mouseout(function() {
//             let stockage = $("#services img").eq(0).attr("src").tab1
//             $("#services img").eq(0).attr("src", $("#services img").eq(2).attr("src")).tab1
//             $("#services img").eq(2).attr("src", $("#services img").eq(1).attr("src")).tab1
//             $("#services img").eq(1).attr("src", stockage).tab1

//         })

/*******************************************Exercice form*******************************************/
//enonce:sur nos trois affiches je veux ajouter trois nouvelles images de manières aléatoire au passage de la souris

"https://i.pinimg.com/originals/77/ed/b1/77edb1c41330d9f5de54ad7c6d491b63.jpg"
"https://i.pinimg.com/originals/a5/d4/84/a5d484acd086d166feb9dead75a20a78.jpg"
"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dionaea_muscipula_1.jpg/290px-Dionaea_muscipula_1.jpg"

let isOriginal = true;
let arrayOrigin = [];

$(".more").mouseenter(function() {

    if (isOriginal == true) {


        arrayOrigin.push($("#services img").eq(0).attr("src"))
        arrayOrigin.push($("#services img").eq(1).attr("src"))
        arrayOrigin.push($("#services img").eq(2).attr("src"))
        $("#services img").eq(0).attr("src", "https://i.pinimg.com/originals/77/ed/b1/77edb1c41330d9f5de54ad7c6d491b63.jpg")
        $("#services img").eq(1).attr("src", "https://i.pinimg.com/originals/a5/d4/84/a5d484acd086d166feb9dead75a20a78.jpg")
        $("#services img").eq(2).attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dionaea_muscipula_1.jpg/290px-Dionaea_muscipula_1.jpg")
    } else {
        $("#services img").eq(0).attr("src", arrayOrigin[0])
        $("#services img").eq(1).attr("src", arrayOrigin[1])
        $("#services img").eq(2).attr("src", arrayOrigin[2])
        arrayOrigin = []
    }
    isOriginal = (isOriginal) ? false : true;
})