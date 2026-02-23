/*Code JS agissant sur le fichier html du formulaire de contact

1- Sélection de mon titre h1 par un procédé de déclaration de constante dans JS puis modification de cette dernière
1-1 Déclaration de mon h1 en tant que contante nommée "CTA" puis changement de son contenu (texte)*/
// const CTA=document.querySelector ('h1');
// CTA.textContent = "Contactez-nous !";

// CTA.style.color = '#e74c3c'

//Gestion de l'interaction sur le formulaire de contact
/*Sélection du boutton d'envoi de formulaire (toujours par la méthode de déclaration de constante)
Il convient de noter que le [] est utilisé en JS pour indiquer un attribut précis en ce qui concerne une balise
Sans les [] autour de l'attribut type="submit"*/
const BTNSEND=document.querySelector ('input[type="submit"]');
const MYFORM=document.querySelector ('form') ;
const NOM = document.querySelector('#nom');
const EMAIL = document.querySelector('#email');
const ERRORZONE1 = document.querySelector('#erreur-nom');
const ERRORZONE2 = document.querySelector('#erreur-email');
const SUCCESSZONE = document.querySelector('#message-succes');
    
BTNSEND.addEventListener ('click', function(event) {
    event.preventDefault();
    ERRORZONE1.textContent = "";
    ERRORZONE2.textContent = "";
    SUCCESSZONE.textContent = "";

    let formulaireValide = true;

    if (NOM.value.trim() === "") { 
        ERRORZONE1.textContent = "Veuillez renseigner votre nom.";
        NOM.style.borderColor = "#e74c3c"; 
        formulaireValide = false;
    } else {
        NOM.style.borderColor = ""; 
    }

    if (EMAIL.value.trim() === "", !EMAIL.value.includes('@')) { 
        ERRORZONE2.textContent = "Veuillez renseigner votre adresse e-mail.";
        EMAIL.style.borderColor = "#e74c3c"; 
        formulaireValide = false;
    } else {
        EMAIL.style.borderColor = ""; 
    }


    if (formulaireValide == true ) {
        SUCCESSZONE.textContent = "Succès ! Votre message a été envoyé !";
        MYFORM.reset(); 
    }
})

//Mises en formes (centrer le contenu)
// MYFORM.style.position = 'absolute';
// MYFORM.style.top = '50%';
// MYFORM.style.left = '50%';
// MYFORM.style.transform = 'translate(-50%, -50%)';

// CTA.style.position = 'absolute';
// CTA.style.top = '20%';
// CTA.style.left = '50%';
// CTA.style.transform = 'translate(-50%, -50%)';


