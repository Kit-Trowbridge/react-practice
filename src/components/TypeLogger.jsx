const TypeLogger = () => {
    let inputText = ""
    const handleChange = (event) => {
        inputText += event.nativeEvent.data
        console.log(inputText)
    }

    return <input type="text" onChange={handleChange}/>
}
export default TypeLogger;