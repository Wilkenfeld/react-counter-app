import Button from './Button'
import { Context } from '../contexts/CounterContext'

export default class IncrementButton extends Button {

    static contextType = Context;

    render() {
        return (
            <div className='IncrementButton'>
                <Button className="IncrementButton" label='Increment' action={() => this.context.setItems(count => count + 1)} />
            </div>
        )
    }
}