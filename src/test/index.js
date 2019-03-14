import React from "react";
import ReactDOM from "react-dom";
// import { Tabs, WhiteSpace, Badge } from "antd-mobile";

class Demo extends React.Component {
    myref = React.createRef();

    render() {
        return <div ref={this.myref}>
            test jenkins
        </div>;
    }
}


ReactDOM.render(<Demo />, mountNode);
