import React, { Component } from 'react';
import "./Categories.css";
import { Row, Col } from "../Grid";

class Categories extends Component {

    
    state = {
        citystate: "",
    }
    
    // Grabbing citystate
    handleCityStateChange = (event) => {
        this.setState({ citystate: event.target.value });
        console.log(this.state.citystate);
    }

    render() {
        return (
            <div className="categories">
                <div className="appHeader">Who's Down?</div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="form-row form-group justify-content-center">
                            <div className="col-sm-6">
                                <label htmlFor="location">Select Location:</label>
                                <select id="inputCityState" className="form-control" onChange={this.handleCityStateChange}>
                                    <option defaultValue>Choose...</option>
                                    <option>Irvine, CA</option>
                                    <option>Los Angeles, CA</option>
                                    <option>Orange, CA</option>
                                    <option>San Francisco, CA</option>
                                    <option>Las Vegas, NV</option>
                                    <option>Phoenix, AZ</option>
                                    <option>Portland, OR</option>
                                    <option>Seattle, WA</option>
                                    <option>San Diego, CA</option>
                                    <option>Blood Gulch, H2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="categoryTitle">Pick a Category:</div>

                <Row>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Gaming</button>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Basketball</button>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Bicycle</button>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Canyon Runs</button>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <button className="btn btn-lg btnCategories">Pokemon Go</button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Categories;