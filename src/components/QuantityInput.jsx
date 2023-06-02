import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

class QuantityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || 1,
        };
    }

    handleDecrease = () => {
        const { value } = this.state;
        const { onChange } = this.props;
        if (value > 1) {
            const newValue = value - 1;
            this.setState({ value: newValue });
            onChange(newValue);
        }
    };

    handleIncrease = () => {
        const { value } = this.state;
        const { onChange } = this.props;
        const newValue = value + 1;
        this.setState({ value: newValue });
        onChange(newValue);
    };

    render() {
        const { value } = this.state;

        return (
            <div className="flex justify-center w-1/8">
                <div
                    className="flex items-center justify-center bg-gray-200 rounded-l cursor-pointer"
                    onClick={this.handleDecrease}
                >
                    <ChevronLeft className="fill-current text-gray-600 w-3" />
                </div>

                <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={value}
                    readOnly
                />

                <div
                    className="flex items-center justify-center bg-gray-200 rounded-r cursor-pointer"
                    onClick={this.handleIncrease}
                >
                    <ChevronRight className="fill-current text-gray-600 w-3" />
                </div>
            </div>

        );
    }
}

export default QuantityInput;
