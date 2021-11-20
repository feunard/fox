import {Actor, CollisionType, Color, Engine, Shape, vec} from 'excalibur';
import type {IEntityFloor} from "../config";

export class Floor extends Actor {
    static n = 0;

    constructor(
        private e: IEntityFloor
    ) {
        super({
            name: 'floor_' + (Floor.n++),
            pos: vec(e.x + e.width / 2, e.y + e.height / 2),
            collider: Shape.Box(e.width, e.height),
            collisionType: e.physic ? CollisionType.Active : CollisionType.Fixed,
            color: Color.White,
            width: e.width,
            height: e.height,
        });
    }

    dir = -1;

    onPreUpdate(_engine: Engine, _delta: number) {
        if (this.e.move) {
            if (this.pos.y <= this.e.y) {
                this.dir = 1;
            }
            if (this.pos.y >= (this.e.y + this.e.move.y)) {
                this.dir = -1;
            }
            this.vel.y = (this.e.move.speed || 100) * this.dir;
        }
    }
}