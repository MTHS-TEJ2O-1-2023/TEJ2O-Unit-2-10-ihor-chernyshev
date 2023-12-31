"""
Created by: Ihor Chernyshev
Created on: Oct 2023
This program uses neopixels on RobotBit
"""

from microbit import *
import neopixel

ll = 0

display.clear()
np = neopixel.NeoPixel(pin16, 4)
np[0] = (0, 0, 0)
np[1] = (0, 0, 0)
np[2] = (0, 0, 0)
np[3] = (0, 0, 0)
np.clear()
display.show(Image.HAPPY)

while True:
    # Getting the light level
    ll = display.read_light_level()
    display.scroll(display.read_light_level())
    # Turning on 0 neopixels
    if ll <= 51:
        np[0] = (0, 0, 0)
        np[1] = (0, 0, 0)
        np[2] = (0, 0, 0)
        np[3] = (0, 0, 0)
        print(np[0], np[1], np[2], np[3])
        np.show()
    # Turning on 1 neopixel
    if ll > 52:
        np[1] = (0, 0, 0)
        np[2] = (0, 0, 0)
        np[3] = (0, 0, 0)
        np[0] = (255, 255, 255)
        print(np[0], np[1], np[2], np[3])
        np.show()
    # Turning on 2 neopixels
    if ll > 104:
        np[2] = (0, 0, 0)
        np[3] = (0, 0, 0)
        np[1] = (0, 255, 0)
        print(np[0], np[1], np[2], np[3])
        np.show()
    # Turning on 3 neopixels
    if ll > 156:
        np[3] = (0, 0, 0)
        np[2] = (255, 0, 0)
        print(np[0], np[1], np[2], np[3])
        np.show()
    # Turning on 4 neopixels
    if ll > 208:
        np[3] = (0, 0, 255)
        print(np[0], np[1], np[2], np[3])
        np.show()
