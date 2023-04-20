let kompasrichting = 0
basic.forever(function () {
    if (kompasrichting < 315 && kompasrichting > 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (kompasrichting < 135 && kompasrichting > 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (kompasrichting > 45 && kompasrichting < 135) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (kompasrichting > 225 && kompasrichting < 315) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    kompasrichting = input.compassHeading()
})
