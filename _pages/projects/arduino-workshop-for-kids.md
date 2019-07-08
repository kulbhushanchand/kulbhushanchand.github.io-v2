---
permalink: /projects/arduino-workshop-for-kids
title: Arduino workshop for kids
excerpt: 'This project contains the presentation, schematics and the arduino code required for conducting the arduino workshop for kids.'
comments: false
layout: #splash
classes: wide
development: false
author_profile: false
comments: false
last_modified_at: 2019-07-08
toc: false
project-link:
  github-repo: arduino-workshop-for-kids
sidebar:
  - title: "Arduino workshop for kids"
    image: /assets/images/pages/projects/arduino-workshop-for-kids/arduino-workshop-for-kids-small.jpg
    image_alt: "arduino workshop for kids"
    text: "Presentation, schematics and the arduino code for conducting the arduino workshop for kids."
    nav: arduino-workshop-for-kids
#header:
#  overlay_image: /assets/images/pages/projects/arduino-workshop-for-kids/arduino-workshop-for-kids-header.jpg
#  overlay_filter: rgba(0, 0, 0, 0.5)
---

## About this project

In 2017, I have started using arduino for my research work. My research guide and their associates liked the ideas of organizing a arduino workshop for kids. My task was to handle everything related to technical aspect and delivering presentation at workshop.

Started with the basic idea I end up creating the 15 ready to deploy, generalized arduino projects, with difficulty from easy to hard.

The workshop was successfully conducted in Nov-2017 and this repository was later made public for anyone who would like to use and get benefited from it.

This  repository contains the presentation, schematics and the arduino code required for conducting the arduino workshop for kids. The workshop is divided into 15 challenges ranging from simple to complex tasks. Each challenge aims to teach some core concepts of arduino and electronics.


The 15 challenges spans the easiest to difficult level. Starting from the basic challenge to blink a LED, each challenge adds a new learning item (like button, sensor or a concept). The powerpoint presentation (in the repository) which accompanies the workshop includes the introduction, schematic and code for the challenges. Following is the brief introduction to each of the challenge.

- **Challenge 1 : Blinking LED** 


- **Challenge 2 : Fading LED**

- **Challenge 3 : Coloured LED**

- **Challenge 4 : Color Wheel**

- **Challenge 5 : Color Control Button**

- **Challenge 6 : Color Mixer**

- **Challenge 7 : Toss a Coin**

- **Challenge 8 : Roll a Dice**

- **Challenge 9 : Rock Paper Scissor**

- **Challenge 10 : Automatic Light Control**

- **Challenge 11 : Burgler Alarm**

- **Challenge 12 : Laser Shooter**

- **Challenge 13 : Piano**

- **Challenge 14 : Theremin**

- **Challenge 15 : Ghost Detector**

- **Bonus Challenges** : 
  * **Happy Birthday Tune** - To play Happy Birthday Tune on buzzer. The schematic is left as an exercise for the user.(Psst. - It's only a buzzer connected to a PWM pin).

  * **Mario Tune** - Same like the above, but this time buzzer will play Mario Tune.

  * **Household LED Control** - In this challenge the led is controlled (made ON/OFF) by shining laser on LDR[^ldr]. If you can control an led, then you can control household light by using a relay in place of led.
  
⚠️ **Be careful** when working with high power circuit. Supervision of an expert adult is must. ⚠️
{: style="text-align: center;"} 
{: .notice--danger}


## Tools used for this project

The software tools are free and open source, and hardwate tools are of low cost.

### Hardware

 - Arduino Uno
 - Breadboard
 - 9V Battery
 - 9V Battery Snap Connector
 - USB Cable (Type A/B)
 - Connecting Wires (Male-to-Male)
 - Resistance Pack
 - Push Button
 - Diffused LED
 - Diffused RGB LED
 - Seven Segment Display
 - Buzzer

### Software

 - Arduino IDE 



## How to use

The repository contains the following material -
- **Powerpoint presentation** - Use the included powerpoint presentation to go through the challenges one by one.
- **Schematic PNGs** - Schematics in PNG format
- **Schematics Fritzing files** - Editable Scsematics in fritzing format. Use this in case you want to change something in the schematic. After required changes, export the schematic in PNG format.
- **Arduino Sketches** - Arduino sketches for the challenges.
- **Bill Of Material** - An estimate of the cost of the materials required for the workshop. The cost mentioned was at the time of workshop (in Aug, 2018) and from the specific vendor (mentioned in the file), and is likely to be changed.
- **Arduino UNO pinout** - A one page cheat sheet for Arduino UNO pinout.
- **I/P_Brain_O/P - Fritzing Template** - Template for `I/P_Brain_O/P` type of slide in presentation.

All files are logically named and neatly arranged in folders for easy navigation and reference.


[^ldr]: Light Dependent Resistor