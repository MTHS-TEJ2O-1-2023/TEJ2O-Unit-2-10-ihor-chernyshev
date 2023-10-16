/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Oct 2023
 * This program uses neopixels on RobotBit
*/

let lightlevel: number = 0
let neopixelStrip: neopixel.Strip = null

basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

basic.forever(function () {
  // Getting the light level
  lightlevel = input.lightLevel()
  basic.showNumber(lightlevel)
 
  // Turning on 0 neopixels
  if (lightlevel <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }
 
  // Turning on 1 neopixel
  if (lightlevel > 52) {
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.show()
  }

  // Turning on 2 neopixels
  if (lightlevel > 104) {
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
  }

  // Turning on 3 neopixels
  if (lightlevel > 156) {
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
  }
 
  // Turning on 4 neopixels
  if (lightlevel > 208) {
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }
})
