import React, { Component } from 'react';
import css from "./css/NavBarForm.module.css";

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggeIn: false,
      }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            return{
                isLoggedIn: 
                prevState.isLoggeIn === true ? false : true,
            };
        });
        console.log(this.state.isLoggedIn)
    }

    render() {
        return (
        <div className = {css.NavBar}>
            <h1>My Gallery</h1>
            {this.state.isLoggedIn ? (
                <div>
                    <form>
                        <label for="username">Username:</label>
                        <input type="text" id="username" value="username"/>
                        <label for="password">Password:</label>
                        <input type="password" id="password" value="password" />
                        <button onClick={()=>this.handleClick()}>Submit</button>
                    </form>
                </div>
            ) :
            (<button onClick={() => this.handleClick()}>Login</button>)
            }
        </div>
        )
    }
}

export default NavBarForm