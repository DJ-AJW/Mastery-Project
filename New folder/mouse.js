/* eslint-disable require-yield, eqeqeq */

import {
    Sprite,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
  } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
  export default class Mouse extends Sprite {
    constructor(...args) {
      super(...args);
  
      this.costumes = [
        new Costume("costume1", "./Mouse/costumes/costume1.svg", { x: 7, y: 6 }),
        new Costume("costume2", "./Mouse/costumes/costume2.svg", { x: 7, y: 6 }),
        new Costume("costume3", "./Mouse/costumes/costume3.svg", { x: 7, y: 6 }),
        new Costume("costume4", "./Mouse/costumes/costume4.svg", { x: 7, y: 6 })
      ];
  
      this.sounds = [new Sound("pop", "./Mouse/sounds/pop.wav")];
  
      this.triggers = [
        new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
        new Trigger(Trigger.CLONE_START, this.startAsClone),
        new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
        new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay),
        new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay2),
        new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
        new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay3),
        new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay4),
        new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay5),
        new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay6),
        new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay7)
      ];
    }
  
    *whenGreenFlagClicked() {
      this.stage.vars.mousepointer = "yes";
      this.stage.vars.level = 1;
      this.costume = "costume1";
      while (true) {
        if (this.toString(this.stage.vars.mousepointer) === "yes") {
          this.goto(this.mouse.x, this.mouse.y);
        }
        yield;
      }
    }
  
    *startAsClone() {
      this.effects.ghost = 0;
      this.costume = this.random(2, 4);
      yield* this.wait(0.5);
      for (let i = 0; i < 4; i++) {
        this.effects.ghost += 25;
        yield;
      }
      this.deleteThisClone();
    }
  
    *whenGreenFlagClicked2() {
      this.effects.ghost = 100;
      this.stage.vars.sparkles = "yes";
      while (true) {
        if (this.toString(this.stage.vars.sparkles) === "yes") {
          yield* this.wait(0.07);
          this.createClone();
        } else {
          return;
        }
        yield;
      }
    }
  
    *whenIReceivePlay() {
      while (true) {
        if (!(this.toNumber(this.stage.vars.level) === 6)) {
          if (this.touching(Color.rgb(186, 255, 170))) {
            if (!(this.toNumber(this.stage.vars.level) === 5)) {
              this.stage.vars.level++;
              this.broadcast("NextLevel");
            } else {
              this.stage.vars.level++;
            }
          }
        }
        yield;
      }
    }
  
    *whenIReceivePlay2() {
      while (true) {
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.broadcast("TryAgain");
          this.stage.vars.deaths++;
        }
        yield;
      }
    }
  
    *whenIReceiveStart() {
      this.effects.ghost = 0;
    }
  
    *whenIReceivePlay3() {
      while (true) {
        if (this.toNumber(this.stage.vars.level) === 4) {
          if (this.touching(Color.rgb(255, 208, 226))) {
            this.goto(218, 157);
            this.stage.vars.mousepointer = "no";
            while (!this.touching("mouse")) {
              yield;
            }
            this.stage.vars.mousepointer = "yes";
          }
        }
        yield;
      }
    }
  
    *whenIReceivePlay4() {
      while (true) {
        if (this.toNumber(this.stage.vars.level) === 5) {
          if (this.touching(Color.rgb(255, 255, 153))) {
            this.goto(-222, 104);
            this.stage.vars.mousepointer = "no";
            while (!this.touching("mouse")) {
              yield;
            }
            this.stage.vars.mousepointer = "yes";
          }
        }
        yield;
      }
    }
  
    *whenIReceivePlay5() {
      while (true) {
        if (this.toNumber(this.stage.vars.level) === 5) {
          if (this.touching(Color.rgb(78, 133, 255))) {
            this.goto(146, 38);
            this.stage.vars.mousepointer = "no";
            while (!this.touching("mouse")) {
              yield;
            }
            this.stage.vars.mousepointer = "yes";
          }
        }
        yield;
      }
    }
  
    *whenIReceivePlay6() {
      while (true) {
        if (this.toNumber(this.stage.vars.level) === 5) {
          if (this.touching(Color.rgb(255, 198, 251))) {
            this.goto(218, -117);
            this.stage.vars.mousepointer = "no";
            while (!this.touching("mouse")) {
              yield;
            }
            this.stage.vars.mousepointer = "yes";
          }
        }
        yield;
      }
    }
  
    *whenIReceivePlay7() {
      while (true) {
        if (this.toNumber(this.stage.vars.level) === 5) {
          if (this.touching(Color.rgb(207, 170, 255))) {
            this.goto(217, -158);
            this.stage.vars.mousepointer = "no";
            while (!this.touching("mouse")) {
              yield;
            }
            this.stage.vars.mousepointer = "yes";
          }
        }
        yield;
      }
    }
  }