import React, {Component, PropTypes} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={isSaved:0}
    }
    
    render() {
        return (
            <div>           
                <div className="">              
                    <ol className="breadcrumb">
                        <li><Link to="/" className="">首页</Link></li>
                        <li><Link to="/tv" className="active">电视</Link></li>   
                        <li><Link to="/refs" className="active">Refresh</Link></li>               
                    </ol>
                    {this.props.children}
                </div>
                
            </div>       
        );
    }
}

App.propTypes = {

};

export default App;