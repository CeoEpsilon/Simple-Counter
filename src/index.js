import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';

function SimpleCounter(props){
return (<div className= "bigCounter">
 <div className = "calendar"></div>   
<div className = "four">{props.digitFour % 10}</div>
<div className = "three">{props.digitThree % 10}</div>
<div className = "two">{props.digitTwo % 10}</div>
<div className = "one">{props.digitOne % 10}</div>
</div>

)

}
SimpleCounter.propTypes = {
    digitFour: propTypes.number, 
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number,
}

let counter = 0;
setInterval(function(){
const four = Math.floor(counter/1000);
const three = Math.floor(counter/100);
const two = Math.floor(counter/10);
const one = Math.floor(counter/1);
counter++;
ReactDOM.render(<SimpleCounter  digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>, document.getElementById('root'));
},1000);




// If you want your app to work offloine and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
