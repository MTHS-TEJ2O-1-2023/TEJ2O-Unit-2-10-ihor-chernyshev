/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Oct 2023
 * This program ...
*/

let ll: number = 0
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
  ll = input.lightLevel()
  basic.showNumber(ll)
  if (ll <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.pause(500)
  }
  if (ll > 52) {
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.show()
    basic.pause(500)
    }
  if (ll > 104) {
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    basic.pause(500)
  }
  if (ll > 156) {
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.pause(500)
  }
  if (ll > 208) {
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
    basic.pause(500)
  }
})
