const ICON_MENUAMBURGUESA = document.querySelector('.header-navigation__menu');
const MENUAMBURGUESA = document.querySelector('.navbar-movil__Fondo');
const ICON_CERRAR = document.querySelector('.navbar-movil__close-icon');
const BOTONES = document.querySelector('.navbar__items__link__buttons');

const FEATURES_WEB = document.querySelector('#navbar__items__link-w1');
const COMPANY_WEB = document.querySelector('#navbar__items__link-w2');
const MENUDESPLEGABLE1_WEB = document.querySelector('.navbar__items__link-menuDesplegable1');
const MENUDESPLEGABLE2_WEB = document.querySelector('.navbar__items__link-menuDesplegable2');

const FEATURES_MOVIL = document.querySelector('#navbar-movil__items__link-M1');
const COMPANY_MOVIL = document.querySelector('#navbar-movil__items__link-M2');
const MENUDESPLEGABLE1_MOVIL = document.querySelector('.navbar-movil__items__link-menuDesplegable1');
const MENUDESPLEGABLE2_MOVIL = document.querySelector('.navbar-movil__items__link-menuDesplegable2');

const IMGARROWF= document.querySelector('#imgArrowF');
const IMGARROWC= document.querySelector('#imgArrowC');
const IMGARROWFM= document.querySelector('#imgArrowFM');
const IMGARROWCM= document.querySelector('#imgArrowCM');

MENUAMBURGUESA.style.display = 'none';
MENUDESPLEGABLE1_WEB.style.display = 'none';
MENUDESPLEGABLE2_WEB.style.display = 'none';
MENUDESPLEGABLE1_MOVIL.style.display = 'none';
MENUDESPLEGABLE2_MOVIL.style.display = 'none';



FEATURES_WEB.addEventListener('mouseover',()=>{
    MENUDESPLEGABLE1_WEB.style.display = 'block';
    IMGARROWF.src="imagenes/icon-arrow-up.svg";
   
})

FEATURES_WEB.addEventListener('mouseout',()=>{
    MENUDESPLEGABLE1_WEB.style.display = 'none';
    IMGARROWF.src="imagenes/icon-arrow-down.svg";

})


COMPANY_WEB.addEventListener('mouseover',()=>{
    MENUDESPLEGABLE2_WEB.style.display = 'block';
    IMGARROWC.src="imagenes/icon-arrow-up.svg";
})

COMPANY_WEB.addEventListener('mouseout',()=>{
    MENUDESPLEGABLE2_WEB.style.display = 'none';
    IMGARROWC.src="imagenes/icon-arrow-down.svg";
})


ICON_MENUAMBURGUESA.addEventListener('click',()=>{
    MENUAMBURGUESA.style.display = 'block';
})

ICON_CERRAR.addEventListener('click',()=>{
    MENUAMBURGUESA.style.display = 'none';
})

FEATURES_MOVIL.addEventListener('mouseover',()=>{
    MENUDESPLEGABLE1_MOVIL.style.display = 'block';
    IMGARROWFM.src="imagenes/icon-arrow-up.svg";
})

FEATURES_MOVIL.addEventListener('mouseout',()=>{
    MENUDESPLEGABLE1_MOVIL.style.display = 'none';
    IMGARROWFM.src="imagenes/icon-arrow-down.svg";
})


COMPANY_MOVIL.addEventListener('mouseover',()=>{
    MENUDESPLEGABLE2_MOVIL.style.display = 'block';
    IMGARROWCM.src="imagenes/icon-arrow-up.svg";
})

COMPANY_MOVIL.addEventListener('mouseout',()=>{
    MENUDESPLEGABLE2_MOVIL.style.display = 'none';
    IMGARROWCM.src="imagenes/icon-arrow-down.svg";
})


