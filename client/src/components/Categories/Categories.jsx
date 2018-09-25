import React, { Component } from 'react';
import "./Categories.css";
import {Row, Col} from "../Grid";
import { Navbar } from "../Navbar/Navbar";

class Categories extends Component {

    render() {
        return (
            <div className="categories">

                <Navbar />

                <div className="categoryTitle">Pick a Category:</div>

                <Row fluid>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Gaming</button>
                    </Col>
                </Row>
                <Row fluid>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Basketball</button>
                    </Col>
                </Row>
                <Row fluid>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Bicycle</button>
                    </Col>
                </Row>
                <Row fluid>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Canyon Runs</button>
                    </Col>
                </Row>
                <Row fluid>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Pokemon Go</button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Categories;