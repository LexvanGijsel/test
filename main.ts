let teller = 0
input.onButtonPressed(Button.A, function () {
    teller = 0
    for (let index = 0; index <= 8; index++) {
        if (index == 5) {
            break;
        }
        teller += 1
    }
    basic.showNumber(teller)
})
input.onButtonPressed(Button.B, function () {
    teller = 0
    for (let index = 0; index <= 8; index++) {
        if (index == 5) {
            continue;
        }
        teller += 1
    }
    basic.showNumber(teller)
})
