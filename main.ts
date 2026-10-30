input.onButtonPressed(Button.A, function () {
    radio.sendString("Left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Front")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Left") {
        robotbit.MotorRunDelay(robotbit.Motors.M1A, 100, 0.5)
    } else if (receivedString == "Right") {
        robotbit.MotorRunDelay(robotbit.Motors.M2A, -100, 0.5)
    } else if (receivedString == "Front") {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M2A,
        -150
        )
        basic.pause(100)
        robotbit.MotorStopAll()
    } else if (receivedString == "Back") {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -150,
        robotbit.Motors.M2A,
        150
        )
        basic.pause(100)
        robotbit.MotorStopAll()
    } else {
        robotbit.MotorStopAll()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Right")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("Back")
})
radio.setGroup(90)
