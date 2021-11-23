import {Color, DisplayMode, Engine, Loader, Physics, Vector} from "excalibur";
import {images, sounds} from "./resources";
import {Level} from "./Level";
import {config, ILevel} from "./config";

export enum GameState {
    INTRO,
    TITLE,
    CONTINUE,
    LEVEL,
    EDITOR,
    END,
    SETTINGS
}

export class Game {

    _cbs: ((s: GameState) => any)[] = [];
    _cbsl: ((s: ILevel) => any)[] = [];
    _levelId = 0;
    preview: boolean = false;
    loader = new Loader();
    engine = new Engine({
        displayMode: DisplayMode.FillScreen,
        backgroundColor: Color.Black,
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
            this.loader.addResource((sounds as any)[res]);
        }

        this.engine.addScene('level', new Level());
    }

    _state = localStorage["GameState"] ? Number(localStorage["GameState"]) : GameState.INTRO;

    get state(): GameState {
        return this._state;
    }

    set state(s: GameState) {
        this._state = s;
        this._cbs.forEach(cb => cb(s));
    }

    get level() {
        return config.levels[this._levelId] as ILevel;
    }

    configure() {
        Physics.acc = new Vector(0, 800);
    }

    async initialize() {

        if (localStorage["DEBUG"]) {
            this.engine.showDebug(true);
        }

        await this.engine.start(this.loader);

        console.log("loaded")

        if (this.cb) {
            console.log("call ready")
            this.cb();
        }
    }

    onChangeLevel(cb: (s: ILevel) => any) {
        this._cbsl.push(cb);
    }

    onChangeState(cb: (s: GameState) => any) {
        this._cbs.push(cb);
    }

    test(id: number, entities: any) {
        config.levels[id].entities = entities;
        this.next(id);
        this.preview = true;
        this.engine.start();
        this.engine.goToScene('level');
        this.state = GameState.LEVEL;
    }

    editor() {
        this.state = GameState.EDITOR;
    }

    next(levelId = -1) {
        if (this.preview) {
            this.preview = false;
            this.engine.stop();
            this.state = GameState.EDITOR;
            return;
        }

        if (levelId > -1) {
            this._levelId = levelId;
        } else {
            this._levelId += 1;
        }

        if (this._levelId === config.levels.length) {
            this._levelId = 0;
            this.engine.stop();
            this.state = GameState.END;
        } else {
            this._cbsl.forEach(cb => cb(this.level));
        }
    }

    start() {
        this.engine.goToScene('level');
        this.state = GameState.LEVEL;
    }

    stop() {

        this.engine.currentScene.actors.forEach(a => this.engine.currentScene.remove(a));
        this.engine.currentScene.entities.forEach(a => this.engine.currentScene.remove(a));

        this.engine.stop();
        this.state = GameState.TITLE;
    }

    cb: any;

    onReady(cb: any) {

        this.cb = cb;

        console.log("register ready")

        if (this.loader.isLoaded()) {
            cb();
        }
    }
}

export const game
    = (window as any).game
    = new Game();
