import {Animation, AnimationStrategy, SpriteSheet} from "excalibur";
import {images} from "../resources";

/**
 *
 * @param image
 * @param spriteWidth
 * @param spriteHeight
 * @param columns
 * @param rows
 */

export const sheet = (
    image: keyof typeof images,
    spriteWidth: number = 0,
    spriteHeight: number = 0,
    columns: number = 1,
    rows: number = 1,
) => SpriteSheet.fromImageSource({
    image: images[image],
    grid: {
        columns,
        rows,
        spriteWidth: !spriteWidth ? images[image].width : spriteWidth,
        spriteHeight: !spriteHeight ? images[image].height : spriteHeight
    }
});

/**
 *
 * @param x
 */

export const rand = (x: number) => Math.floor(Math.random() * x);

// ===
// ===
// ===
// ===
// ===

const default_hero_grid = {
    columns: 1,
    rows: 8,
    spriteWidth: 56,
    spriteHeight: 48
};

export const mage_sheet = SpriteSheet.fromImageSource({
    image: images.mage,
    grid: {
        columns: 21,
        rows: 5,
        spriteWidth: 48,
        spriteHeight: 48
    }
});

export const war_sheet = SpriteSheet.fromImageSource({
    image: images.war,
    grid: {
        columns: 21,
        rows: 5,
        spriteWidth: 48,
        spriteHeight: 48
    }
});

export const mirror_sheet = SpriteSheet.fromImageSource({
    image: images.mirror,
    grid: {
        columns: 1,
        rows: 7,
        spriteWidth: 64,
        spriteHeight: 128
    }
});

export const bolt_sheet = SpriteSheet.fromImageSource({
    image: images.bolt,
    grid: {
        columns: 1,
        rows: 5, // 5
        spriteWidth: 32,
        spriteHeight: 32
    }
});

export const hero_attack_sheet = SpriteSheet.fromImageSource({
    image: images.hero_attack,
    grid: {...default_hero_grid, rows: 11}
});

export const hero_attack_down_sheet = SpriteSheet.fromImageSource({
    image: images.hero_attack_down,
    grid: {...default_hero_grid, rows: 7}
});

export const hero_attack_jump_sheet = SpriteSheet.fromImageSource({
    image: images.hero_attack_jump,
    grid: {...default_hero_grid, rows: 5}
});

export const hero_idle_sheet = SpriteSheet.fromImageSource({
    image: images.hero_idle,
    grid: default_hero_grid,
});

export const heroExias_idle_sheet = SpriteSheet.fromImageSource({
    image: images.heroExias_idle,
    grid: default_hero_grid,
});

export const hero_down_sheet = SpriteSheet.fromImageSource({
    image: images.hero_down,
    grid: default_hero_grid
});

export const hero_run_sheet = SpriteSheet.fromImageSource({
    image: images.hero_run,
    grid: default_hero_grid
});

export const heroExias_run_sheet = SpriteSheet.fromImageSource({
    image: images.heroExias_run,
    grid: {...default_hero_grid, rows: 9}
})

export const hero_jump_sheet = SpriteSheet.fromImageSource({
    image: images.hero_jump,
    grid: {...default_hero_grid, rows: 12}
});

export const animations = {
    bolt: Animation.fromSpriteSheet(bolt_sheet, [0, 1, 2, 3, 4], 60),
    rose: Animation.fromSpriteSheet(sheet("rose"), [0], 100),
    fox: Animation.fromSpriteSheet(sheet("fox", 64, 64, 1, 4), [0, 1, 2, 3], 600, AnimationStrategy.PingPong),
    mirror: Animation.fromSpriteSheet(mirror_sheet, [2, 3, 4, 5, 6], 100),
    war_idle: Animation.fromSpriteSheet(war_sheet, [0, 1, 2, 3, 4, 5, 6, 7], 100),
    mage_idle: Animation.fromSpriteSheet(mage_sheet, [0, 1, 2, 3, 4, 5, 6, 7], 100),
    bubble: Animation.fromSpriteSheet(sheet("bubble"), [0], 100),
}

export type keyof_typeof_animations = keyof typeof animations;
export const animations_keys = Object.keys(animations);