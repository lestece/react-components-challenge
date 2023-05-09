import React from "react";
import css from "./css/NavBarSimple.module.css";


class NavBarSimple extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in",
            username: "Celeste"
        };
    }

    handleClick() {
        this.setState((prevState, prevProps)=>{
            console.log('Previous state:', prevState)
            console.log('Previous props:', prevProps)
            return{
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in"
            }
        })
    }

    render(){
        return(
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple;