import { useState } from "react"

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (event) => {
        const inputEl = event.target
        inputEl.name === "username" ? setUsername(inputEl.value) : setPassword(inputEl.value);
    }

    // const handleUsername = (event) => {
    //     const inputEl = event.target;
    //     console.log("username", inputEl);
    //     setUsername(inputEl.value);
    // };
    
    // const handlePassword = (event) => {
    //     const inputEl = event.target;
    //     console.log("password", inputEl)
    //     setPassword(inputEl.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://url.com/endpoint", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        setUsername("");
        setPassword("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your username:
                <input 
                    type="text" 
                    name="username" 
                    value={username}
                    onChange={handleInput}
                />
            </label>
            <br />
            <label>
                Enter your password:
                <input 
                    type="password" 
                    name="password"
                    value={password}
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