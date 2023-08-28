
// creation des variables necessaire pour les animation
const button_nav_burger = document.getElementById('menu-burger');
var burger_click_compteur = 0;
let nav_menu = document.getElementById('right_nav');
let sep = document.getElementById('separator-nav');


// addEventListener qui gere quelle aniamtion appeler en fonction de si compteur est paire ou non
function click_burger(compteur) {
    if(compteur%2 == 0) {
        nav_close(nav_menu, button_nav_burger, sep);
    } else {
        animation_nav('right_nav', 'menu-burger', 'separator-nav')
    }
}
button_nav_burger.addEventListener('click', function() {
    burger_click_compteur++;
    click_burger(burger_click_compteur);
});
// creation des fonctions d'animation
function animation_nav(id_nav, id_button, id_separator) {
    let nav = document.getElementById(id_nav);
    let sep = document.getElementById(id_separator);
    // anim le nav
    nav.style.opacity = '1';
    nav.style.transform = 'translateY(0px)'
    nav.style.transition = '0.5s ease-in-out';
    // anim le bouton
    rotate_animation_button(id_button);
    // anim le separateur
    sep.style.transform = 'translateX(0%)';
    sep.style.transition = '0.5s ease-in-out';
}
function rotate_animation_button(button_id) {
    let button = document.getElementById(button_id);
    button.style.animation = 'button-anim 0.3s ease-in-out';
    button.style.animationFillMode = 'forwards';
}
function nav_close(nav, burger, sep) {
    // anime de nav
    nav.style.opacity = '0%';
    nav.style.transform = 'translateY(-120px)'
    // anim le bouton
    nav.style.transition = '0.5s ease-in-out';
    burger.style.animation = 'button-anim_reverse 0.3s ease-in-out';
    //anim separateur
    sep.style.transform = 'translateX(-110%)';
    sep.style.transition = '0.5s ease-in-out';
}
//fin de la creation des functions d'animation





// ********************************************************************************************
//debut du code des onglets en javascript
let span_onglet = document.getElementById('text-onglet');
let onglet1_button = document.getElementById('button1-onglet');
let onglet2_button = document.getElementById('button2-onglet');
let span_content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida. Mi bibendum neque egestas congue. Eget sit amet tellus cras adipiscing enim eu turpis.';
span_onglet.textContent = span_content;

// Fonction qui gere le style des onglets (Si telle onglet est selectionner)
function onglet_style(text_span) {
    if(text_span == 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida. Mi bibendum neque egestas congue. Eget sit amet tellus cras adipiscing enim eu turpis.') {
        onglet1_button.style.backdropFilter = 'blur(5px)';
        onglet1_button.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        onglet1_button.style.borderRadius = '10px 0 0 0';
        onglet2_button.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        onglet2_button.style.backdropFilter = 'blur(0px)';
    } else {
        onglet2_button.style.backdropFilter = 'blur(5px)';
        onglet2_button.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        onglet1_button.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        onglet1_button.style.backdropFilter = 'blur(0px)'
    }
}
// Code qui gere la position des onglets
function front_end_onglet() {
    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida. Mi bibendum neque egestas congue. Eget sit amet tellus cras adipiscing enim eu turpis.';
    return text;
}
function back_end_onglet() {
    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Tempus iaculis urna id volutpat lacus laoreet non curabitur.';
    return  text;
}
// Set les addEventlistenners et appeller la fonctions de style des onglets
onglet_style(span_content);

onglet1_button.addEventListener('click', function() {
    span_content = front_end_onglet();
    span_onglet.textContent = span_content;
    onglet_style(span_content)
})
onglet2_button.addEventListener('click', function() {
    span_content = back_end_onglet();
    span_onglet.textContent = span_content;
    onglet_style(span_content)
})
//***********************************************************************************