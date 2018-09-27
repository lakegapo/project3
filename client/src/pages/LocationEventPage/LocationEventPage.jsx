import React, { Component } from 'react';
import axios from 'axios';

export default class LocationEventPage extends Component {
    componentDidMount() {
        const category = this.props.match.params.category;
        const citystate = this.props.match.params.citystate;
        axios.get(`/api/events/${citystate}/${category}`)
        .then(result => {
            console.log(result.data)
        })
    }
    render() {
        return (<div>Hello World</div>)
    }
}