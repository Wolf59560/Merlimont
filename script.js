//je cibles mes elements //
    var item = document.querySelector("#test");
    var item1 = document.querySelector("#test1");
    var item2 = document.querySelector("#test2");
    var item3 = document.querySelector("#test3");

//j'instencie un objet audio que je mert dans une variable//
    var music = new Audio('son/vagues.mp3');
    var corneille = new Audio('son/corneille.mp3');

//La variable music utilise la methode loop//
    //music.loop=true;
//j'applique des evenements à mes element ciblés plus haut//
    item.addEventListener("mouseover", playMusic);
    item.addEventListener("mouseout", stopMusic);

    item1.addEventListener("mouseover", playMusic);
    item1.addEventListener("mouseout", stopMusic);

    item2.addEventListener("click", bird);

    item3.addEventListener("click",bird);
   
//fonctions jouant et stopant les differents son//
    function playMusic() {
        music.play();
    }
    function bird() {
        corneille.play();
    }

    function stopMusic() {
        music.pause();
    }
    document.onclick = coord;
    function coord(e){
      console.log("Les coordonees x de ma souris sont  "+ e.clientX + " et "+" Les coordonees y de ma souris sont "+ e.clientY);
    }
     document.onclick = toto;
     function toto(e) {
     var x = e.clientX;
     var y = e.clientY;
     var bob = document.getElementById("bobep");
     if (x<1280    && y>344  ){
      bob.style.display = '';
     }else
     {
      bob.style.display = 'none';
     }
 }
