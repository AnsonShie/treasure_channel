input.onButtonPressed(Button.A, function () {
    if (鎖 == 0) {
        廣播群組 += 1
    }
    basic.showNumber(廣播群組)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(廣播群組)
    if (鎖 == 1) {
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("Unlock")
        鎖 = 0
    } else {
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("Lock")
        鎖 = 1
    }
    basic.pause(2000)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (鎖 == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.B, function () {
    if (鎖 == 0) {
        廣播群組 += -1
    }
    basic.showNumber(廣播群組)
})
let 鎖 = 0
let 廣播群組 = 0
廣播群組 = 1
鎖 = 1
radio.setTransmitPower(0)
basic.forever(function () {
    radio.setGroup(廣播群組)
    radio.sendString("\"I got you\"")
    basic.pause(500)
})
