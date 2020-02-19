import React from "react";

class about extends React.Component {
    render = () => (
        // <div className="container mt-2">
        <div>
        <h1>{this.props.match.params.number}</h1>
        <h4>I am the about page</h4>
    </div>
    );
}
export default about;