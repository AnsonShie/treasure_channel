input.onButtonPressed(Button.A, function () {
    if (鎖 == 0) {
        廣播群組 += 1
    }
    basic.showNumber(廣播群組)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(廣播群組)
    if (鎖 == 1) {
        鎖 = 0
    } else {
        鎖 = 1
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
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
radio.setTransmitPower(3)
basic.forever(function () {
    radio.setGroup(廣播群組)
    radio.sendString("\"I got you\"")
    basic.pause(500)
})
