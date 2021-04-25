controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fdd111111ddf......
        ......fbdd1111dddf......
        ......fcdbfddfbdbf......
        .......fbcf11fcbfff.....
        .......ffb1111bcfbcf....
        ........fcdb1bdfbbbf....
        .......ffffffffffcf.....
        .....fcb1bcfffff........
        .....f1b1b1ffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `, mySprite, 0, -90)
    projectile.startEffect(effects.hearts)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.starField, 500)
    otherSprite.destroy(effects.blizzard, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 4 . . . . . . . 
    . . . . . . . . d . . . . . . . 
    . . . . . . . . d . . . . . . . 
    . . . . . . . e d e . . . . . . 
    . . . . . . . e d e . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . e 9 9 9 e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . e c c c e . . . . . 
    . . . . . . a a a a a . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 . . . . . 3 3 3 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
mySprite.startEffect(effects.smiles, 500)
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 3 3 3 3 f 3 3 3 3 3 3 . . 
        . . 3 3 3 3 3 3 f 3 3 3 3 3 . . 
        . . 3 3 3 3 3 f 3 3 3 3 3 3 . . 
        . . . 3 3 3 3 3 f 3 3 3 3 . . . 
        . . . 5 3 3 3 f 3 3 3 3 5 . . . 
        . . . . 3 3 3 3 f 3 3 3 . . . . 
        . . . . 3 3 3 f 3 3 3 3 . . . . 
        . . . . . 3 3 3 f 3 3 . . . . . 
        . . . . . 5 3 f 3 3 5 . . . . . 
        . . . . . . 3 3 f 3 . . . . . . 
        . . . . . . 3 f 3 3 . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
})
