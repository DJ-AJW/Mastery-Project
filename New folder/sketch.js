import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Menu from "./Menu/Menu.js";
import PlayButton from "./PlayButton/PlayButton.js";
import Mouse from "./Mouse/Mouse.js";
import TryAgain from "./TryAgain/TryAgain.js";
import Start from "./Start/Start.js";
import NextLevel from "./NextLevel/NextLevel.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Menu: new Menu({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  PlayButton: new PlayButton({
    x: 2,
    y: -0.05000000000001137,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 140,
    visible: true,
    layerOrder: 3
  }),
  Mouse: new Mouse({
    x: -240,
    y: 134,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  TryAgain: new TryAgain({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Start: new Start({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  NextLevel: new NextLevel({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;