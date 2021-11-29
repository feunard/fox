import {ImageSource, Sound} from "excalibur";

export const images = {
    bolt: new ImageSource(require("./bolt.png").default),
    bolt2: new ImageSource(require("./bolt2.png").default),
    hero_idle: new ImageSource(require("./hero_idle.png").default),
    heroExias_idle: new ImageSource(require("./Exias_idleV4.png").default),
    hero_run: new ImageSource(require("./hero_run.png").default),
    heroExias_run: new ImageSource(require("./Exias_runningV2.png").default),
    hero_jump: new ImageSource(require("./hero_jump.png").default),
    hero_down: new ImageSource(require("./hero_down.png").default),
    hero_attack: new ImageSource(require("./hero_attack.png").default),
    hero_attack_down: new ImageSource(require("./hero_down_attack.png").default),
    hero_attack_jump: new ImageSource(require("./hero_jump_attack.png").default),
    rose: new ImageSource(require("./rose.png").default),
    fox: new ImageSource(require("./fox.png").default),
    mirror: new ImageSource(require("./mirror.png").default),
    mage: new ImageSource(require("./skeleton_mage.png").default),
    war: new ImageSource(require("./skeleton_warrior.png").default),
    bubble: new ImageSource(require("./bubble.png").default),
    crystal: new ImageSource(require("./red_crystal.png").default),
    xiao: new ImageSource(require("./xiao.png").default),
    dragon: new ImageSource(require("./dragon.png").default),
    kstore: new ImageSource(require("./kstore.png").default),
    acidpop: new ImageSource(require("./acidpop.png").default),
    shrek: new ImageSource(require("./shrek.png").default),
    inf1: new ImageSource(require("./inf1.png").default),
    inf2: new ImageSource(require("./inf2.png").default),
    //
    avatar_fox: new ImageSource(require("./avatar/fox.png").default),
    avatar_xiao: new ImageSource(require("./avatar/xiao.png").default),
    avatar_dragon: new ImageSource(require("./avatar/dragon.png").default),
    avatar_kstore: new ImageSource(require("./avatar/kstore.png").default),
    avatar_acidpop: new ImageSource(require("./avatar/acidpop.png").default),
    avatar_shrek: new ImageSource(require("./avatar/shrek.png").default),
    avatar_skeleton: new ImageSource(require("./avatar/skeleton.png").default),
    avatar_chest: new ImageSource(require("./avatar/chest.png").default),
}

export const sounds = {
    sky: new Sound(require("./audio/sky.mp3").default),
    s2043: new Sound(require("./audio/2043.wav").default),
    s2045: new Sound(require("./audio/2045.wav").default),
    firebolt: new Sound(require("./audio/firebolt.wav").default),
    jump_0: new Sound(require("./audio/1010100_03_cn.ogg").default),
    jump_1: new Sound(require("./audio/1010100_04_cn.ogg").default),
    jump_2: new Sound(require("./audio/1010100_05_cn.ogg").default),
    fox_1: new Sound(require("./audio/357_01_en.ogg").default),
    fox_2: new Sound(require("./audio/357_02_en.ogg").default),
    fox_3: new Sound(require("./audio/357_03_en.ogg").default),
    hero_dead: new Sound(require("./audio/500003_cn.ogg").default),
    s264: new Sound(require("./audio/264.WAV").default),
    s268: new Sound(require("./audio/268.WAV").default),
    s270: new Sound(require("./audio/270.WAV").default),
    s278: new Sound(require("./audio/278.WAV").default),
    s279: new Sound(require("./audio/279.WAV").default),
    s281: new Sound(require("./audio/281.WAV").default),
    s282: new Sound(require("./audio/282.WAV").default),
    s283: new Sound(require("./audio/283.WAV").default),
    transi: new Sound(require("./audio/transi.wav").default),
    crystal: new Sound(require("./audio/crystal.wav").default),
    boom: new Sound(require("./audio/boom.wav").default),
    hit_light: new Sound(require("./audio/hit_light.wav").default),
    //
    music_1: new Sound(require("./audio/crystalsong.mp3").default),
    music_army: new Sound(require("./audio/music_army.ogg").default),
    music_dragon: new Sound(require("./audio/music_dragon.mp3").default),
    music_soldier: new Sound(require("./audio/music_soldier.ogg").default),
    music_boss: new Sound(require("./audio/music_boss.mp3").default),
    music_end: new Sound(require("./audio/music_end.ogg").default),
}