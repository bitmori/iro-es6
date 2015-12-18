import React from "react";
import {Constants, Reduxette} from "./reduxette";
import {Glyph} from "elemental";
import Romaji from "romaji";
import rgb from "./utils";

export default class PageNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedName: "IRO",
            selectedKana: "IRO",
            selectedValue: 0xFFFFFF
        };
    }

    _onChange() {
        let actionType = Reduxette.getState().actionType;
        let payload = Reduxette.getState()[actionType];
        switch (actionType) {
            case Constants.IRO_COLOR_SELECTED:
                this.setState({
                    selectedName: payload.name,
                    selectedKana: payload.kana,
                    selectedValue: payload.value
                });
                break;
            default:
                console.log("Not recognizable actionType");
        }
    }

    componentDidMount() {
        this.unsubscribe = Reduxette.subscribe(() => this._onChange());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        let swatchStyle = {
            backgroundColor: rgb(this.state.selectedValue)
        };
        return (
            <nav className="primary-nav">
                <a href="https://github.com/neonmori" target="_blank" title="View on GitHub"
                   className="primary-nav-icon">
                    <Glyph icon="mark-github"/>
                </a>
                <div className="primary-nav-icon right">
                    <div className="primary-nav-swatch" style={swatchStyle}></div>
                    {Romaji.fromKana(this.state.selectedKana)}
                </div>
            </nav>
        );
    }
};