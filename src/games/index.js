import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

class Index extends React.Component {
    render(){
        return (
            <div>
                list
            </div>
        )
    }
}

const root = document.getElementById('root')
ReactDOM.render(<Index />, root);
