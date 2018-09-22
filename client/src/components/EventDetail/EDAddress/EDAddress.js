import React, { Component } from 'react';
import './EDAddress.css';

let edit = 1;


class EDAddress extends Component {
    render() {
        return (
            <div id="EDAddress" className="container">
                {(edit === 1) ? (
                    <div className="row justify-content-center">
                        <div className="col-sm-auto">
                            <form>
                                <div className="form-group">
                                    <textarea className="form-control" id="editAddress" rows="1"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>

                ) : (
                        <h2 id="eventAddress">69 SoFine St. CA, 90745</h2>
                    )}

            </div>
        );
    }
}

export default EDAddress;