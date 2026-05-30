---
title: "20 Game Challenge Game 1: Pong Part 2"
date: 2026-05-30 17:43:00 +1100
published: true
image: /assets/img/posts/2026/05-may/2026-05-39/godot-02.gif
categories: [Gamedev, 20 Games Challenge]
tags: [gamedev, 20 Games Challenge, Godot, beginner gamedev]
---

I made good progress yesterday, and I caught myself going to Distractionland when I couldn't immediately make sense of the collision and rigidbody weird bug. Luckily I noticed and came back, and I fixed it so I am not really stuck, I'm just on to the next part. Here are the updated checklists:

Learning goals for [Pong](https://20_games_challenge.gitlab.io/challenge/#1):

- [x] Using your game engine of choice!
- [ ] Creating and destroying objects.
- [ ] Processing player input and moving objects on screen.
- [ ] Detecting and reacting to collisions.

Requirements:
- [x] Create an arena with two walls and a divider.
- [x] Add a paddle on either end of the play field. Use player inputs to move the paddles up and down.
- [ ] Add a ball that moves around the playfield and bounces off of the paddles and walls.
- [ ] Detect when the ball leaves the playfield. Assign a point to the player who scored.
- [ ] Track and display the score for each player.

The part I got up to was making the ball move, so lets get back to it.

## Kicking off the ball

I _think_ what I want to do is apply a force to the ball at the start of the game? I actually did a bit of a test with it last night but it had to be every physics frame which didn't feel right. I found apply_impulse(), which seems to be what I'm interested in based on [this guide](https://kidscancode.org/godot_recipes/4.x/physics/character_vs_rigid/#applying-impulses):

![Desktop View]({{ site.url }}/assets/img/posts/2026/05-may/2026-05-30/godot-01.png){: w="550" h="200" }

And it mostly works - it moves the ball. However, there is a problem: it pushes the paddle when it hits it.

![Desktop View]({{ site.url }}/assets/img/posts/2026/05-may/2026-05-30/godot-02.gif){: w="350" h="200" }