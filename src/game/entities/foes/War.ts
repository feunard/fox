import {Actor, Animation, CollisionType, Engine, Scene, Shape, Side, vec, Vector} from "excalibur";
import {animations} from "../../resources";
import {IEntityFoe} from "../../interfaces";
import {FloorAware} from "../misc/Floor";
import {Direction} from "../misc/Bolt";
import {Hero} from "../Hero";

export class War extends Actor {
    floor = new FloorAware(this);
    direction = 0;
    attack!: Animation;
    lock = false;

    constructor(private e: IEntityFoe) {
        super({
            name: "war",
            pos: vec(e.x + e.width / 2, e.y + e.height / 2),
            width: e.width,
            height: e.height,
            collisionType: CollisionType.Active,
            collider: Shape.Box(
                e.width - 48,
                e.height - 32,
                Vector.Half,
                vec(10, 6)
            ),
        });
    }

    onInitialize(_engine: Engine) {
        super.onInitialize(_engine);
        this.direction = !this.e.data2 ? Direction.LEFT : Direction.RIGHT;

        const idle = animations.war_idle.clone();
        const walk = animations.war_walk.clone();
        const attack = animations.war_attack.clone();
        walk.scale = vec(2, 2);
        idle.scale = vec(2, 2);
        attack.scale = vec(2, 2);
        idle.flipHorizontal = this.direction !== Direction.RIGHT;
        walk.flipHorizontal = this.direction !== Direction.RIGHT;
        attack.flipHorizontal = this.direction !== Direction.RIGHT;

        this.graphics.add("idle", idle);
        this.graphics.add("walk", walk);
        this.graphics.add("attack", attack);
        this.graphics.use("idle");

        this.on("precollision", (ev) => {
            if (ev.side === Side.Left || ev.side === Side.Right) {
                const allowed = ["floor", "mage", "war"]
                if (allowed.includes(ev.other.name)) {
                    this.direction = this.direction === Direction.RIGHT
                        ? Direction.LEFT
                        : Direction.RIGHT;
                    idle.flipHorizontal = this.direction !== Direction.RIGHT;
                    walk.flipHorizontal = this.direction !== Direction.RIGHT;
                    attack.flipHorizontal = this.direction !== Direction.RIGHT;
                }
                if (ev.other.name === "hero" && !this.lock) {
                    this.lock = true;
                    this.graphics.use("attack");
                    setTimeout(() => {
                        this.lock = false;
                        (ev.other as Hero).dead();
                    }, 500);
                }
            }
        })
    }

    onPreKill(_scene: Scene) {
        super.onPreKill(_scene);
    }

    onPreUpdate(_engine: Engine, _delta: number) {
        super.onPreUpdate(_engine, _delta);

        if (this.pos.y > 10000) {
            this.kill();
        }

        if (this.pos.y < -2000) {
            this.kill();
        }

        this.vel.x = 0;

        this.vel.x += (this.e.data1
            ? Number(this.e.data1)
            : 100 * this.direction)

        if (!this.lock) {
            if (this.vel.x > 0 || this.vel.x < 0) {
                this.graphics.use("walk");
            } else {
                this.graphics.use("idle");
            }
        }

        this.floor.update();
    }
}