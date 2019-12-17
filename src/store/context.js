import React from "react";

// first make a context
export const MyContext = React.createContext();


 // create a provider
export class MyProvider extends React.Component {
    state = {
        name: 'enrique',
        age: 100,
        isCool: true
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                growAYear: () => 
                    this.setState({
                        age: this.state.age + 1
                    })
                
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}