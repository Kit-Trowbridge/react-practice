const Recipe = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <p data-testid="type">{props.type}</p>
            <p data-testid="duration">{props.duration}</p>
        </>
    )
}

export default Recipe;