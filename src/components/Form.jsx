import { useState } from "react"

const Form = () => {
    const [loginInfo, setLoginInfo] = useState({username: "", password: "", phoneNumber: ""});

    const handleInput = (event) => {
        const inputEl = event.target;
        let inputValue = inputEl.value;

        if (inputEl.name === "phoneNumber") {
            inputValue = inputEl.value.split("")
                .filter(letter => !isNaN(letter.trim()))
                .join("");
        } 
        setLoginInfo({...loginInfo, [inputEl.name] : inputValue});
    }    

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        if (loginInfo.password.length < 8) {
            return;
        }
        
        fetch("http://url.com/endpoint", {
            method: "POST",
            body: JSON.stringify(loginInfo)
        });
        setLoginInfo({username: "", password: "", phoneNumber: ""});
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
            <label>
                Enter your phone number:
                <br />
                <input 
                    type="text"
                    name="phoneNumber"
                    value={loginInfo.phoneNumber}
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

export default Form;