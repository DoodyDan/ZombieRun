var nInterval;
function moveTitleZombieRepeat() {
  nInterval = setInterval(moveTitleZombie, 10);
}

function moveTitleZombie() {
  var zombieGIF = document.getElementById("zombieGIF");
  zombieGIF.style.left = "100%";
  zombieGIF.style.transitionDuration = "20s";
  zombieGIF.style.transitionTimingFunction = "linear";
}
document.getElementById("zombieGIF").addEventListener("transitionend", resetTitleZombie);
function resetTitleZombie() {
  this.style.left = "-170px";
  this.style.transitionDuration = "0s";
}

function blackSquareTransition() {
  var topBS = document.getElementById("topBlackSquare");
  var bottomBS = document.getElementById("bottomBlackSquare");
  topBS.style.height = "500px";
  topBS.style.transitionDuration = "1s";
  bottomBS.style.height = "500px";
  bottomBS.style.transitionDuration = "1s";
}

document.getElementById("bottomBlackSquare").addEventListener("transitionend", resetBlackBoxes);
function resetBlackBoxes() {
  this.style.height = "0px";
  document.getElementById("topBlackSquare").style.height = "0px";
}

function loadDescriptionPage() {
  setTimeout(changeContentForDescriptionPage, 1000);
}
  function changeContentForDescriptionPage() {
  var content = document.getElementById("pageContent");
  content.innerHTML = '<div id="presentContainer"><h1 id="doodysArcade">Doody&apos;s Arcade</h1></div><div id="descriptionContainer"><h2 id="mission"><span><u>Mission</u>:</span><br><br>You wake up, dreary-eyed in a dark pit. There is no obvious way to escape. All you can see is that an acidic, purple liquid has been dripping from the darkness above and pooling on the ground in front of you. You hear a groan from the other side of the pit. Two undead bodies appear. They are hungry.<br><br>Survive for as long as you can.</h2><h2 id="controls"><span><u>Controls</u>:</span><br><br>Use the arrow keys on your keyboard to move about.</h2></div><div id="buttonHolder"><div onclick="blackSquareTransition(), loadLandingPage()" id="nextButton"><h3>Back</h3></div><div onclick="blackSquareTransition(), loadCharacterPage()" id="nextButton"><h3>Next</h3></div></div>';
}

function loadLandingPage() {
  setTimeout(changeContentForLandingPage, 1000);
}
  function changeContentForLandingPage() {
  var content = document.getElementById("pageContent");
  content.innerHTML = '<div id="presentContainer"><h1 id="doodysArcade">Doody&apos;s Arcade</h1></div><h2 id="presents">Presents</h2><div id="titleHolder"><h1 id="titleText">Zombie<br>Run</h1><img id="arcadeMachineGIF" src="https://piskel-imgstore-b.appspot.com/img/f8037f6b-fa74-11ea-9292-bb9be53876e6.gif"><div onclick="blackSquareTransition(), loadDescriptionPage()" id="startButton"><h3>Start</h3></div></div><img id="zombieGIF" src="https://piskel-imgstore-b.appspot.com/img/da659507-f9a5-11ea-a140-4b0bc200bcb9.gif">';
}

function loadCharacterPage() {
  setTimeout(changeContentForCharacterPage, 1000);
}
  function changeContentForCharacterPage() {
  var content = document.getElementById("pageContent");
  content.innerHTML = '<div id="presentContainer"><h1 id="doodysArcade">Doody&apos;s Arcade</h1></div><div id="characterContainer"><h2 id="chooseCharacter"><u>Choose Your Character</u>:</h2><div id="player1Container"><img id="player1Img" src="P1down.png"><span onclick="blackSquareTransition(), loadP1GamePage()">Player 1</span></div><div id="player2Container"><img id="player2Img" src="P2down.png"><span onclick="blackSquareTransition(), loadP2GamePage()">Player 2</span></div></div><div id="buttonHolder"><div onclick="blackSquareTransition(), loadDescriptionPage()" id="nextButton"><h3>Back</h3></div></div>';
  document.getElementById("presentContainer").style.marginBottom = "50px";
}

function loadP1GamePage() {
  setTimeout(changeContentForP1GamePage, 1000);
}
var playerselected = 1;
function changeContentForP1GamePage() {
  var content = document.getElementById("pageContent");
  content.innerHTML = '<div id="presentContainer"><h1 id="doodysArcade">Doody&apos;s Arcade</h1></div><div id="scoreContainer" class="scoreGrid"><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixeldark"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixeldark"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixeldark"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><p id="scoreName">Score:</p><p id="scoreCounter">0</p></div><div id="myContainer" class="grid-container"><div id="gameBorder"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="mySprite"></div><div id="mySpritePerson"></div><div id="myZombie1"></div><div id="myZombiePerson1"></div><div id="myZombie2"></div><div id="myZombiePerson2"></div><div id="gameOverContainer"><span id="gameOver">Game Over</span></div><div id="restartContainer"><span id=clickToRestart onclick="window.location.reload(true)">Click to Restart</span></div></div>';
  const spritePerson = document.getElementById('mySpritePerson');
  spritePerson.style.backgroundImage = "url(P1down.png)";
  const zombiePerson1 = document.getElementById('myZombiePerson1');
  zombiePerson1.style.backgroundImage = "url(Zleft.png)";
  zombiePerson1.style.top = "350px";
  zombiePerson1.style.left = "350px";
  const zombiePerson2 = document.getElementById('myZombiePerson2');
  zombiePerson2.style.backgroundImage = "url(Zleft.png)";
  zombiePerson2.style.top = "0px";
  zombiePerson2.style.left = "350px";
}

function loadP2GamePage() {
  setTimeout(changeContentForP2GamePage, 1000);
}
function changeContentForP2GamePage() {
  playerselected++;
  var content = document.getElementById("pageContent");
  content.innerHTML = '<div id="presentContainer"><h1 id="doodysArcade">Doody&apos;s Arcade</h1></div><div id="scoreContainer" class="scoreGrid"><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixeldark"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixeldark"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixelmed"></div><div id="scorepixeldark"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><div id="scorepixeldark"></div><div id="scorepixeldark"></div><div id="scorepixelmed"></div><div id="scorepixellight"></div><p id="scoreName">Score:</p><p id="scoreCounter">0</p></div><div id="myContainer" class="grid-container"><div id="gameBorder"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="acid" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g3" class="grid-item"></div><div id="g1" class="grid-item"></div><div id="g2" class="grid-item"></div><div id="mySprite"></div><div id="mySpritePerson"></div><div id="myZombie1"></div><div id="myZombiePerson1"></div><div id="myZombie2"></div><div id="myZombiePerson2"></div><div id="gameOverContainer"><span id="gameOver">Game Over</span></div><div id="restartContainer"><span id=clickToRestart onclick="window.location.reload(true)">Click to Restart</span></div></div>';
  const spritePerson = document.getElementById('mySpritePerson');
  spritePerson.style.backgroundImage = "url(P2down.png)";
  const zombiePerson1 = document.getElementById('myZombiePerson1');
  zombiePerson1.style.backgroundImage = "url(Zleft.png)";
  zombiePerson1.style.top = "350px";
  zombiePerson1.style.left = "350px";
  const zombiePerson2 = document.getElementById('myZombiePerson2');
  zombiePerson2.style.backgroundImage = "url(Zleft.png)";
  zombiePerson2.style.top = "0px";
  zombiePerson2.style.left = "350px";
}





















var gameOverChecker = 0;
var counter = 0;

// Function to keep the score card in line //
function alterScoreCard(){
   var scoreplacement = document.getElementById('scoreCounter');
  if (counter == 10) {
     scoreplacement.style.left = `${scoreplacement.offsetLeft - 10}px`;
  } else if (counter == 100) {
      scoreplacement.style.left = `${scoreplacement.offsetLeft - 10}px`;
    }
}


//FUNCTIONS FOR MOVEMENT//
function moveLeft() {
  //Create identifiers that can't be reassigned
  const sprite = document.getElementById('mySprite');
  const spritePerson = document.getElementById('mySpritePerson');
  //Loop to set contraints at edge of grid
  if (sprite.style.left == "0px") {
    return;
  } else {
    //Reassign the value on the x-axis
    sprite.style.left = `${sprite.offsetLeft - 50}px`;
    spritePerson.style.left = `${spritePerson.offsetLeft - 50}px`;
    if (playerselected == 1) {
      spritePerson.style.backgroundImage = "url(P1left.png)";
    } else {
      spritePerson.style.backgroundImage = "url(P2left.png)";
    }
    }
  }

function moveRight() {
  const sprite = document.getElementById('mySprite');
  const spritePerson = document.getElementById('mySpritePerson');
  if (sprite.style.left == "350px") {
    return;
  } else {
  sprite.style.left = `${sprite.offsetLeft + 50}px`;
  spritePerson.style.left = `${spritePerson.offsetLeft + 50}px`;
      if (playerselected == 1) {
      spritePerson.style.backgroundImage = "url(P1right.png)";
    } else {
      spritePerson.style.backgroundImage = "url(P2right.png)";
    }
  }
}

function moveUp() {
  const sprite = document.getElementById('mySprite');
  const spritePerson = document.getElementById('mySpritePerson');
  if (sprite.style.top == "0px") {
    return;
  } else {
  sprite.style.top = `${sprite.offsetTop - 50}px`;
  spritePerson.style.top = `${spritePerson.offsetTop - 50}px`;
      if (playerselected == 1) {
      spritePerson.style.backgroundImage = "url(P1up.png)";
    } else {
      spritePerson.style.backgroundImage = "url(P2up.png)";
    }
  }
}

function moveDown() {
  const sprite = document.getElementById('mySprite');
  const spritePerson = document.getElementById('mySpritePerson');
  if (sprite.style.top == "350px") {
    return;
  } else {
  sprite.style.top = `${sprite.offsetTop + 50}px`;
  spritePerson.style.top = `${spritePerson.offsetTop + 50}px`;
      if (playerselected == 1) {
      spritePerson.style.backgroundImage = "url(P1down.png)";
    } else {
      spritePerson.style.backgroundImage = "url(P2down.png)";
    }
  }
}


// FUNCTION TO MOVE ZOMBIE EVERY 2 TURNS AND INCREASE SCORE COUNTER //
function zombieMove() {
  counter++;
 alterScoreCard()
  //Add the counter value to the scoreContainer in the html
  document.getElementById("scoreCounter").innerHTML = counter;
   //Only run ZombieMovement() if the counter is an even number
   if (counter % 2 == 0) {
       zombie1Movement(), zombie2Movement(), checkStacking();
    } else {
      return;
    }
}

// FUNCTION FOR ACTUAL ZOMBIE MOVEMENT FOR THE FIRST ZOMBIE//
function zombie1Movement() {
   //Create an element object, with the sprite's properties
  const sprite = document.getElementById('mySprite');
   //Returns an object containing the values of all CSS properties of an element
  let compSpriteStyles = window.getComputedStyle(sprite);
   //Returns the PropertyValue of 'top' and 'left' as Strings
  var spriteTopStr = compSpriteStyles.getPropertyValue('top');
  var spriteLeftStr = compSpriteStyles.getPropertyValue('left');
  //Convert Strings to Floating Point Numbers
  var spriteTop = parseFloat(spriteTopStr, 10);
  var spriteLeft = parseFloat(spriteLeftStr, 10);
   //Do the same for the zombie
  const zombie1 = document.getElementById('myZombie1');
  let compZombie1Styles = window.getComputedStyle(zombie1);
  var zombie1TopStr = compZombie1Styles.getPropertyValue('top');
  var zombie1LeftStr = compZombie1Styles.getPropertyValue('left');
  var zombie1Top = parseFloat(zombie1TopStr, 10);
  var zombie1Left = parseFloat(zombie1LeftStr, 10);
  const zombiePerson1 = document.getElementById('myZombiePerson1');
    //If Sprite is below and to the right, move down and to the right 50px
    if (spriteTop > zombie1Top && spriteLeft > zombie1Left) {
    zombie1.style.top = `${zombie1.offsetTop + 50}px`; //Down
    zombie1.style.left = `${zombie1.offsetLeft + 50}px`; //Right
    zombiePerson1.style.top = `${zombiePerson1.offsetTop + 50}px`; //Down
    zombiePerson1.style.left = `${zombiePerson1.offsetLeft + 50}px`; //Right
    zombiePerson1.style.backgroundImage = "url(Zdownright.png)";
    //If Sprite is below and to the left, move down and to the left 50px
    } else if (spriteTop > zombie1Top && spriteLeft < zombie1Left) {
    zombie1.style.top = `${zombie1.offsetTop + 50}px`; //Down
    zombie1.style.left = `${zombie1.offsetLeft - 50}px`; //Left
    zombiePerson1.style.top = `${zombiePerson1.offsetTop + 50}px`; //Down
    zombiePerson1.style.left = `${zombiePerson1.offsetLeft - 50}px`; //Left
    zombiePerson1.style.backgroundImage = "url(Zdownleft.png)";
    //If Sprite is above and to the right, move up and to the right 50px
    } else if (spriteTop < zombie1Top && spriteLeft > zombie1Left) {
    zombie1.style.top = `${zombie1.offsetTop -50}px`; //Up
    zombie1.style.left = `${zombie1.offsetLeft + 50}px`; //Right
    zombiePerson1.style.top = `${zombiePerson1.offsetTop -50}px`; //Up
    zombiePerson1.style.left = `${zombiePerson1.offsetLeft + 50}px`; //Right
    zombiePerson1.style.backgroundImage = "url(Zupright.png)";
    //If Sprite is above and to the left, move up and to the left 50px
    } else if (spriteTop < zombie1Top && spriteLeft < zombie1Left) {
    zombie1.style.top = `${zombie1.offsetTop - 50}px`; //Up
    zombie1.style.left = `${zombie1.offsetLeft - 50}px`; //Left
    zombiePerson1.style.top = `${zombiePerson1.offsetTop - 50}px`; //Up
    zombiePerson1.style.left = `${zombiePerson1.offsetLeft - 50}px`; //Left
    zombiePerson1.style.backgroundImage = "url(Zupleft.png)";
    //If on same line but sprite is to the left, move to the left 50px
    } else if (spriteTop == zombie1Top && spriteLeft < zombie1Left) {
    zombie1.style.left = `${zombie1.offsetLeft - 50}px`; //Left
    zombiePerson1.style.left = `${zombiePerson1.offsetLeft - 50}px`; //Left
    zombiePerson1.style.backgroundImage = "url(Zleft.png)";
    //If on same line but sprite is to the right, move to the right 50px
    } else if (spriteTop == zombie1Top && spriteLeft > zombie1Left) {
    zombie1.style.left = `${zombie1.offsetLeft + 50}px`; //Right
    zombiePerson1.style.left = `${zombiePerson1.offsetLeft + 50}px`; //Right
    zombiePerson1.style.backgroundImage = "url(Zright.png)";
    //If on same column but sprite is above, move up 50px
    } else if (spriteTop < zombie1Top && spriteLeft == zombie1Left) {
    zombie1.style.top = `${zombie1.offsetTop - 50}px`; //Up
    zombiePerson1.style.top = `${zombiePerson1.offsetTop - 50}px`; //Up
    zombiePerson1.style.backgroundImage = "url(Zup.png)";
    //If on same column but sprite is below, move down 50px
    } else if (spriteTop > zombie1Top && spriteLeft == zombie1Left) {
    zombie1.style.top = `${zombie1.offsetTop + 50}px`; //Down
    zombiePerson1.style.top = `${zombiePerson1.offsetTop + 50}px`; //Down
    zombiePerson1.style.backgroundImage = "url(Zdown.png)";
    } 
}

function zombie2Movement() {
   //Create an element object, with the sprite's properties
  const sprite = document.getElementById('mySprite');
   //Returns an object containing the values of all CSS properties of an element
  let compSpriteStyles = window.getComputedStyle(sprite);
   //Returns the PropertyValue of 'top' and 'left' as Strings
  var spriteTopStr = compSpriteStyles.getPropertyValue('top');
  var spriteLeftStr = compSpriteStyles.getPropertyValue('left');
  //Convert Strings to Floating Point Numbers
  var spriteTop = parseFloat(spriteTopStr, 10);
  var spriteLeft = parseFloat(spriteLeftStr, 10);
   //Do the same for the zombie
  const zombie1 = document.getElementById('myZombie1');
  let compZombie1Styles = window.getComputedStyle(zombie1);
  var zombie1TopStr = compZombie1Styles.getPropertyValue('top');
  var zombie1LeftStr = compZombie1Styles.getPropertyValue('left');
  var zombie1Top = parseFloat(zombie1TopStr, 10);
  var zombie1Left = parseFloat(zombie1LeftStr, 10);
  const zombie2 = document.getElementById('myZombie2');
  let compZombie2Styles = window.getComputedStyle(zombie2);
  var zombie2TopStr = compZombie2Styles.getPropertyValue('top');
  var zombie2LeftStr = compZombie2Styles.getPropertyValue('left');
  var zombie2Top = parseFloat(zombie2TopStr, 10);
  var zombie2Left = parseFloat(zombie2LeftStr, 10);
  const zombiePerson2 = document.getElementById('myZombiePerson2');
    //If Sprite is below and to the right, move down and to the right 50px
    if (spriteTop > zombie2Top && spriteLeft > zombie2Left) {
    zombie2.style.top = `${zombie2.offsetTop + 50}px`; //Down
    zombie2.style.left = `${zombie2.offsetLeft + 50}px`; //Right
    zombiePerson2.style.top = `${zombiePerson2.offsetTop + 50}px`; //Down
    zombiePerson2.style.left = `${zombiePerson2.offsetLeft + 50}px`; //Right
    zombiePerson2.style.backgroundImage = "url(Zdownright.png)";
    //If Sprite is below and to the left, move down and to the left 50px
    } else if (spriteTop > zombie2Top && spriteLeft < zombie2Left) {
    zombie2.style.top = `${zombie2.offsetTop + 50}px`; //Down
    zombie2.style.left = `${zombie2.offsetLeft - 50}px`; //Left
    zombiePerson2.style.top = `${zombiePerson2.offsetTop + 50}px`; //Down
    zombiePerson2.style.left = `${zombiePerson2.offsetLeft - 50}px`; //Left
    zombiePerson2.style.backgroundImage = "url(Zdownleft.png)";
    //If Sprite is above and to the right, move up and to the right 50px
    } else if (spriteTop < zombie2Top && spriteLeft > zombie2Left) {
    zombie2.style.top = `${zombie2.offsetTop -50}px`; //Up
    zombie2.style.left = `${zombie2.offsetLeft + 50}px`; //Right
    zombiePerson2.style.top = `${zombiePerson2.offsetTop -50}px`; //Up
    zombiePerson2.style.left = `${zombiePerson2.offsetLeft + 50}px`; //Right
    zombiePerson2.style.backgroundImage = "url(Zupright.png)";
    //If Sprite is above and to the left, move up and to the left 50px
    } else if (spriteTop < zombie2Top && spriteLeft < zombie2Left) {
    zombie2.style.top = `${zombie2.offsetTop - 50}px`; //Up
    zombie2.style.left = `${zombie2.offsetLeft - 50}px`; //Left
    zombiePerson2.style.top = `${zombiePerson2.offsetTop - 50}px`; //Up
    zombiePerson2.style.left = `${zombiePerson2.offsetLeft - 50}px`; //Left
    zombiePerson2.style.backgroundImage = "url(Zupleft.png)";
    //If on same line but sprite is to the left, move to the left 50px
    } else if (spriteTop == zombie2Top && spriteLeft < zombie2Left) {
    zombie2.style.left = `${zombie2.offsetLeft - 50}px`; //Left
    zombiePerson2.style.left = `${zombiePerson2.offsetLeft - 50}px`; //Left
    zombiePerson2.style.backgroundImage = "url(Zleft.png)";
    //If on same line but sprite is to the right, move to the right 50px
    } else if (spriteTop == zombie2Top && spriteLeft > zombie2Left) {
    zombie2.style.left = `${zombie2.offsetLeft + 50}px`; //Right
    zombiePerson2.style.left = `${zombiePerson2.offsetLeft + 50}px`; //Right
    zombiePerson2.style.backgroundImage = "url(Zright.png)";
    //If on same column but sprite is above, move up 50px
    } else if (spriteTop < zombie2Top && spriteLeft == zombie2Left) {
    zombie2.style.top = `${zombie2.offsetTop - 50}px`; //Up
    zombiePerson2.style.top = `${zombiePerson2.offsetTop - 50}px`; //Up
    zombiePerson2.style.backgroundImage = "url(Zup.png)";
    //If on same column but sprite is below, move down 50px
    } else if (spriteTop > zombie2Top && spriteLeft == zombie2Left) {
    zombie2.style.top = `${zombie2.offsetTop + 50}px`; //Down
    zombiePerson2.style.top = `${zombiePerson2.offsetTop + 50}px`; //Down
    zombiePerson2.style.backgroundImage = "url(Zdown.png)";
  }
}

function checkGameOver() {
    //Get the Sprite and Zombie's top and left values
  const sprite = document.getElementById('mySprite');
  let compSpriteStyles = window.getComputedStyle(sprite);
  var spriteTopStr = compSpriteStyles.getPropertyValue('top');
  var spriteLeftStr = compSpriteStyles.getPropertyValue('left');
  var spriteTop = parseFloat(spriteTopStr, 10);
  var spriteLeft = parseFloat(spriteLeftStr, 10);
  const zombie1 = document.getElementById('myZombie1');
  let compZombie1Styles = window.getComputedStyle(zombie1);
  var zombie1TopStr = compZombie1Styles.getPropertyValue('top');
  var zombie1LeftStr = compZombie1Styles.getPropertyValue('left');
  var zombie1Top = parseFloat(zombie1TopStr, 10);
  var zombie1Left = parseFloat(zombie1LeftStr, 10);
  const zombie2 = document.getElementById('myZombie2');
  let compZombie2Styles = window.getComputedStyle(zombie2);
  var zombie2TopStr = compZombie2Styles.getPropertyValue('top');
  var zombie2LeftStr = compZombie2Styles.getPropertyValue('left');
  var zombie2Top = parseFloat(zombie2TopStr, 10);
  var zombie2Left = parseFloat(zombie2LeftStr, 10);
   //If they're in the same place... GAME OVER
  if ((spriteTop == zombie1Top && spriteLeft == zombie1Left)||(spriteTop == zombie2Top && spriteLeft == zombie2Left) || (spriteTop == 100 && spriteLeft == 50) || (spriteTop == 250 && spriteLeft == 250) || (spriteTop == 0 && spriteLeft == 300) || (spriteTop == 350 && spriteLeft == 150) || (spriteTop == 150 && spriteLeft == 50) || (spriteTop == 50 && spriteLeft == 200) || (spriteTop == 250 && spriteLeft == 300)){
       gameOverChecker++
       document.body.style.background = "none";
       document.body.style.backgroundColor = "red";
       document.body.style.transitionDuration = "3s";
       document.body.style.transitionTimingFunction = "ease-out";
       document.getElementById("presentContainer").style.boxShadow = "0px 0px 0px 5px black";
       document.getElementById("presentContainer").style.border = "5px solid green";
       document.getElementById("presentContainer").style.background = "black";
       document.getElementById("presentContainer").style.transitionDuration = "3s";
       document.getElementById("doodysArcade").style.color = "green";
       document.getElementById("doodysArcade").style.transitionDuration = "3s";
       document.getElementById("scoreContainer").style.border = "5px solid white";
       document.getElementById("scoreContainer").style.backgroundColor = "black";
       document.getElementById("scoreName").style.visibility = "hidden";
       document.getElementById("scoreCounter").style.top = "0px";
       document.getElementById("scoreCounter").style.fontSize = "20px";
       document.getElementById("scoreCounter").style.color = "white";
       document.getElementById("scoreCounter").style.paddingTop = "15px";
       document.getElementById("gameOverContainer").style.opacity = "1";
       document.getElementById("gameOverContainer").style.transitionDuration = "3s";
       document.getElementById("restartContainer").style.visibility = "visible";
       document.getElementById("restartContainer").style.opacity = "1";
       document.getElementById("restartContainer").style.transitionDuration = "3s";
       var i;
       for (i = 0; i < 100; i++) {
         var p1 = document.getElementById("scorepixellight");
         var p2 = document.getElementById("scorepixelmed");
         var p3 = document.getElementById("scorepixeldark");
         p3.remove();
         p2.remove();
         p1.remove();
       }
       if (counter < 10) {
           document.getElementById("scoreCounter").style.left = "70px";
        } else {
          document.getElementById("scoreCounter").style.left = "50px";
        }
  } else {
      return;
    }
}


// FUNCTION FOR ARROW KEY USE //
function checkKey(evt) {
    if (evt.keyCode == '37' && gameOverChecker == 0) {
      evt.preventDefault(); //Prevents page scroll
      moveLeft();
      zombieMove();
      checkGameOver();
    }
    else if (evt.keyCode == '38' && gameOverChecker == 0) {
      evt.preventDefault();
      moveUp();
      zombieMove();
      checkGameOver();
    }
    else if (evt.keyCode == '39' && gameOverChecker == 0) {
      evt.preventDefault();
      moveRight();
      zombieMove();
      checkGameOver();
    }
    else if (evt.keyCode == '40' && gameOverChecker == 0) {
      evt.preventDefault();
      moveDown();
      zombieMove();
      checkGameOver();
    }
    else {
    evt.preventDefault(); //Prevents page scroll
    }
}

// STOP STACKING OF ZOMBIES //
function checkStacking () {
  const zombie1 = document.getElementById('myZombie1');
  const zombiePerson1 = document.getElementById('myZombiePerson1');
  let compZombie1Styles = window.getComputedStyle(zombie1);
  var zombie1TopStr = compZombie1Styles.getPropertyValue('top');
  var zombie1LeftStr = compZombie1Styles.getPropertyValue('left');
  var zombie1Top = parseFloat(zombie1TopStr, 10);
  var zombie1Left = parseFloat(zombie1LeftStr, 10);
  const zombie2 = document.getElementById('myZombie2');
  const zombiePerson2 = document.getElementById('myZombiePerson2');
  let compZombie2Styles = window.getComputedStyle(zombie2);
  var zombie2TopStr = compZombie2Styles.getPropertyValue('top');
  var zombie2LeftStr = compZombie2Styles.getPropertyValue('left');
  var zombie2Top = parseFloat(zombie2TopStr, 10);
  var zombie2Left = parseFloat(zombie2LeftStr, 10);
  if (zombie1Top == zombie2Top && zombie1Left == zombie2Left) {
      if (zombie2Top < 175 && zombie2Left < 175) {
        //move down right
        zombie2.style.top = `${zombie2.offsetTop + 50}px`; //Down
        zombie2.style.left = `${zombie2.offsetLeft + 50}px`; //Right
        zombiePerson2.style.top = `${zombiePerson2.offsetTop + 50}px`; //Down
        zombiePerson2.style.left = `${zombiePerson2.offsetLeft + 50}px`; //Right
      } else if (zombie2Top < 175 && zombie2Left > 175) {
        //move down left
        zombie2.style.top = `${zombie2.offsetTop + 50}px`; //Down
        zombie2.style.left = `${zombie2.offsetLeft - 50}px`; //Left
        zombiePerson2.style.top = `${zombiePerson2.offsetTop + 50}px`; //Down
        zombiePerson2.style.left = `${zombiePerson2.offsetLeft - 50}px`; //Left
      } else if (zombie2Top > 175 && zombie2Left < 175) {
        //move up right
        zombie2.style.top = `${zombie2.offsetTop - 50}px`; //Up
        zombie2.style.left = `${zombie2.offsetLeft + 50}px`; //Right
        zombiePerson2.style.top = `${zombiePerson2.offsetTop - 50}px`; //Up
        zombiePerson2.style.left = `${zombiePerson2.offsetLeft + 50}px`; //Right
      } else if (zombie2Top > 175 && zombie2Left > 175) {
        //move up left
        zombie2.style.top = `${zombie2.offsetTop - 50}px`; //Up
        zombie2.style.left = `${zombie2.offsetLeft - 50}px`; //Left
        zombiePerson2.style.top = `${zombiePerson2.offsetTop - 50}px`; //Up
        zombiePerson2.style.left = `${zombiePerson2.offsetLeft - 50}px`; //Left
      }
    } else {
      return;
    }
}