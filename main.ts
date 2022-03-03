let abstand = 0
basic.forever(function () {
    abstand = 100
    basic.showIcon(IconNames.Happy)
    if (input.buttonIsPressed(Button.A)) {
        abstand += grove.measureInCentimeters(DigitalPin.C16)
        if (abstand < 30) {
            basic.showIcon(IconNames.Sad)
        } else {
            music.playMelody("C5 A C5 A C5 A - - ", 120)
        }
    } else {
        basic.showNumber(abstand)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
})
