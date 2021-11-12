import {Color, ImageSource, Loader, Sound, SpriteSheet} from "excalibur";

const botFile = require('../res/excalibot.png').default;
const botRedFile = require('../res/excalibot-red.png').default;
const baddieFile = require('../res/baddie.png').default;
const blockFile = require('../res/block.png').default;
const npcFile = require('../res/npc.png').default;
const jumpSound = require('../res/jump.wav').default;
const hitSound = require('../res/hurt.wav').default;
const gotEmSound = require('../res/gottem.wav').default;

const images: { [key: string]: ImageSource } = {
    bot: new ImageSource(botFile),
    botRed: new ImageSource(botRedFile),
    baddie: new ImageSource(baddieFile),
    block: new ImageSource(blockFile),
    npc: new ImageSource(npcFile),
    hero_idle: new ImageSource(require("../res/hero_idle.png").default),
    hero_run: new ImageSource(require("../res/hero_run.png").default),
    hero_jump: new ImageSource(require("../res/hero_jump.png").default),
    hero_down: new ImageSource(require("../res/hero_down.png").default),
}

const default_grid = {
    columns: 1,
    rows: 8,
    spriteWidth: 56,
    spriteHeight: 48
};

export const hero_idle_sheet = SpriteSheet.fromImageSource({
    image: images.hero_idle,
    grid: default_grid
});

export const hero_down_sheet = SpriteSheet.fromImageSource({
    image: images.hero_down,
    grid: default_grid
});


export const hero_run_sheet = SpriteSheet.fromImageSource({
    image: images.hero_run,
    grid: default_grid
});

export const hero_jump_sheet = SpriteSheet.fromImageSource({
    image: images.hero_jump,
    grid: {...default_grid, rows: 12}
});

export const sounds: { [key: string]: Sound } = {
    jump: new Sound(jumpSound),
    hit: new Sound(hitSound),
    gotEm: new Sound(gotEmSound)
}

export class CustomLoader extends Loader {
    draw(ctx: CanvasRenderingContext2D) {
        super.draw(ctx);
    }
}

export const loader = new CustomLoader();
loader.playButtonText = '';
loader.backgroundColor = '#ffffff'
loader.logo = '';
loader.loadingBarColor = Color.fromHex("#666666")

const botSpriteSheet = SpriteSheet.fromImageSource({
    image: images.bot,
    grid: {
        columns: 8,
        rows: 1,
        spriteWidth: 32,
        spriteHeight: 32
    }
});
const botRedSpriteSheet = SpriteSheet.fromImageSource({
    image: images.botRed,
    grid: {
        columns: 8,
        rows: 1,
        spriteWidth: 32,
        spriteHeight: 32
    }
});
const baddieSpriteSheet = SpriteSheet.fromImageSource({
    image: images.baddie,
    grid: {
        columns: 6,
        rows: 1,
        spriteWidth: 32,
        spriteHeight: 32
    }
});
const blockSprite = images.block.toSprite();
const npcSprite = images.npc.toSprite();

for (const res in images) {
    loader.addResource(images[res]);
}
for (const res in sounds) {
    loader.addResource(sounds[res]);
}

export {botSpriteSheet, botRedSpriteSheet, baddieSpriteSheet, blockSprite, npcSprite}