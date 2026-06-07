import { useState } from "react"

const Form = () => {
    const [loginInfo, setLoginInfo] = useState({username: "", email: "", password: ""});

    const handleInput = (event) => {
        const inputEl = event.target

        setLoginInfo({...loginInfo, [inputEl.name] : inputEl.value});
    }


    const handleSubmit = (event) => {
        event.preventDefault(); 
        fetch("http://url.com/endpoint", {
            method: "POST",
            body: JSON.stringify(loginInfo)
        });
        setLoginInfo({username: "", email: "", password: ""})
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your username:
                <br />
                <input 
                    type="text" 
                    name="username" 
                    value={loginInfo.username}
                    onChange={handleInput}
                />
            </label>
            <br />
            <label>
                Enter your email:
                <br />
                <input 
                    type="text"
                    name="email"
                    value={loginInfo.email}
                    onChange={handleInput}
                />
            </label>
            <br />
            <label>
                Enter your password:
                <br />
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