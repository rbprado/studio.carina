var portuguese = document.getElementById('pt_click'),
    dutch = document.getElementById('nl_click'),
    english = document.getElementById('en_click'),
    pt_txt = document.querySelectorAll('#pt'),
    nl_txt = document.querySelectorAll('#nl'),
    en_txt = document.querySelectorAll('#en'),
    nb_pt = pt_txt.length,
    nb_nl = nl_txt.length,
    nb_en = en_txt.length;

portuguese.addEventListener('click', function() {
    langue(portuguese,dutch,english);
}, false);

dutch.addEventListener('click', function() {
    langue(dutch,english,portuguese);
}, false);

english.addEventListener('click', function() {
    langue(english,portuguese,dutch);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'Pt'){
        afficher(pt_txt, nb_pt);
        cacher(nl_txt, nb_nl);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'Nl'){
        afficher(nl_txt, nb_nl);
        cacher(pt_txt, nb_pt);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'En'){
        afficher(en_txt, nb_en);
        cacher(pt_txt, nb_pt);
        cacher(nl_txt, nb_nl);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(portuguese,dutch,english);
}
init();