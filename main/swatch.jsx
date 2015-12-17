import React from "react";
import {Col, Card} from "elemental";
import {Actions} from "./flux/dispatcher";
import rgb from "./utils";

export default class Swatch extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        Actions.updatePageNav(this.props.data.name, this.props.data.kana, this.props.data.value);
        //IroActions.updatePageNav(this.props.data.name, this.props.data.kana, this.props.data.value);
    }

    render() {
        let swatchStyle = {
            width: 15,
            height: 35,
            backgroundColor: rgb(this.props.data.value)
        };
        let textStyle = {
            paddingLeft: 5
        };
        let cardStyle = {
            cursor: "pointer"
        };
        return (
            <Col xs="50%" sm="33%">
                <Card style={cardStyle} onClick={ e => this.handleClick(e) } >
                    <table><tbody>
                    <tr>
                        <td>
                            <div style={swatchStyle}></div>
                        </td>
                        <td style={textStyle}>
                            {this.props.data.name} / {this.props.data.kana}
                            <br/>
                            {rgb(this.props.data.value)}
                        </td>
                    </tr>
                    </tbody></table>
                </Card></Col>
        );
    }
};