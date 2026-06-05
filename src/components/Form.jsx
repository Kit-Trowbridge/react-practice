import { useState } from "react"

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (event) => {
        const inputEl = event.target;
        setUsername(inputEl.value);
    };
    
    const handlePassword = (event) => {
        const inputEl = event.target;
        setPassword(inputEl.value);
    };

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
                    onChange={handleUsername}
                />
            </label>
            <br />
            <label>
                Enter your password:
                <input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={handlePassword}
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