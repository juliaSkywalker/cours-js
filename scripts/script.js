//fonction :isoler du code et le répéter à plusieurs endroits. fonction anonyme: on veut isoler le code mais on veut pas le répéter. //#endregion

// let tab = [22, 11, 93];
// let obj = { 1: 22, 2: 11, 3: 93 }

/*****************************************************************EXERCICE1*****************************************************************/
let imgCarrousel = [
    "http://tcsultimatixwebmail.com/wp-content/uploads/2018/04/automatic-image-slider-in-html-wonderful-photos-wow-slider-not-working-of-automatic-image-slider-in-html.jpg",
    "http://cagou.com/blog/wp-content/uploads/2015/09/image-17399.jpg",
    "http://www.bahrami.ch/wp-content/uploads/2014/12/image-th%C3%A9rapie-960x360.jpg"
]
let occurrenceCarrousel = 0; //pour savoir ou on est dans le carrousel . 
setInterval(function() {
    let img = document.querySelector('#slider>a>img')
    img.src = imgCarrousel[occurrenceCarrousel]; //on change la source de l'image pour y attroduire notre tableau imgCarrousel. 
    occurrenceCarrousel++ //dans l'image dont l'origine (src)est le tableau image carroussel, entre deux intervalle on va y mettre notre index (qui est égale à 0) puis on va y ajouter +1, pour qu'il puisse avancer. 

    if (occurrenceCarrousel == imgCarrousel.length) //length: c'est toujours le + 1
        occurrenceCarrousel = 0;
}, 5000)

//pour revenir au départ on cré une condition si notre index


/*****************************************************************EXERCICE2*****************************************************************/
// quand on met une variable l'idéal est de la paramétrer en intégrant une valeur défault
//j'ai crée ma fonction


/** 
 * 
 * randomText- rend une chaine de carctère de manier l'aléatoire
 * @param text :string- chaine de caractère à mélanger/
 *
 */
function randomText(text = 'Mike le roi') {
    let tableau = text.split(""); //Split est une fonction qui permet de convertir une chaine de caractères 
    tableau = arrayToStringRandom(tableau).join(""); //on fait Appel à la fonction 

    //tableau=tableau.join('')

    return tableau; //retourne le string aléatoire. 



}

/**cette function arraytoStringRandom permet de parcourir le tableau. rend nouveau tableau avec les éléments de l'ancien mais de manière alléatoire 
*@param tab=[] tableau mélanger
*@returns newARRAY un nouveau tableau

**/
function arrayToStringRandom(tab = []) {
    let tabRandom = [] //tableau des entiers déja récupérer qui permet déviter les doublons de caractères. Le but de cette variable est de stocker toutes ces fonctions.
    let random, newArray = []; // création de deux variables - random est la variable qui stockera le nombre aléatoire. newArray sera les nouveaux tableaux créé à partir des nombre aléatoire générale


    // permet de générer tout les caractères selon la taille du tableau. (tab- tableau envoyez à l'appel de la fonction)
    for (let i = 0; i < tab.length; i++) {
        do {
            random = getRandomInt(0, tab.length); //retour un entier aléatoire compris entre 0 et la taille du tableau (tab)
        } while (tabRandom.includes(random)); //verifie si l'entier à déjà été réupérer si oui; relance l'appel de la fonction getRandomInt
        tabRandom.push(random); // pour ajouter l'entier aléatoire dans le tableau (tabRandom)
        newArray.push(tab[random]); // pour ajouter le caractère aléatoire dans le tableau (tabRandom)

        console.log(random);
    }
    return newArray; // retourner le nouvea tableau
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//j'appelle ma fonction

let baliseA = document.querySelectorAll("#header > nav a");

for (let i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText(baliseA[i].innerHTML);
}
console.log(baliseA);



/*****************************************************************EXERCICE3*****************************************************************/
// ENONCE:PAR UN CLICK ON VEUT QUE LES IMAGES SOIT CHANGER 

let tabImagesArticles = ["https://i.pinimg.com/originals/f4/1e/04/f41e04fc98293947b51399e36baf019f.jpg", "http://3.bp.blogspot.com/-IoKNC8xkERY/TrzLNAHZPyI/AAAAAAAADmY/CXmpCfFGuko/s1600/Chandragiri+Fort.jpg", "https://i.pinimg.com/originals/a5/d4/84/a5d484acd086d166feb9dead75a20a78.jpg"]


let dataImagesHtml = document.querySelectorAll('#services img')
    //console.log(dataImagesHtml) pour vérifier

for (let i = 0; i < dataImagesHtml.length; i++) {
    //dataImagesHtml[i] renvoit à un objet. 
    //si on nous demande un event au clic c'est forcément un addEventListener(paramètre 1, paramêtre 2 est une function)
    dataImagesHtml[i].addEventListener("click", function() {
        dataImagesHtml[i].src = tabImagesArticles[i]

    });
}


/*****************************************************************EXERCICE4*****************************************************************/

// let btnLessMore 
// let btnReadMore = document.getElementByAll("#services a")
//  for (btnReadMore.addEventListener("click", function() {

//          btnReadMore.src=innerHTML("Read Less") 
//        });


// CORRRECTION:


//EXEMPLE 1
// let readBaliseA = document.querySelectorAll("#services a")[0];
// readBaliseA.addEventListener("click", function() {
//     event.preventDefault(); //preventdefault annule l'action de la balise ex: balise A annule l'envoie vers la page

//     if (readBaliseA.innerHTML == "Read More »") {
//         readBaliseA.innerHTML = "Read Less &raquo";
//     } else {
//         readBaliseA.innerHTML = "Read More »"
//     }

// })

//EXEMPLE 2
let readBaliseA = document.querySelectorAll("#services a")[0];
const textReadBaliseA = document.querySelectorAll("#services figcaption p")[0].innerHTML;
readBaliseA.addEventListener("click", function() {
    event.preventDefault();
    let paragrapheRead = document.querySelectorAll("#services figcaption p")[0];
    if (readBaliseA.innerHTML == "Read More »") {
        paragrapheRead.innerHTML += "Que la force soit avec";
        readBaliseA.innerHTML = "Read Less &raquo";
    } else {
        paragrapheRead.innerHTML = textReadBaliseA
        readBaliseA.innerHTML = "Read More »"
    }

})


/*****************************************************************EXERCICE 1*****************************************************************/
let year = 2018;
let personne = {
    nom: "Skywalker",
    prenom: "Anakim",
    birthDate: "22 November 1960",
    children: [{
            nom: "Skywalker",
            prenom: "Luke",
            birthDate: "31 July 1987",
            children: []
        },
        {
            nom: "Skywalker",
            prenom: "Leia",
            birthDate: "17 August 1990",
            children: []
        },
    ],

    age: function() {
        // year = new.date(28 - 09 - 2018)
        // age = new.date() - this.birthDate(age)

        // 2018 = new Date();
        // birthDate = new Date(1994, 1, 19);
        // age = 2018.getFullYear() - birhtDate.getFulllYear();


        // CORRECTION:
        let birth = new Date(this.birthDate)
        return new Number((new Date().getTime() - birth.getTime()) / 31536000000).toFixed(0)

    }

}