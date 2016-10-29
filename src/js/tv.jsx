import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import '../sass/bootstrap';
import '../sass/index';
class Tv extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={}
        console.log(this.props.history)

    }
    
    render() {
        return (
            <div> 
                <dl>
                    <dt>电视节目列表</dt>
                    <dd>{this.props.children}</dd>
                </dl>                                                         
            </div>
        );
    }
}

Tv.propTypes = {

};

export default Tv;