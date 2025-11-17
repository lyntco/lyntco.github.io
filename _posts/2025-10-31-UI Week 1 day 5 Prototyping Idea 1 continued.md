---
title: Ultimate Indie - Week 1 day 5 Prototyping Boba Tycoon continued
date: 2025-10-31 14:48:00 +1100
published: true
image: /assets/img/posts/2025-10-30/boba15.gif
categories: [Gamedev, Ultimate Indie]
tags: [gamedev, Ultimate Indie, GameDev.tv, prototypes, boba tycoon, feedback]
---

My blog broke last night but I found a [Github issue](https://github.com/cotes2020/jekyll-theme-chirpy/issues/968) this morning where someone had a similar problem so all I had to do was change my Pages Source to Github Actions instead of from a branch.

I'm so glad because I expected it would take me a few hours to fix and instead it was very quick! Writing a blog has helped me in keeping on task but it's been a bit of a pain dealing with the deploy bugs. I hope they are sorted now.

Back to the prototyping!

## Mega early Feedback

I decided to ask if the prototype where it is was too early and [Stefan](https://x.com/Imphenzia) said "it's never too early to get feedback, but the quality and helpfulness of feedback may improve if you further iterate." so I'm glad I asked for the clarification!
I asked Mike to play test it already, and he and Stefan offered some suggestions:

- Tea fill speed way too slow
- Pour slider instead of button
- Add indicator for ingredient amounts
- Gradual difficulty increase to make the right mixes as the speed and requests pick up

It's funny how quickly I adjusted to the speed the cup filled but as soon as I watched someone else play it it felt *really* slow. He didn't give me feedback until I asked specifically "Did it feel too fast? Too slow?" but he said "Way too slow" for the tea and gave me a great suggestion to make the hold button a slider to vary the speed instead so if you got good you could fill a cup really quick. I really liked this and feel like it's a good way to add skill to the interactions.

Thinking of this, I played a demo of a sewing game called [Dressmaker](https://store.steampowered.com/app/4019220/Dressmaker/) and they had this great game feel of clicking your mouse down and dragging forward - it was a really genius way to feel like you were sewing the fabric! I wonder if I could get a similar feel with the pouring.

The indicator for ingredients was indeed part of the tiny mock up but I didn't know how to add these to start. I think they will need to be at variable points where you can pass in break point percentages like `[15, 30, 55]` to make up to 100%. Or a moving indicator of the one you are currently pouring.

There is also the question of if I should give a prescribed order of filling ingredients. I will have to try each way. I know pizza games **need** a specific order because the sauce can't go on last for example.

The last suggestion is a bit further down the line for me but I'll keep it in mind!

## More ideas

I also woke up earlier than normal at 6:30am and my mind was swirling with more ideas so I got up:

- "Orders please" 
- Animations
- Customer name Label

Because I don't like writing a lot next to bullet points I'll expand under here:

### "Orders please" 
A slight inspiration from Papers Please: a day is limited time where you can gain more money from filling as many orders as possible. If you are skilled you can get a lot of money very early! I think I'd like there to be text bubbles almost like an iOS message bubble up on the left where they state their order.

![Desktop View]({{ site.url }}/assets/img/posts/2025-10-31/papers-please.avif){: w="400" }
_Papers please_

### Animations
Right now the 3D doodads on the left are static. I wanted to notes some ideas down here on animation:

- daylight changing through the stan open time
- customers moving in and out of frame to the stand and lining up
- jugs tilting and filling a cup that match up with what you are doing on the side


![Desktop View]({{ site.url }}/assets/img/posts/2025-10-31/boba-anim.gif){: w="400" }
_This is a faked animation, I'm just moving it manually with the gizmo in the scene_

### Customer Name Label
I got the inspiration for this one from when people were talking about their [misspelled names on Starbucks cups](https://www.buzzfeed.com/jonmichaelpoff/starbucks-name-fails). I'm not 100% sure on how this one would work, I was thinking you would have to write the name on the cup or label and it shows up on the cup, and you'd have to type their name out to call to them to retrieve their drink.

![Desktop View]({{ site.url }}/assets/img/posts/2025-10-31/starbucks.webp){: w="400" }
_Latte for Gross!_

Another way could be that the label is auto generated and you have to guess what the name is and type it back out to them. Voice recognition may be a funny thing too!


All in all I think the new ideas are additions but changing the player interaction is an iteration and I think I need to be iterating rather than adding at the moment! So I'll be focusing on pouring with sliders and adding indicators first up.

I keep thinking I have more time than I have but I have a Halloween Party to go to tonight so this is a short entry today!

