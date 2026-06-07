import { useState } from "react"

const Form = () => {
    const [loginInfo, setLoginInfo] = useState({username: "", password: "", phoneNumber: ""});

    const handleInput = (event) => {
        const inputEl = event.target

        if (inputEl.name === "phoneNumber") {
            const phoneNumberArr = inputEl.value.split("")
            let filteredPhoneNumber = phoneNumberArr.filter((letter) => {
                return !isNaN(letter)
            })
            filteredPhoneNumber = filteredPhoneNumber.join("")
            setLoginInfo({...loginInfo, "phoneNumber" : filteredPhoneNumber});
        } else {
            setLoginInfo({...loginInfo, [inputEl.name] : inputEl.value});
        }
    }    

    const handleSubmit = (event) => {
        event.preventDefault(); 
        fetch("http://url.com/endpoint", {
            method: "POST",
            body: JSON.stringify(loginInfo)
        });
        setLoginInfo({username: "", password: "", phoneNumber: ""})
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