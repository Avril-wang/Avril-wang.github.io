var johnAudio=document.getElementById('john');
var mengAudio=document.getElementById('Meng');
var printempsAudio=document.getElementById('printemps');
var mortonAudio=document.getElementById('morton');
var etudeAudio=document.getElementById('etude');
var beatlesAudio=document.getElementById('beatles');


// Check if you can spare this, as these are ids :)
var mengAnimate=document.getElementById('mengAnimate');
var animate3=document.getElementById('wave3Animate');
var animate4=document.getElementById('wave4Animate');
var animate5=document.getElementById('wave5Animate');
var animate6=document.getElementById('wave6Animate');

// let mouseHover = false;
// let pathClicked = -1; // The Index of the currentlz active Page1
var ifIsMove=0;



// [Path1, Path2, Path3, Path4, Path5, Path6].forEach(function(path, pathIndex){
//     path.addEventListener('click', function() {
//         pathClicked = pathIndex;
//     })
// });

// [mengAnimate, animate3, animate4, animate5, animate6].forEach(function(a, index) {
//     a.onend = function() {
//         if (mouseHover) a.beginElement();
//     }
// })

//music
function playJohnMusic(){
    johnAudio.play();
}
function playMengMusic(){
    mengAudio.play();
}
function playPrintempsMusic(){
    printempsAudio.play();
}
function playMortonMusic(){
    mortonAudio.play();
}
function playTudeMusic(){
    etudeAudio.play();
}
function playBeatlesMusic(){
    beatlesAudio.play();
}
//play all the music
function playAlleMusic(){
    johnAudio.play();
    mengAudio.play();
    printempsAudio.play();
    mortonAudio.play();
    etudeAudio.play();
    beatlesAudio.volume=0.4;
    beatlesAudio.play();
}
//pause all the music
function pauseAlleMusic(){
    johnAudio.pause();
    mengAudio.pause();
    printempsAudio.pause();
    mortonAudio.pause();
    etudeAudio.pause();
    beatlesAudio.pause();
}

//image hide
function imagePrintempsHide(){
    document.getElementById("imagePrintemps").style.animation="imagePrintempsBack 3s forwards";
}

function imageGuqinHide(){
    document.getElementById("imageGuqin").style.animation="imageGuqinBack 3s forwards";
}

function imageMortonHide(){
    document.getElementById("imageMorton").style.animation="imageMortonBack 3s forwards";
}

function imagePierreHide(){
    document.getElementById("imagePierre").style.animation="imagePierreBack 3s forwards";
}

function imageBeatlesHide(){
    document.getElementById("imageBeatles").style.animation="imageBeatlesBack 3s forwards";
}

function imageJohnHide(){
    document.getElementById("imageJohn").style.animation="imageJohnBack 3s forwards";
}
//all the img show
function imageAlleShow(){
    document.getElementById("imagePierre").style.display='block';
    document.getElementById("imagePierre").style.animation='imagePierreMove 3s';
    document.getElementById("imageMorton").style.display='block';
    document.getElementById("imageMorton").style.animation="imageMortonMove 3s";
    document.getElementById("imageGuqin").style.display='block';
    document.getElementById("imageGuqin").style.animation='imageGuqinMove 3s';
    document.getElementById("imagePrintemps").style.display='block';
    document.getElementById("imagePrintemps").style.animation="imagePrintempsMove 3s";
    document.getElementById("imageBeatles").style.display='block';
    document.getElementById("imageBeatles").style.animation="imageBeatlesMove 3s";
    document.getElementById("imageJohn").style.display='block';
    document.getElementById("imageJohn").style.animation="imageJohnMove 3s";
    return ifIsMove=1;

}

function imageAlleRemain(){

    document.getElementById("imagePierre").style.display='block';
    document.getElementById("imageMorton").style.display='block';

    document.getElementById("imageGuqin").style.display='block';

    document.getElementById("imagePrintemps").style.display='block';

    document.getElementById("imageBeatles").style.display='block';

    document.getElementById("imageJohn").style.display='block';
}

//hover svg play all the music + all the img show
Page1.onmouseover=function(){

//   if (pathClicked != -1)
//       mouseHover = true;

    imageAlleShow();

    playAlleMusic();
    mengAnimate.beginElement();
    animate3.beginElement();
    animate4.beginElement();
    animate5.beginElement();
    animate6.beginElement();

}

//moveout svg pause all the music + all the img show
Page1.onmouseout=function(){
    // mouseHover = false;
    pauseAlleMusic();
    imagePrintempsHide();
    imageGuqinHide();
    imageMortonHide();
    imagePierreHide();
    imageBeatlesHide();
    imageJohnHide();
    mengAnimate.endElement();
    animate3.endElement();
    animate4.endElement();
    animate5.endElement();
    animate6.endElement();
}

//click John only play the 4'33................wave1
Path1.onclick = function() {
    // pause all music and elements
    pauseAlleMusic();
    imageAlleShow();

    // Start audio
    johnAudio.currentTime = 0;
    playJohnMusic();

    //pause the animate
    mengAnimate.endElement();
    animate3.endElement();
    animate4.endElement();
    animate5.endElement();
    animate6.endElement();

    // Show related images
    imageMortonHide();
    imagePierreHide();
    imagePrintempsHide();
    imageBeatlesHide();
    imageGuqinHide();

}

//click Meng only play Meng music.............wave2
Path2.onclick=function(){
    pauseAlleMusic();
    if (mengAudio.currentTime < 19.3) {
        mengAudio.currentTime = 19.3;
    }
    playMengMusic();

    //hide the rest img
    imageMortonHide();
    imagePierreHide();
    imagePrintempsHide();
    imageBeatlesHide();
    imageJohnHide();

 //   mengAnimate.beginElement();
    //end the rest animate
    animate3.endElement();
    animate4.endElement();
    animate5.endElement();
    animate6.endElement();
}


Path6.onclick=function(){
    pauseAlleMusic();
    printempsAudio.currentTime=10.0;
    playPrintempsMusic();
    imageGuqinHide();
    imageMortonHide();
    imagePierreHide();
    imageBeatlesHide();
    imageJohnHide();

    // animate6.beginElement();
    mengAnimate.endElement();
    animate4.endElement();
    animate5.endElement();
    animate3.endElement();
}

Path4.onclick=function(){
    pauseAlleMusic();
    mortonAudio.currentTime=0;
    playMortonMusic();
    imageGuqinHide();
    imagePrintempsHide();
    imagePierreHide();
    imageBeatlesHide();
    imageJohnHide();

   // animate4.beginElement();

    mengAnimate.endElement();
    animate3.endElement();
    animate5.endElement();
    animate6.endElement();
}

Path5.onclick=function(){
    pauseAlleMusic();
    etudeAudio.currentTime=0;
    playTudeMusic();
    imageGuqinHide();
    imageMortonHide();
    imageBeatlesHide();
    imagePrintempsHide();
    imageJohnHide();

  //  animate5.beginElement();

    mengAnimate.endElement();
    animate4.endElement();
    animate3.endElement();
    animate6.endElement();
}

Path3.onclick=function(){
    pauseAlleMusic();

    beatlesAudio.currentTime=0;
 //   if (beatlesAudio.paused) beatlesAudio.play();
    beatlesAudio.volume=0.4;
    playBeatlesMusic();
    imageGuqinHide();
    imageMortonHide();
    imagePierreHide();
    imagePrintempsHide();
    imageJohnHide();

   // animate3.beginElement();

    mengAnimate.endElement();
    animate4.endElement();
    animate5.endElement();
    animate6.endElement();
}
