import Button from "./Button"
import { Context } from "../contexts/CounterContext";

export default class ResetButton extends Button {

    static contextType = Context
    render() {
        return (
                    <div className="ResetButton">
                        <Button label='Reset' action={() => this.context.setItems(() => 0)} />
                    </div>
        )
    }
}