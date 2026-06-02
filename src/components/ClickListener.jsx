const ClickListener = () => {
    const handleClick = (event) => {
        console.log(event);
    };

    return (
        <>
            <button onClick={handleClick} aria-live="polite">Click me!</button>
        </>
    )
}

export default ClickListener