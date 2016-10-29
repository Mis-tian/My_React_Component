import React, {Component, PropTypes} from 'react';
import ReactPullToRefresh from '../component/ReactPullToRefresh';
class Show extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={}
    }
    
    componentWillMount() {
        console.log( this.props.params );
    }
	async handleRefresh(resolve, reject) {

		let scrop = this;

		// User.familyV110(pid).then((data) => {
		// 	resolve(data);
		// }, (er) => {
		// 	reject(er);
		// });
        setTimeout( await function() {
            resolve()
        }, 1000);
	}
    render() {
        return (
            <div className='jumbotron' style={{marginTop:'100px',position:'relative'}}>
                    <ReactPullToRefresh
                    onRefresh={this.handleRefresh.bind(this)}
                    className=""
                    distanceToRefresh={null}
                    resistance={null}
                    styleBody={{
                        marginTop:'30px',
                        background:'gray'
                    }}>
                    <div>ToRefresh下拉</div>
                    </ReactPullToRefresh>                 
            </div>

        );
    }
}

Show.propTypes = {

};

export default Show;