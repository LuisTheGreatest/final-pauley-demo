namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const info = SpriteKind.create()
    export const npc1 = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const npc3 = SpriteKind.create()
}
namespace StatusBarKind {
    export const HungerBar = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    tiles.setCurrentTilemap(tilemap`level5`)
    mySprite5 = sprites.create(assets.image`teacher2`, SpriteKind.npc2)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 25))
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(10, 23))
    mySprite5.sayText("...")
    mySprite6 = sprites.create(assets.image`heart`, SpriteKind.info)
    mySprite7 = sprites.create(assets.image`brain`, SpriteKind.info)
    mySprite8 = sprites.create(assets.image`eyes`, SpriteKind.info)
    mySprite9 = sprites.create(assets.image`Lungs`, SpriteKind.info)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(4, 16))
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(8, 7))
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(21, 16))
    tiles.placeOnTile(mySprite9, tiles.getTileLocation(14, 11))
    collectitemcount = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile72`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(91, 5), assets.tile`myTile60`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    tiles.setCurrentTilemap(tilemap`level2`)
    statusbar = statusbars.create(100, 4, StatusBarKind.HungerBar)
    statusbar.positionDirection(CollisionDirection.Bottom)
    statusbar.value = 100
    statusbar.value += -100
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
    mySprite2 = sprites.create(assets.image`Teacher`, SpriteKind.npc1)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile9`)
    mySprite3 = sprites.create(assets.image`berry`, SpriteKind.Food)
    mySprite4 = sprites.create(assets.image`cake`, SpriteKind.Enemy)
    mySprite2.sayText("...")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(mySprite11)) {
        mySprite11.sayText("Hiii", 5000, false)
        pause(5000)
        mySprite11.sayText("Welcome too my health game!", 5000, false)
        pause(5000)
        mySprite11.sayText("Have Fun!", 2000, false)
        pause(5000)
        mySprite2.sayText("...")
    }
})
statusbars.onStatusReached(StatusBarKind.HungerBar, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    tiles.setCurrentTilemap(tilemap`level16`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 9))
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.npc1)
    streak += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile65`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(91, 5), assets.tile`myTile60`)
    streak = 0
})
function Foodreplace () {
    goodrandom = randint(1, 3)
    badrandom = randint(1, 3)
    if (goodrandom == 1) {
        mySprite3.setImage(assets.image`berry`)
    } else if (goodrandom == 3) {
        mySprite3.setImage(assets.image`apple`)
    } else {
        mySprite3.setImage(assets.image`cherry`)
    }
    if (badrandom == 1) {
        mySprite4.setImage(assets.image`cake`)
    } else if (badrandom == 2) {
        mySprite4.setImage(assets.image`chicken`)
    } else {
        mySprite4.setImage(assets.image`donut`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile53`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing6`, function (sprite, location) {
    randomizefitness()
    game.showLongText("unscramble the word", DialogLayout.Bottom)
    if (game.askForString(fitnessanswer) == "fitness") {
        info.changeScoreBy(5)
        tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
        streak += 1
        finalquestions += 1
    } else {
        game.splash("INCORRECT")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
        streak = 0
    }
    if (finalquestions == 6) {
        game.splash("streak", streak)
        game.setGameOverScoringType(game.ScoringType.HighScore)
        info.changeScoreBy(info.score() * streak)
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile58`)
    streak = 0
})
function randomizefitness () {
    random_letter_thing = randint(1, 9)
    if (random_letter_thing == 1) {
        fitnessanswer = "sfitnes"
        heartanswer = "thare"
    } else if (random_letter_thing == 2) {
        fitnessanswer = "ifsents"
        heartanswer = "rehat"
        pressureanswer = "uerperss"
    } else if (random_letter_thing == 3) {
        fitnessanswer = "nesfits"
    } else if (random_letter_thing == 4) {
        fitnessanswer = "stifens"
        pressureanswer = "pursrees"
        heartanswer = "etrah"
    } else if (random_letter_thing == 5) {
        fitnessanswer = "fesnits"
        heartanswer = "hreta"
        pressureanswer = "esrupres"
    } else if (random_letter_thing == 6) {
        fitnessanswer = "sinfest"
        heartanswer = "aerth"
        pressureanswer = "serpsure"
    } else if (random_letter_thing == 7) {
        fitnessanswer = "entfiss"
        heartanswer = "trahe"
        pressureanswer = "rseusper"
    } else if (random_letter_thing == 8) {
        fitnessanswer = "fissent"
        heartanswer = "rhate"
        pressureanswer = "peresusr"
    } else if (random_letter_thing == 9) {
        fitnessanswer = "ssetinf"
        heartanswer = "ehart"
        pressureanswer = "ssrupeer"
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    jumpman += 1
    birdquestions = 0
    tiles.setCurrentTilemap(tilemap`level9`)
    if (jumpman == 1) {
        mySprite.setImage(assets.image`duckplayer`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
        mySprite.ay = 100
        controller.moveSprite(mySprite, 0, 0)
        scroller.scrollBackgroundWithSpeed(30, 0)
        mySprite.vx = 50
    } else {
        mySprite.sayText(":)", 1, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile71`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(91, 5), assets.tile`myTile60`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile67`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(91, 5), assets.tile`myTile60`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile53`)
    streak = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpman == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 4 b 
            b d d c d 5 5 b 5 4 4 4 4 4 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
        mySprite.vy = -60
    } else {
        mySprite.sayText(":)", 1, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.showLongText("simple questions", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    tiles.setCurrentTilemap(tilemap`level21`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing0`, function (sprite, location) {
    birdquestions += 1
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setCurrentTilemap(tilemap`level18`)
    scene.setBackgroundImage(assets.image`bp measure9`)
    game.showLongText("it acts a pump as it beats and pushes blood throughout the body", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`back`)
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.setTileAt(location, assets.tile`myTile60`)
    mySprite.setImage(assets.image`duckplayer`)
    info.changeScoreBy(5)
    streak += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
    streak = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc3, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(mySprite10)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
        sprites.destroyAllSpritesOfKind(SpriteKind.npc3)
        CrossEnable = 0
        controller.moveSprite(mySprite, 0, 0)
        tiles.setCurrentTilemap(tilemap`blank`)
        scene.setBackgroundImage(assets.image`bp measure`)
        game.showLongText("its always important to know how to properly take BP", DialogLayout.Bottom)
        game.showLongText("you can do this with the 3 R's: RIGHT/RELAX/RECORD", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`bp measure0`)
        game.showLongText("RIGHT: first attach the cuff to your upper arm at heart level", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`bp measure1`)
        game.showLongText("RELAX: rest quietly for 5 minutes with your feet flat and back supported", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`bp measure2`)
        game.showLongText("RECORD: take TWO readings a minute apart from eachother", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`bp measure3`)
        game.showLongText("avoid any caffeine, smoking and exercising 30 minutes before taking the test", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`bp measure4`)
        game.showLongText("make sure to RECORD the results to remember and track it", DialogLayout.Bottom)
        game.showLongText("Ideal BP would have sys < 120 while DIA < 80, Anything above will be considered high", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level7`)
        scene.setBackgroundImage(assets.image`back`)
        CrossEnable = 1
        controller.moveSprite(mySprite, 150, 150)
        tiles.placeOnRandomTile(mySprite, assets.tile`tile36`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing3`, function (sprite, location) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setCurrentTilemap(tilemap`level18`)
    scene.setBackgroundImage(assets.image`bp measure7`)
    game.showLongText("In this level we are gonna talk about what the heart does", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level9`)
    scene.setBackgroundImage(assets.image`back`)
    tiles.setTileAt(location, assets.tile`myTile53`)
    mySprite.setImage(assets.image`duckplayer`)
    info.changeScoreBy(5)
    streak += 1
    birdquestions = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing9`, function (sprite, location) {
    if (game.askForString("Getting enough sleep protects your heart. T/F", 1) == "T") {
        game.splash("correct +5")
        info.changeScoreBy(5)
        tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
        streak += 1
        finalquestions += 1
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
        streak = 0
        game.splash("INCORRECT")
    }
    if (finalquestions == 6) {
        game.splash("streak:", streak)
        game.setGameOverScoringType(game.ScoringType.HighScore)
        info.changeScoreBy(info.score() * streak)
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile53`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    game.showLongText("is the ideal sys and dia (bp) greater or less than 130 and 80?", DialogLayout.Top)
    game.splash("put either less or greater for answer")
    if (game.askForString("answer:", 7) == "less") {
        game.splash("Correct!")
        crossthesystem += 1
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        info.changeScoreBy(5)
        streak += 1
    } else {
        game.splash("if it was greater it would be consider too high! try again")
        tiles.placeOnRandomTile(mySprite, assets.tile`tile36`)
        streak += 0
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.floorMixed)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.floorMixed)
    Foodreplace()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing4`, function (sprite, location) {
    if (game.askForString("Eating vegetables helps your heart. T/F", 1) == "T") {
        game.splash("correct +5")
        info.changeScoreBy(5)
        tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
        streak += 1
        finalquestions += 1
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
        streak = 0
        game.splash("INCORRECT")
    }
    if (finalquestions == 6) {
        game.splash("streak:", streak)
        game.setGameOverScoringType(game.ScoringType.HighScore)
        info.changeScoreBy(info.score() * streak)
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing7`, function (sprite, location) {
    randomizefitness()
    game.showLongText("unscramble the word", DialogLayout.Bottom)
    if (game.askForString(heartanswer) == "heart") {
        game.splash("correct +5")
        info.changeScoreBy(5)
        tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
        streak += 1
        finalquestions += 1
    } else {
        game.splash("INCORRECT")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
        streak = 0
    }
    if (finalquestions == 6) {
        game.splash("streak:", streak)
        game.setGameOverScoringType(game.ScoringType.HighScore)
        info.changeScoreBy(info.score() * streak)
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (crossthesystem >= 5) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        CrossEnable += -1
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 9))
        info.changeScoreBy(Point_system)
    } else {
        game.splash("be sure to answer all cehckpoints to continue!")
        tiles.placeOnRandomTile(mySprite, assets.tile`tile36`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile58`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile53`)
    streak = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    Point_system += -5
    sprites.destroy(otherSprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile36`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(91, 5), assets.tile`myTile60`)
    streak = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc1, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(mySprite2)) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
        game.showLongText("healthy foods helps control BP", DialogLayout.Bottom)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.npc1)
        controller.moveSprite(mySprite, 0, 0)
        tiles.setCurrentTilemap(tilemap`blank`)
        mySprite.setImage(assets.image`blank`)
        scene.setBackgroundImage(assets.image`bp measure5`)
        game.showLongText("This because fruits and vegetables provide vitamins and mineralsthat lower BP", DialogLayout.Bottom)
        game.showLongText("we call these foods always foods", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`bp measure11`)
        game.showLongText("for junk foods they are good as a treat for occasions", DialogLayout.Bottom)
        game.showLongText("however eating them every is not reccomended", DialogLayout.Bottom)
        game.showLongText("we call these \"sometimes\" foods", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`back`)
        tiles.setCurrentTilemap(tilemap`level12`)
        mySprite.setImage(assets.image`player`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
        controller.moveSprite(mySprite, 150, 150)
        mySprite2 = sprites.create(assets.image`Teacher`, SpriteKind.npc1)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile9`)
        mySprite3 = sprites.create(assets.image`berry`, SpriteKind.Food)
        mySprite4 = sprites.create(assets.image`cake`, SpriteKind.Enemy)
        mySprite2.sayText("Make sure to eat healthy foods!", 5000, false)
        pause(5000)
        mySprite2.sayText("...")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile59`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile58`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile53`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile53`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile53`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing8`, function (sprite, location) {
    randomizefitness()
    game.showLongText("unscramble the word", DialogLayout.Bottom)
    if (game.askForString(pressureanswer) == "pressure") {
        info.changeScoreBy(5)
        tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
        streak += 1
        finalquestions += 1
    } else {
        game.splash("INCORRECT")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
        streak = 0
    }
    if (finalquestions == 6) {
        game.splash("streak:", streak)
        game.setGameOverScoringType(game.ScoringType.HighScore)
        info.changeScoreBy(info.score() * streak)
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    tiles.setCurrentTilemap(tilemap`level7`)
    CrossEnable += 1
    tiles.placeOnRandomTile(mySprite, assets.tile`tile36`)
    mySprite10 = sprites.create(assets.image`teacher3`, SpriteKind.npc3)
    tiles.placeOnTile(mySprite10, tiles.getTileLocation(2, 39))
    mySprite10.sayText("...")
    crossthesystem = 0
    Point_system = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile58`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing`, function (sprite, location) {
    birdquestions += 1
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    scene.setBackgroundImage(assets.image`bp measure8`)
    tiles.setCurrentTilemap(tilemap`level18`)
    game.showLongText("The heart is a fist sized organ on the front left of your chest", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`back`)
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.setTileAt(location, assets.tile`myTile58`)
    mySprite.setImage(assets.image`duckplayer`)
    info.changeScoreBy(5)
    streak += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile58`)
    streak = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.floorMixed)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.floorMixed)
    info.changeScoreBy(5)
    statusbar.value += 5
    Foodreplace()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile68`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(91, 5), assets.tile`myTile60`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    game.showLongText("how long do you rest quietly in minutes?", DialogLayout.Top)
    if (game.askForNumber("answer:", 1) == 5) {
        game.splash("Correct!")
        crossthesystem += 1
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        info.changeScoreBy(5)
        streak += 1
    } else {
        game.splash("you need to sit for 5 minutes! try again")
        tiles.placeOnRandomTile(mySprite, assets.tile`tile36`)
    }
    streak += 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc2, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(mySprite5)) {
        controller.moveSprite(mySprite, 0, 0)
        sprites.destroyAllSpritesOfKind(SpriteKind.npc2)
        sprites.destroyAllSpritesOfKind(SpriteKind.info)
        tiles.setCurrentTilemap(tilemap`blank`)
        mySprite.setImage(assets.image`blank`)
        scene.setBackgroundImage(assets.image`bp measure6`)
        game.showLongText("high blood pressure can damage certain organs if not watched", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`sysdia`)
        game.showLongText("Systolic or sys is the force when the heart squeezes", DialogLayout.Bottom)
        game.showLongText("DIA or Diastolic is the force when the heart relaxes", DialogLayout.Bottom)
        game.showLongText("Ideal BP would have sys < 130 while DIA < 80, Anything above will be considered high", DialogLayout.Bottom)
        game.showLongText("anything above 130/80 is called hypertension which can be harmful to organs and your heart", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level14`)
        scene.setBackgroundImage(assets.image`back`)
        mySprite.setImage(assets.image`player`)
        controller.moveSprite(mySprite, 150, 150)
        mySprite5 = sprites.create(assets.image`teacher2`, SpriteKind.npc2)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 25))
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(10, 23))
        mySprite6 = sprites.create(assets.image`heart`, SpriteKind.info)
        mySprite7 = sprites.create(assets.image`brain`, SpriteKind.info)
        mySprite8 = sprites.create(assets.image`eyes`, SpriteKind.info)
        mySprite9 = sprites.create(assets.image`Lungs`, SpriteKind.info)
        tiles.placeOnTile(mySprite6, tiles.getTileLocation(4, 16))
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(8, 7))
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(21, 16))
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(14, 11))
        collectitemcount = 0
        mySprite5.sayText("collect the objects scattered to learn more!", 5000, false)
        pause(5000)
        mySprite5.sayText("...")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(91, 5), assets.tile`myTile60`)
    streak = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.info, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(mySprite6)) {
        sprites.destroy(mySprite6)
        game.showLongText("High BP can weaken the heart", DialogLayout.Bottom)
        info.changeScoreBy(5)
        collectitemcount += 1
        streak += 1
    } else if (mySprite.overlapsWith(mySprite7)) {
        sprites.destroy(mySprite7)
        game.showLongText("can reduce oxygen flow to brain which could cause a stroke", DialogLayout.Bottom)
        collectitemcount += 1
        info.changeScoreBy(5)
        streak += 1
    } else if (mySprite.overlapsWith(mySprite8)) {
        sprites.destroy(mySprite8)
        game.showLongText("High BP can result in vision loss or blindness", DialogLayout.Bottom)
        collectitemcount += 1
        info.changeScoreBy(5)
        streak += 1
    } else if (mySprite.overlapsWith(mySprite9)) {
        sprites.destroy(mySprite9)
        game.showLongText("High BP could also lead to kidney failure", DialogLayout.Bottom)
        info.changeScoreBy(5)
        collectitemcount += 1
        streak += 1
    }
    if (collectitemcount >= 4) {
        tiles.setCurrentTilemap(tilemap`level`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 9))
        sprites.destroyAllSpritesOfKind(SpriteKind.npc2)
    }
    mySprite.startEffect(effects.spray, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing5`, function (sprite, location) {
    if (game.askForString("Low blood pressure is always dangerous. T/F", 1) == "F") {
        game.splash("correct +5")
        info.changeScoreBy(5)
        tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
        streak += 1
        finalquestions += 1
    } else {
        game.splash("INCORRECT")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
        streak = 0
    }
    if (finalquestions == 6) {
        game.splash("streak:", streak)
        game.setGameOverScoringType(game.ScoringType.HighScore)
        info.changeScoreBy(info.score() * streak)
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`thing1`, function (sprite, location) {
    info.changeScoreBy(5)
    birdquestions += 1
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setCurrentTilemap(tilemap`level18`)
    scene.setBackgroundImage(assets.image`bp measure10`)
    game.showLongText("the blood carries oxygen and nutrients to other organ for them to function", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`back`)
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.setTileAt(location, assets.tile`myTile73`)
    mySprite.setImage(assets.image`duckplayer`)
    if (birdquestions >= 4) {
        jumpman += -1
        mySprite.setImage(assets.image`player`)
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 9))
        mySprite.ay = 0
        controller.moveSprite(mySprite, 150, 150)
        scroller.scrollBackgroundWithSpeed(-30, 0)
        mySprite.vx = 0
        streak += 1
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`up`,
        100,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`right`,
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`down`,
        100,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`left`,
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile58`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile53`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile55`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile58`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile69`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(91, 5), assets.tile`myTile60`)
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
    streak = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    game.showLongText("should you execercise before the test?", DialogLayout.Top)
    if (game.askForString("answer:", 3) == "no") {
        game.splash("Correct!")
        crossthesystem += 1
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        info.changeScoreBy(5)
        streak += 1
    } else {
        game.splash("avoid excercise, caffiene, or smoking 30 minutes before the test! try again")
        tiles.placeOnRandomTile(mySprite, assets.tile`tile36`)
        streak += 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    game.showLongText("what part of your arm do you attach the cuff?", DialogLayout.Top)
    if (game.askForString("answer:", 9) == "upper arm") {
        game.splash("Correct!")
        crossthesystem += 1
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        info.changeScoreBy(5)
        streak += 1
    } else {
        game.splash("you place on the upper arm! try again")
        tiles.placeOnRandomTile(mySprite, assets.tile`tile36`)
        streak += 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    game.showLongText("how many readings should you take?", DialogLayout.Top)
    if (game.askForNumber("answer:", 1) == 2) {
        game.splash("Correct!")
        crossthesystem += 1
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        info.changeScoreBy(5)
        streak += 1
    } else {
        game.splash("take 2 readings a minute apart from eachother")
        tiles.placeOnRandomTile(mySprite, assets.tile`tile36`)
        streak += 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.floorMixed)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.floorMixed)
    info.changeScoreBy(-5)
    statusbar.value += 5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile70`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(91, 5), assets.tile`myTile60`)
    streak = 0
})
let projectile2: Sprite = null
let projectile: Sprite = null
let Point_system = 0
let crossthesystem = 0
let mySprite10: Sprite = null
let birdquestions = 0
let jumpman = 0
let pressureanswer = ""
let heartanswer = ""
let random_letter_thing = 0
let finalquestions = 0
let fitnessanswer = ""
let badrandom = 0
let goodrandom = 0
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let statusbar: StatusBarSprite = null
let streak = 0
let collectitemcount = 0
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite: Sprite = null
let mySprite11: Sprite = null
let CrossEnable = 0
CrossEnable = 0
scene.setBackgroundImage(assets.image`back`)
scroller.scrollBackgroundWithSpeed(30, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite11 = sprites.create(assets.image`guide`, SpriteKind.NPC)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 9))
tiles.placeOnTile(mySprite11, tiles.getTileLocation(3, 9))
mySprite11.sayText("...")
game.onUpdateInterval(120, function () {
    if (CrossEnable == 1) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . b b b b a a . . . . 
            . . . . b b d d d 3 3 3 a a . . 
            . . . b d d d 3 3 3 3 3 3 a a . 
            . . b d d 3 3 3 3 3 3 3 3 3 a . 
            . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
            . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
            b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
            b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
            b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
            a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
            a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
            a a 3 3 3 d d d a a 4 4 4 e e . 
            . e a a a a a a 4 4 4 4 e e . . 
            . . e e b b 4 4 4 4 b e e . . . 
            . . . e e e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 100, 0)
        projectile2 = sprites.createProjectileFromSide(assets.image`icecream`, -100, 0)
        tiles.placeOnRandomTile(projectile, assets.tile`myTile11`)
        tiles.placeOnRandomTile(projectile2, assets.tile`myTile25`)
    }
})
