import {Component} from "react"

export default class Button extends Component {
    
    render() {
        return <div className="Button" onClick={this.props.action}>
                <span className="label">{this.props.label}</span>
            </div>
    }
}