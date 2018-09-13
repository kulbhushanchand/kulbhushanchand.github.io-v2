---
title: <i class="fab fa-readme"></i> The insufferable environment at hostel
comments: true
toc: true
toc_sticky: true
toc_label: #"Unique Title"
toc_icon:  # corresponding Font Awesome icon name (without fa prefix)
categories:
  - articles
tags:
  - arduino
  - project
author_profile: #false
last_modified_at: 2018-09-05T20:11:06+05:30
header:
  teaser: assets/images/posts/articles/hostel.jpg
---


## Environment at my hostel
In Punjab state, the weather ranges from *scorching summers* to *shivery winters*. At the beginning of rainy season (here we have 5 seasons in a year, diversity at its best), if it not raining, it is very humid. 



The high amount of humidity in the air will decrease the rate of perspiration (or evaporaton of sweat from the skin). This will create a very uncomfortable situation because body needs to cool-off via perspiration.

The very simplified (bare minimum and not-exact) body's thermoregulation (temperature regulation)can be descibed in following steps -
1. Activity inside the body creates heat
2. Brain senses the increase in internal temperature and triggers the sweat glands to release sweat.
3. Skin cools off as sweat evaporates from the skin.
4. Step 2 and 3 is repeated until the internal temperature comes below threshold.

<div class="mermaid">
graph TD;
A[Physical/Mental activity] -->|Heat generated| B(Increase in internal temperature);
B --> C(Brain senses rise in temperature);
C --> D{Is temperature > threshold};
D -->|Yes| E[Activate sweat glands];
D -->|No| F[fa:fa-car Deactivates sweat glands];
E --> G(Body cools off via perspiration);
G --> C;
F --> C;
</div>

However, high humidity means air is already have enough water vapour to hold, and requires relatively less to saturate. That means less of sweat evaporates and goes to air at high humidity.


I stays in campus hostel, and students are not allowed to have air-coolers in the room. So it did become uncomortable at aforementioned times. So, I decided to check the temperature and humidity in my room to clear the following points-
1. What is nominal temperature and humidity in my room during uncomfortable (high humid) weather?
2. How much there is change in temperature and humidity upon using ceiling fan and opening windows for a while?
3. Should I do somethinng to change the environment in my room?

```javascript
var kb = chand;
```

