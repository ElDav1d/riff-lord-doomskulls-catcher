# Rrifflord Doomskulls Catcher

## [Play the Game](https://eldav1d.github.io/riff-lord-doomskulls-catcher/)

# Project Description

As part of my Ironhack Web Development bootcamp, the goal for me this is deep diving into OOP patterns upon SOLID, CLEAN and AGILE principles; by only Vanilla JS programing on HTML 2d Canvas.

## Project Goals

- Quality on implementation
- Engageability on playing
- Nice Aesthetics on UI
- Having fun

# Game Description

A vertical oriented game where player moves horizontally. The goal is high scoring (Skull collecting) and avoiding obstacle collision (Walls). Difficulty is set by Game Speed, which can be increased (by Pill item picking) or decreased (by Leaf item picking).

# MVP

- Game character has 3 lives and moves horizontally on canvas limits
- Game has Background Sound and Collission Sound FX
- All Falling Items (Wall, Skull, Pill, Leaf) move vertically on its own speed factor which also depends on Game Speed
- Game Speed is affected by item picking, then impacts on all Falling Items' speed
- Wall posititon and width is randomly generated from X axis limits
- Wall collision decreases lives until Game Over
- Live loss provides Character 3 seconds Inmunity time (yet no scoring or item picking)
- Item is randomly generated on X axis
- Character animation is smooth
- Skull has 3 types with different scoring, collision sound, image, speed and generation factor. The higher scoring: the more speed, the less generation.

# Backlog Functionalities

- Canvas background animation
- Game screen background image
- Level up on scoring: increasing Game Speed, different Game screen and Canvas background image
- Re-spawning on level up and live loss
- Leaf has 3 types with different bonus, collision sound, image, speed and generation factor. The higher bonus: the more speed, the less generation
- Pill has 3 types with different malus, collision sound, image, speed and generation factor. The higher bonus: the more speed, the less generation
- Effects of Picking items have an interval. Once finished the Game returns to its Level defined Speed
- Game Instructions Page (more detailed game rules)
- Highest Score Page with 10 entries: player inputs name and score on Record Page, data is retrieven from Localstorage

# Proyect Structure

## globals.js

### AS SETTINGS

Accesible references, variables and fixed data values

## main.js

### AS CONTROLER

- initScreens()
- initGameSounds()
- stopSplashSound ()
- initSplashSound ()
- pauseSplashSound()
- startGame()
- handleMoveKey()
- handleSplashMouseover()
- handleSplashClick()

## game.js

- Game () {

  - this.frames;
  - this.isGameOn;
  - this.gameScore;
  - this.gameSpeedState;
  - this.gameNewSpeed;
  - this.gameSpeedMin;
  - this.gameSpeedMax;
  - this.gameBackground;
  - this.gameGeneratorVariance;
  - this.gameSoundFX;
  - this.gameLives;
  - this.character;
  - this.characterMoves;
  - this.characterInmunity;
  - this.wallArray;
  - this.wallGenerationFactor;
  - this.wallGeneration;;
  - this.wallGapFactor;
  - this.wallGapVariance;
  - this.wallSpeed;
  - this.skullTypes;
  - this.skullHighSpeed;
  - this.skullHighGenerationFactor;
  - this.skullMidSpeed;
  - this.skullMidGenerationFactor;
  - this.skullLowSpeed;
  - this.skullLowGenerationFactor;
  - this.skullStack;
  - this.leafArray;
  - this.leafSpeed;
  - this.leafGenerationFactor
  - this.pillArray;
  - this.pillSpeed;
  - this.pillGenerationFactor;
    }

- moveCharacter () {}
- randomizeWallGap () {}
- randomizeXPosition () {}
- updateStackSpeed () {}
- manageItemSpeed () {}
- isFramesPerSec () {}
- createWall () {}
- createSkull () {}
- createPill () {}
- hasCollision () {}
- handleSkullCollisions () {}
- moveSkulls () {}
- drawSkulls () {}
- cleanSkullStack () {}
- handleLeafCollisions () {}
- handlePillCollision () {}
- handleWallCollisions () {}
- displayScore () {}
- displayLives () {}
- displayMessage () {}
- getCharacterPic () {}
- gameOver () {}
- gameLoop () {}

## player.js

- Character () {

  - this.x;
  - this.y;
  - this.w;
  - this.h;
  - this.speed;
  - this.image;
  - this.image.src;
    }

- drawCharacter () {}
- moveLeft () {}
- moveRigth () {}

## fallingItem.js

- FallingItem () {

  - this.x;
  - this.y;
  - this.w;
  - this.h;
  - this.speed;
  - this.image;
  - this.image.src;
    }

- drawItem()
- moveItem()
- cleanSoundFx()
- stackSound()
- manageSound()

## Wall

- Wall extends FallingItem () {

  - this.w;
  - this.h;
  - this.image;
  - this.image.src;
  - this.sound;
    }

## Skull

- Skull extends FallingItem () {

  - this.w;
  - this.h;
    }

## SkullHigh

- SkullHigh extends Skull () {

  - this.image.src;
  - this.sound;
  - this.points;
    }

- manageSound()

## SkullMid

- SkullMid extends Skull () {

  - this.image.src;
  - this.sound;
  - this.points;
    }

## SkullLow

- SkullLow extends Skull () {

  - this.image.src;
  - this.sound;
  - this.points;
    }

## Leaf

- Leaf extends Skull () {

  - this.w;
  - this.h;
  - this.bonus;
  - this.image;
  - this.image.src;
  - this.sound;
    }

## Pill

- Pill extends Skull () {

  - this.w;
  - this.h;
  - this.bonus;
  - this.image;
  - this.image.src;
  - this.sound;
    }

# States and Transitions

- Splash Screen
- Game Screen
- Gameover Screen

# Extra Links

### Trello

[Link](https://trello.com/b/eaVKVAuT/project1thegame)
