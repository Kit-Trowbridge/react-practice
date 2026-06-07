import { useState } from "react"

const Form = () => {
    // adding username and password as properties in the state, stored in an object under the name loginInfo
    // setLoginInfo is the name of the function that will update these values in the state
    // the names loginInfo and setLoginInfo have been assigned through destructuring useState
    // the starting state for both username and password is an empty string
    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});

    // when the input is updated (typed into)
    const handleInput = (event) => {
        // setting inputEl to be the specific input element that is being typed into
        // (event is an object and target is one of its keys / properties)
        // the target looks like this: <input type="text" name="username" value="whatever has just been typed"> 
        const inputEl = event.target

        // we are creating a new loginInfo object from the input, triggering useState to re-render the form component
        // it compares this new render to its last render (all in the virtual DOM)
        // if there is a change between the two, it will update the actual form in the DOM with these new properties

        // using spread syntax to copy all current values from loginInfo (whatever was last typed in either field)
        // and overwrite the key matching inputEl.name with the new inputEl.value

        // this syntax enables either username or password to be set in the same way
        // it determines which key to update based on the name property of the input object (<input type="text" name="username" value="whatever has just been typed"> )
        // it would look like either ["username"]: "whatever has just been typed" or ["password"]: whatever has just been typed

        setLoginInfo({...loginInfo, [inputEl.name] : inputEl.value});
    }

    // when the form is submitted
    const handleSubmit = (event) => {
        // when the form is submitted, its default behaviour of refreshing the page (sending a new get request) is prevented
        event.preventDefault(); // {defaultPrevented: true} is part of the event object now 
        fetch("http://url.com/endpoint", {
            method: "POST",
            // have to convert the loginInfo object -- {username: "typedusername", password: "typed password"}
            // to a JSON-formatted string -- '{"username": "typedusername", "password": "typed password"}'
            body: JSON.stringify(loginInfo)
            // body content should be formatted as an object to make it easy to convert to a JSON-formatted string
            // loginInfo is already an object because of how we setup the state
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
                    value={loginInfo.username} // dynamic value which we use in handleInput to update the loginInfo
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