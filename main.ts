input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.servoWritePin(AnalogPin.P0, 89)
})
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.South)
    pins.servoWritePin(AnalogPin.P0, 180)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
    pins.servoWritePin(AnalogPin.P0, 0)
})
basic.forever(function () {
	
})
