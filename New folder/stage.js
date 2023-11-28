import {
    Stage as StageBase,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
  } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
  export default class Stage extends StageBase {
    constructor(...args) {
      super(...args);
  
      this.costumes = [
        new Costume("1", "./Stage/costumes/1.svg", { x: 240, y: 180 }),
        new Costume("2", "./Stage/costumes/2.svg", { x: 240, y: 180 }),
        new Costume("3", "./Stage/costumes/3.svg", { x: 240, y: 180 }),
        new Costume("4", "./Stage/costumes/4.svg", { x: 240, y: 180 }),
        new Costume("5", "./Stage/costumes/5.svg", { x: 240, y: 180 }),
        new Costume("6", "./Stage/costumes/6.svg", { x: 240, y: 180 })
      ];
  
      this.sounds = [new Sound("Quest.mp3", "./Stage/sounds/Quest.mp3.wav")];
  
      this.triggers = [
        new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
        new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
        new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
        new Trigger(
          Trigger.BROADCAST,
          { name: "Game Complete" },
          this.whenIReceiveGameComplete
        ),
        new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
      ];
  
      this.vars.sparkles = "no";
      this.vars.level = 1;
      this.vars.mousepointer = "yes";
      this.vars.deaths = 2639;
      this.vars.Deaths = 20;
      this.vars.time = 0;
      this.vars.Time = 100;
  
      this.watchers.deaths = new Watcher({
        label: "Deaths",
        style: "normal",
        visible: false,
        value: () => this.vars.deaths,
        x: 237,
        y: 180
      });
      this.watchers.Deaths = new Watcher({
        label: "☁ Deaths",
        style: "normal",
        visible: false,
        value: () => this.vars.Deaths,
        x: 234,
        y: 159
      });
      this.watchers.time = new Watcher({
        label: "Time",
        style: "normal",
        visible: false,
        value: () => this.vars.time,
        x: 635,
        y: 183
      });
      this.watchers.Time = new Watcher({
        label: "☁ Time",
        style: "normal",
        visible: false,
        value: () => this.vars.Time,
        x: 621,
        y: 162
      });
    }
  
    *whenGreenFlagClicked() {
      this.watchers.time.visible = false;
      this.watchers.Deaths.visible = false;
      this.watchers.deaths.visible = false;
      this.watchers.Time.visible = false;
      this.vars.deaths = 0;
      this.vars.time = 0;
      while (true) {
        this.costume = this.vars.level;
        yield;
      }
    }
  
    *whenGreenFlagClicked2() {
      while (true) {
        yield* this.playSoundUntilDone("Quest.mp3");
        yield;
      }
    }
  
    *whenIReceiveStart() {
      this.restartTimer();
    }
  
    *whenIReceiveGameComplete() {
      this.vars.time = this.timer;
      this.watchers.Time.visible = true;
      this.watchers.deaths.visible = true;
      this.watchers.time.visible = true;
      this.watchers.Deaths.visible = true;
      if (this.compare(this.vars.time, this.vars.Time) < 0) {
        this.vars.Time = this.vars.time;
      }
      if (this.compare(this.vars.deaths, this.vars.Deaths) < 0) {
        this.vars.Deaths = this.vars.deaths;
      }
    }
  
    *whenGreenFlagClicked3() {
      while (true) {
        if (this.toNumber(this.vars.level) === 6) {
          this.broadcast("Game Complete");
          return;
        }
        yield;
      }
    }
  }