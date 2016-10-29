import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import  './common';
// import $ from 'zepto';
import $ from 'jquery';
import '../sass/index';

 export default class Jsonp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {val:'',lis:null}
    }
    async onC(e){
       
        let This = this;
         this.setState({val:e.target.value});
        const li = await function (){
            return new Promise(function (resolve, reject) {
                        $.ajax({
                            url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?",
                    
                            jsonp: "cb",
                        
                            dataType: "jsonp",
                        
                            data: {
                                wd: This.state.val,
                            },
                            success(response){
                                resolve(response);
                            },
                            error(error){
                                reject(error);
                            }
                        });

                });
        }();
        const lis = li.s.map( (item,index)=>{
            return <li key={index}>{item}</li>
        } );

         this.setState({lis});
    }
    
    render() {
        return (
            <div>
                <input value={this.state.val} onChange={this.onC.bind(this)}/>
                <ul>
                    {this.state.lis}
                </ul>
            </div>
        );
    }
}

// ReactDOM.render(<App/>,document.getElementById('app'));