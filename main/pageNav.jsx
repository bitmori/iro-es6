import React from "react";
import IroStore from "./flux/store";
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
        this.setState({
            selectedName: IroStore.getSelectedColor().name,
            selectedKana: IroStore.getSelectedColor().kana,
            selectedValue: IroStore.getSelectedColor().value
        });
    }

    componentDidMount () {
        IroStore.addChangeListener(() => this._onChange());
    }
    componentWillUnmount () {
        IroStore.removeChangeListener(() => this._onChange());
    }

    render () {
        let swatchStyle = {
            backgroundColor: rgb(this.state.selectedValue)
        };
        return (
            <nav className="primary-nav">
                <a href="https://github.com/neonmori" target="_blank" title="View on GitHub" className="primary-nav-icon">
                    <Glyph icon="mark-github" />
                </a>
                <div className="primary-nav-icon right">
                    <div className="primary-nav-swatch" style={swatchStyle}></div>
                    {Romaji.fromKana(this.state.selectedKana)}
                </div>
            </nav>
        );
    }
};