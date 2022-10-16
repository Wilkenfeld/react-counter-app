import { Component } from "react";
import { Context } from "../contexts/CounterContext";

export default class Counter extends Component {

    static contextType = Context;

    render() {
        const { items } = this.context
        return <span> Counter: <span style={{color: items != 0 ? "white" : "blue"}}> {items} </span> </span>
    }
}

