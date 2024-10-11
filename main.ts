input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(0)
    pins.servoWritePin(AnalogPin.P0, 90)
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
        pins.servoWritePin(AnalogPin.P0, 180)
    }
})
