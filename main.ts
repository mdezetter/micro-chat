radio.setGroup(1)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Micro Chat!")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
