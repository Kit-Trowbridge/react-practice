const TypeLogger = () => {
    let inputText = ""
    const handleChange = (event) => {
        if (event.nativeEvent.data !== null){
            inputText += event.nativeEvent.data           
        }  
        console.log(inputText) 
    }

    return <input type="text" onChange={handleChange}/>
}
export default TypeLogger;