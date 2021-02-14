//je cibles mes elements //
    var item = document.querySelector("#test");
    var item1 = document.querySelector("#test1");
    var item2 = document.querySelector("#test2");
    var item3 = document.querySelector("#test3");

//j'instencie un objet audio que je mert dans une variable//
    var music = new Audio('son/vagues.mp3');
    var canard = new Audio('son/coin.mp3');

//La variable music utilise la methode loop//
    //music.loop=true;
//j'applique des evenements à mes element ciblés plus haut//
    item.addEventListener("mouseover", playMusic);
    item.addEventListener("mouseout", stopMusic);

    item1.addEventListener("mouseover", playMusic);
    item1.addEventListener("mouseout", stopMusic);

    item2.addEventListener("click", coin);

    item3.addEventListener("click",coin);
   
//fonctions jouant et stopant les differents son//
    function playMusic() {
        music.play();
    }
    function coin() {
        canard.play();
    }

    function stopMusic() {
        music.pause();
    }


