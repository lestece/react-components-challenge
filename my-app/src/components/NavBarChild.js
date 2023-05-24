import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
                <div>
                    <form>
                        <label for="username">Username:</label>
                        <input type="text" id="username" value="username"/>
                        <label for="password">Password:</label>
                        <input type="password" id="password" value="password" />
                        <button onClick={()=>props.handleClick()}>Submit</button>
                    </form>
                </div>
            ) :
            (<button onClick={() => props.handleClick()}>Login</button>)
            }
</div>
  )
}

export default NavBarChild