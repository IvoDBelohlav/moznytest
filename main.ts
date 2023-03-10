let actualCode = 12;
let mySerial = Utility.encodeSerial()
let actualGroup = 5
let nextGroup = 0
let nextCode = 0
let blok1 = false
let blok2 = false

radio.setTransmitPower(7);
radio.setFrequencyBand(7);
radio.setTransmitSerialNumber(true);


radio.setGroup(actualGroup);

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(actualCode);
    basic.showNumber(actualCode);
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(actualGroup);
    basic.clearScreen()
})

radio.onReceivedValue(function (key: string, value: number) {
    if (mySerial === key) {
        nextCode = value
        blok1 = true
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.clearScreen()

    }
    if (key === "grp") {
        nextGroup = value
        blok2 = true
        music.playTone(Note.G, music.beat(BeatFraction.Whole))
        basic.clearScreen()

    }
    if (blok1 && blok2) {
        actualCode = nextCode
        actualGroup = nextGroup
        blok1 = false
        blok2 = false
        basic.showString("D")
        basic.clearScreen()
        radio.setGroup(actualGroup);

    }

})



input.onButtonPressed(Button.AB, function () {
    actualCode = 12;
    mySerial = Utility.encodeSerial()
    actualGroup = 5
    nextGroup = 0
    nextCode = 0
    blok1 = false
    blok2 = false
    basic.showString("AB");
    basic.clearScreen()
})

