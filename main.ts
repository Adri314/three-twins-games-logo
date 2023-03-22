function naranjaAparece () {
    naranja = sprites.create(assets.image`Naranja`, SpriteKind.Player)
    naranja.setPosition(80, 40)
    twins = sprites.create(assets.image`Twins`, SpriteKind.Player)
    twins.setPosition(80, 60)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function azulAparece () {
    azul = sprites.create(assets.image`Azul`, SpriteKind.Player)
    azul.setPosition(73, 40)
    three = sprites.create(assets.image`Three`, SpriteKind.Player)
    three.setPosition(56, 60)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function verdeAparece () {
    verde = sprites.create(assets.image`Verde`, SpriteKind.Player)
    verde.setPosition(87, 40)
    games = sprites.create(assets.image`Games`, SpriteKind.Player)
    games.setPosition(104, 60)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function logo () {
    scene.setBackgroundColor(13)
    pause(500)
    azulAparece()
    naranjaAparece()
    verdeAparece()
    pause(2000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.disintegrate, 200)
}
let games: Sprite = null
let verde: Sprite = null
let three: Sprite = null
let azul: Sprite = null
let twins: Sprite = null
let naranja: Sprite = null
logo()
