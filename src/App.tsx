import * as React from "react";

export interface AppProps {
    name: string
}

export class App extends React.Component<AppProps, {}, {}> {
    render() {
        return (
            <div>
                <h1>Hello from {this.props.name}!</h1>
            </div>
        )
    }
}