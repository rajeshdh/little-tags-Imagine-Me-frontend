import { createContext, Component } from 'react'

const CheckboxContext = createContext()

class CheckBox extends Component {
    static contextType = CheckboxContext
    constructor(props) {
        super(props)
        this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this)
    }

    checkboxChangeHandler(event) {
        const values = [...this.context.value]
        const value = event.target.value
        if (event.target.checked) {
            values.push(value)
        } else {
            const deleteIndex = values.indexOf(value)
            values.splice(deleteIndex, 1)
        }
        this.context.onChange(values, this.context.name)
    }


    render() {
        return (
            <label className="flex items-center mb-2 uppercase">
                <input
                    onChange={this.checkboxChangeHandler}
                    type="checkbox"
                    value={this.props.value}
                    className="mr-2 w-5 h-5 cursor-pointer checked:bg-sp-btn-primary checked:border-transparent "
                    checked={this.context.value.includes(this.props.value)}
                    name={this.context.name}
                />
                {this.props.children}
            </label>
        )
    }
}

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value };
    }

    render() {
        return (
            <CheckboxContext.Provider value={this.props}>
                {this.props.children(CheckBox)}
            </CheckboxContext.Provider>
        )
    }
}


export { CheckboxGroup };