---
permalink: /log/
title: Ghost Log
excerpt: 'log of my small steps of learning...'  
comments: false
classes: wide
author_profile: false
comments: false
last_modified_at: # 2018-09-01T10:00:04+05:30
toc: false
#header:
#  overlay_image: /assets/images/pages/main/unsplash-image-1.jpg
#  overlay_filter: rgba(0, 0, 0, 0.5)
---



{% assign dateFormat = '%B %d, %Y' %}

## {{ "2018-11-26" | date: dateFormat }}
- Updated theme on personal website

## {{ "2018-11-25" | date: dateFormat }}
- NULL

## {{ "2018-11-24" | date: dateFormat }}
- NULL

## {{ "2018-11-23" | date: dateFormat }}
- NULL

## {{ "2018-11-22" | date: dateFormat }}
- NULL

## {{ "2018-11-21" | date: dateFormat }}
- Added punjabi translation of ui-text [PR to minimal-mistaked repo](https://github.com/mmistakes/minimal-mistakes/pull/1962)

## {{ "2018-11-20" | date: dateFormat }}
- Updated style and breadcrumbs-logic on personal website
- Added rel attribute to authors-profile.html [PR to minimal-mistaked repo](https://github.com/mmistakes/minimal-mistakes/pull/1959)

## {{ "2018-11-19" | date: dateFormat }}
- Updated support page buttons on personal website
- Learning YouTube monetization

## {{ "2018-11-18" | date: dateFormat }}
- NULL

## {{ "2018-11-17" | date: dateFormat }}
- Downloaded icons, scss colors for icons and buttons on personal website

## {{ "2018-11-16" | date: dateFormat }}
- Creted includes for support notice on personal website

## {{ "2018-11-15" | date: dateFormat }}
- Added support notice to end of posts & theme improvements on personal website

## {{ "2018-11-14" | date: dateFormat }}
- Faqs added on personal website

## {{ "2018-11-13" | date: dateFormat }}
- Terms and policies updated on personal website

## {{ "2018-11-12" | date: dateFormat }}
- Buttons style updated on personal website

## {{ "2018-11-11" | date: dateFormat }}
- NULL

## {{ "2018-11-10" | date: dateFormat }}
- NULL

## {{ "2018-11-09" | date: dateFormat }}
- NULL

## {{ "2018-11-08" | date: dateFormat }}
- NULL

## {{ "2018-11-07" | date: dateFormat }}
- NULL

## {{ "2018-11-06" | date: dateFormat }}
- NULL

## {{ "2018-11-05" | date: dateFormat }}
- Hours of debugging & finally made the recapcha working with wufoo service 👍

## {{ "2018-11-04" | date: dateFormat }}
- Contact page wufoo integration successful
- Failed attempt to create red colored * sign in placeholder text
- Failed attempt to create floating label on contact form
- Implemented google-recaptcha to the contact form (with a bug present)

## {{ "2018-11-03" | date: dateFormat }}
- Footer renovated on personal website
- Working on contact page on personal website

## {{ "2018-11-02" | date: dateFormat }}
- Learning scss

## {{ "2018-11-01" | date: dateFormat }}
- Added "Support Me" page on personal website
- Learned using npm script to create svg spritesheet for icon display and performance improvement
- Added [svg4everybody](https://jonathantneal.github.io/svg4everybody/) for addressing svg icons from spritesheet without loading in the html code 
- Completely removed fontawesome support for icons, due to added overhead of JS 
- Removed magnific lightbox & instead implimented [lity lightbox](https://sorgalla.com/lity/)

## {{ "2018-10-31" | date: dateFormat }}
- Made project public - "arduino workshop for kids" and "ramayan hymns"

## {{ "2018-10-30" | date: dateFormat }}
- Optimized website performance

## {{ "2018-10-29" | date: dateFormat }}
- Updated nameserve and using the available features of cloudflare
- Website live
- Performance testing of website

## {{ "2018-10-28" | date: dateFormat }}
- NULL

## {{ "2018-10-27" | date: dateFormat }}
- NULL

## {{ "2018-10-26" | date: dateFormat }}
- Learning Purr-Data
- Registered domain - kulbhushan-chand.com
- Started process of ussing cloudflare as CDN[^n4]

[^n4]: Content Delivery Network


## {{ "2018-10-25" | date: dateFormat }}
- Configured Midi instruments in Purr-Data
- Synthesized music from MATLAB --> Purr-Data --> Midi 👍

## {{ "2018-10-24" | date: dateFormat }}
- Exploring Purr-Data[^n3]
- OSC communication sucessful from MATLAB to Purr-Data 👍
- Created patch for amplitude, frequency and midi control from arduino-sensor value 

[^n3]: Purr-Data is cross-platform application of PureData with additions  

## {{ "2018-10-23" | date: dateFormat }}
- Updated personal website theme to latest commit 

## {{ "2018-10-22" | date: dateFormat }}
- Extensive RAM test (memtest86) on HPZ440 - ~5 hrs. - SUCCESS

## {{ "2018-10-21" | date: dateFormat }}
- NULL

## {{ "2018-10-20" | date: dateFormat }}
- NULL

## {{ "2018-10-19" | date: dateFormat }}
- NULL

## {{ "2018-10-18" | date: dateFormat }}
- Exploring open source methods of sonification

## {{ "2018-10-17" | date: dateFormat }}
- Exploring [BrainBay](http://www.shifz.org/brainbay/)
- VirtualMidiSynth + soundfont installed in WS[^n2]
- WS RAM upgraded to 20GB (finally.. got the required performance for my work) 👍 

[^n2]: Workstation


## {{ "2018-10-16" | date: dateFormat }}
- Exploring [puredata](https://puredata.info/)

## {{ "2018-10-15" | date: dateFormat }}
- Implimented OSC outstream in daq-MATLAB and verified & analysed receiving stream in neuromore

## {{ "2018-10-14" | date: dateFormat }}
- Exploring [OpenViBE](http://openvibe.inria.fr/)
- Communication successful between OpenViBE(OSC send only) -- neuromore (OSC receiver)
- Neuromore community version has limited features and unsupported HRV analysis module 
- OpenViBE has OSC transmitter only
- So many trade-offs, and so little time...

## {{ "2018-10-13" | date: dateFormat }}
- NULL

## {{ "2018-10-12" | date: dateFormat }}
- Exploring [OSC protocol](https://www.aboehler.at/doku/doku.php/blog:2009:0727_install_osc_for_matlab_on_windows)
- OSC source build error, not much help in online documentation, provided dll (on sourceforge.net) not working
- Implemented OSC via UDP (help from matlabcentral)
- Communication sucessful between MATLAB(send only) -- neuromore -- OSC window app -- OSC processings app

## {{ "2018-10-11" | date: dateFormat }}
- Implemented basic working of LSL in MATLAB 👍
- Unfortunately neuromore and Open BCI does not support incoming LSL stream, instead they supports OSC protocol for input stream 🤦‍♂
- OpenVibe supports incomin LSL stream, however it is more suited for EEG signal analysis (not much of use, I'm not using EEG)

## {{ "2018-10-10" | date: dateFormat }}
- Pilot trials planning
- Learning LSL protocol - [GitHub repo](https://github.com/sccn/labstreaminglayer)

## {{ "2018-10-09" | date: dateFormat }}
- Pilot trials planning

## {{ "2018-10-08" | date: dateFormat }}
- learned more about shield.io badges

## {{ "2018-10-07" | date: dateFormat }}
- NULL

## {{ "2018-10-06" | date: dateFormat }}
- NULL

## {{ "2018-10-05" | date: dateFormat }}
- Research work extention presentation
- Started using shields.io badges

## {{ "2018-10-04" | date: dateFormat }}
- Using mp3directcut for mp3 files splitting/joining
- Giffen’s paradox

## {{ "2018-10-03" | date: dateFormat }}
- Cloudflare account setup, but needed a domain name

## {{ "2018-10-02" | date: dateFormat }}
- Read about basic workflow of automation in jekyll using npm, gulp and travis-CI, however in the end decide not to go for it because of 
  - Time investment required to learn in more detail
  - Preference for build in GitHub pages
  - Added plugins leads to more complexity and possible bugs
  - Planned to use ImageOptim for optimizing images locally

## {{ "2018-10-01" | date: dateFormat }}
- Found weird bug in bigfoot.js on personal-website. Failed attempt at debugging
- Disspointment - The electronic components procurement may not be successful. How can I prepare dish without raw materials?
- Hopeful - Workstation may get much needed RAM upgrade

## {{ "2018-09-30" | date: dateFormat }}
- Learned using npm[^n1] -- for uglifying javascript files on personal website

[^n1]: node package manager

## {{ "2018-09-29" | date: dateFormat }}
- Discussion with expert regarding biofeedback trials
- Got bigfoot.js footer working on personal website
- Started daily log entries on personal website

## {{ "2018-09-28" | date: dateFormat }}
- Learned using Travis-CI -- for automating search index building in algolia

