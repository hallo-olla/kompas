let kompasrichting = 0
basic.forever(function () {
    kompasrichting = input.compassHeading()
})
basic.forever(function () {
    if (kompasrichting < 315 && kompasrichting > 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (kompasrichting < 315 && kompasrichting > 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
