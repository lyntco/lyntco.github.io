---
title: "20 Game Challenge Game 1: Pong Part 2"
date: 2026-05-30 21:43:00 +1100
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

The guide I mentioned earlier says that by default, a CharacterBody2D moved with move_and_collide() will not push any RigidBody2D it collides with. 
What? That is kinda strange and not what I'd expect. At least I know this now! If I use move_and_slide() it doesn't move it quite as much, bit it still does and it shouldn't at all.

I have decided to force it back to its position by storing the start x position and updating it to be that every frame.

![Desktop View]({{ site.url }}/assets/img/posts/2026/05-may/2026-05-30/godot-03.png){: w="350" h="200" }

Surely there is a better way but for now it works. And the ball is bouncing off the paddles, it kinda seems like the paddles have a bit of bouncy feedback now which is kinda cool.

![Desktop View]({{ site.url }}/assets/img/posts/2026/05-may/2026-05-30/godot-04.gif){: w="350" h="200" }

Next problems: when the ball hits a top or bottom wall, it bounces perfectly vertically, meaning the game will never end, and the speed of the ball is really inconsistent.

## Fixing the balls bounce off the top and bottom

At this point I will mention I added a physics material to the Ball RigidBody2d and added bounce. Otherwise it will continue to push the paddle:

![Desktop View]({{ site.url }}/assets/img/posts/2026/05-may/2026-05-30/godot-05.png){: w="350" h="200" }

I actually have a inkling that a Rigidbody2d will add these extra things I have to write, like fixing the speed, or fixing the angle of bounce. I want to try this with a Character2D before I try those. I found a [suggestion](https://www.reddit.com/r/godot/comments/16sl37f/comment/k2a39p0/) from someone asking a question on reddit that seems like it may be what I need.

I'll follow this tomorrow as it's 10pm! Didnt get too much time on it today but I want to do a bit by bit daily.
