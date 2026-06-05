import { useState } from "react"

const Form = () => {
    const [username, setUsername] = useState("")

    const handleChange = (event) => {
        const inputEl = event.target;
        setUsername(inputEl.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://url.com/endpoint", {
            method: "POST",
            body: JSON.stringify({username: username})
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your username:
                <input 
                    type="username" 
                    name="username" 
                    value={username}
                    onChange={handleChange}
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