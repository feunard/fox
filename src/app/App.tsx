import * as React from 'react';
import './App.scss';
import {game, GameState} from "../game/Game";
import {Intro} from "./Intro";
import {Title} from "./Title";
import {Editor} from "./Editor";
import {End} from "./End";
import {ILevel} from "../game/config";
import {Level} from "./Level";

class App extends React.Component<{}, { overlay: boolean; gameState: GameState; level: ILevel }> {
    state = {
        overlay: true,
        gameState: game.state,
        level: game.level,
    }

    componentDidMount() {
        setTimeout(async () => {
            try {
                await game.initialize();
            } catch (e) {
                console.error(e);
            }
        })
        game.onChangeLevel((level) => {
            this.setState({level});
        });
        game.onChangeState((gameState) => {
            this.setState({gameState});
        });
    }

    render() {
        const gs = this.state.gameState;

        if (gs === GameState.LEVEL) {
            return <Level level={this.state.level}/>
        }

        return (
            <div className={"overlay " + (gs === GameState.EDITOR ? "full" : "")}>
                {gs === GameState.INTRO && <Intro/>}
                {gs === GameState.TITLE && <Title/>}
                {gs === GameState.EDITOR && <Editor/>}
                {gs === GameState.END && <End/>}
            </div>
        );
    }
}

export default App;