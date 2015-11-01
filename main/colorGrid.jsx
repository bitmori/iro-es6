import React from "react";
import {Row, Col, Card, Pill, Container} from 'elemental';
import Swatch from "./swatch";

export default class ColorGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let swatches = this.props.data.map((data, id) => {
            return (
                <Swatch data={data} key={id} />
            );
        });

        return (
            <Container maxWidth={900} className="color-container">
                <Row>
                    {swatches}
                </Row>
            </Container>
        );
    }
};