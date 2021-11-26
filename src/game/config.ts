import {Input} from "excalibur";
import {levels} from "./levels";

export const config = {
    // --
    levels: levels,
    // --
    hero: 0,
    // --
    keybinds: {
        sit: [
            Input.Keys.S,
            Input.Keys.Down,
            Input.Keys.ShiftLeft
        ],
        left: [
            Input.Keys.A,
            Input.Keys.Q,
            Input.Keys.Left
        ],
        up: [
            Input.Keys.Up,
            Input.Keys.W,
            Input.Keys.Z
        ],
        down: [
            Input.Keys.Down,
            Input.Keys.S
        ],
        right: [
            Input.Keys.D,
            Input.Keys.Right
        ],
        jump: [
            Input.Keys.Up,
            Input.Keys.Space,
            Input.Keys.Z,
            Input.Keys.W,
        ],
        fire: [
            Input.Keys.E,
        ]
    },
    //
    hair_color: 0,
    music: 1,
    sound: 1,
    currentLevel: 0,
    canFirebolt: false,
    canDoubleJump: false,
    canSpeed: false,
}

export type typeof_config = typeof config;
export type keyof_typeof_config = keyof typeof config;

if (localStorage.getItem("$config")) {
    try {
        const obj = JSON.parse(localStorage.getItem("$config") || "{}");
        Object.assign(config, obj);
        console.log("config::load config loader")
    } catch (e) {
        console.log("config::load error bad format")
        localStorage.removeItem("$config");
    }
}

export const config_set = (c: Partial<typeof_config>) => {
    Object.assign(config, c);
    localStorage.setItem("$config", JSON.stringify({
        ...config,
        levels: undefined
    }));
}