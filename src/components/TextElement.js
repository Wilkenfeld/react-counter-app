import React from 'react'

export default class TextElement extends React.Component {

    render() {
        return <div className="TextElement"> <p style={{ color: "red", fontStyle: "italic" }}> {this.props.text} </p></div>
    }
}