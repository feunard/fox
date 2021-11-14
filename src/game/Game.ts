import {Color, Engine, Loader, Physics, Vector} from "excalibur";
import {images, sounds} from "../demo/resources";
import {Level} from "../demo/level";
import {Editor} from "./Editor";

export enum GameState {
    INTRO,
    TITLE,
    CONTINUE,
    LEVEL,
    EDITOR,
    END
}

export class Game {

    levels = [{}];

    evs: ((s: GameState) => any)[] = [];

    _state = GameState.INTRO;
    currentLevel = 0;

    loader = new Loader();

    engine = new Engine({
        backgroundColor: Color.Transparent,
        width: 1200,
        height: 600,
        suppressPlayButton: true,
        suppressConsoleBootMessage: true,
        antialiasing: true,
        canvasElementId: "game"
    });

    constructor() {
        this.configure();

        this.loader.playButtonText = '';
        this.loader.backgroundColor = '#ffffff'
        this.loader.logo = '';
        this.loader.loadingBarColor = Color.fromHex("#666666")

        for (const res in images) {
            this.loader.addResource(images[res]);
        }
        for (const res in sounds) {
            this.loader.addResource(sounds[res]);
        }

        this.engine.addScene('editor', new Editor());
        this.engine.addScene('level', new Level());
    }

    configure() {
        Physics.acc = new Vector(0, 800);
    }

    initialize() {
        return this.engine.start(this.loader);
    }

    get state(): GameState {
        return this._state;
    }

    set state(s: GameState) {
        this._state = s;
        this.evs.forEach(cb => cb(s));
    }

    onStateChange(cb: (s: GameState) => any) {
        this.evs.push(cb);
    }

    start() {
        this.engine.goToScene('level');
        this.state = GameState.LEVEL;
    }

    editor() {
        this.engine.goToScene('editor');
        this.state = GameState.EDITOR;
    }

    next() {
        if (this.currentLevel < this.levels.length - 2) {
            this.currentLevel += 1;
        } else {
            this.state = GameState.END;
        }
    }
}

export const game
    = (window as any).game
    = new Game();
