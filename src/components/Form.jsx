import { useState } from "react"

const Form = () => {
    // adding username and password as properties in the state, stored in a dictionary under the name loginInfo
    // setLoginInfo is the name of the function that will update the state
    // these names have been assigned through destructuring useState
    // the starting state for both is an empty string
    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});

    // when the input is updated (typed into)
    const handleInput = (event) => {
        // setting inputEl to the the specific input element that is being typed into
        // event is an object that target is one of the keys / properties of
        // the target looks like this: <input type="text" name="username" value="whatever has just been typed"> 
        const inputEl = event.target
        // calling the function that will update the state (setLoginInfo)
        // we are creating a new loginInfo object so that useState will be triggered and re-render the ___ ??
        // using spread syntax to copy over the existing key / values in loginInfo
        // and if there is new input on at least one of the two properties, set them to that value of that input
        // this syntax enables either username or password to be set in the same way
        // it determines which key to update based on the name property of the input object (<input type="text" name="username" value="whatever has just been typed"> )
        // it would look like either ["username"]: "whatever has just been typed" or ["password"]: whatever has just been typed
        // if they are both new values, it will set them both; otherwise it will use the existing username or password in the current loginInfo
        // Q: will that existing loginInfo always be the starting state (empty both)??
        setLoginInfo({...loginInfo, [inputEl.name] : inputEl.value});
    }

    // when the form is submitted
    const handleSubmit = (event) => {
        // when the form is submitted, its default behaviour of refreshing the page (sending a new get request) is prevented
        event.preventDefault(); // {defaultPrevented: true} is part of the event object now 
        fetch("http://url.com/endpoint", {
            method: "POST",
            // have to convert the 
            body: JSON.stringify(loginInfo)
            // because we set loginInfo to an object already, don't need to wrap it in {} like we would if sending individual properties in the body
        });
        // resetting the loginInfo to blank values for both --> clearing the form
        setLoginInfo({username: "", password: ""})
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your username:
                <input 
                    type="text" 
                    name="username" 
                    value={loginInfo.username}
                    onChange={handleInput}
                />
            </label>
            <br />
            <label>
                Enter your password:
                <input 
                    type="password" 
                    name="password"
                    value={loginInfo.password}
                    onChange={handleInput}
                />
            </label>
            <br />
            <input 
                type="submit" 
                name="submit"
            />
        </form>
    )
}

export default Form