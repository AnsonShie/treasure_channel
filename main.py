def on_button_pressed_a():
    global 廣播群組
    廣播群組 += 1
    basic.show_number(廣播群組)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(廣播群組)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_HEART)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global 廣播群組
    廣播群組 += -1
    basic.show_number(廣播群組)
input.on_button_pressed(Button.B, on_button_pressed_b)

廣播群組 = 0
廣播群組 = 0

def on_forever():
    radio.set_group(廣播群組)
    radio.send_string("\"I got you\"")
    basic.pause(200)
basic.forever(on_forever)
