import React, { Component } from 'react';

interface Status {
    theme: string;
    languages: string;
}

export default class BT09 extends Component<any, Status> {
    constructor(props: any) {
        super(props);
        this.state = {
            theme: "dark",
            languages: "english",
        };
    }

    checkTheme = () => {
        this.setState(props => ({
            languages: props.theme === "light" ? "english" : "vietnamese"
        }));
    }

    render() {
        return (
            <div>
                <h3>{this.state.theme}</h3>
                <h3>{this.state.languages}</h3>
                <button onClick={this.checkTheme}>Click</button>
            </div>
        );
    }
}
