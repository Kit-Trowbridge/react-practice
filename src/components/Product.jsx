const Product = (props) => {
    return (
        <>
            <h1 className="productName">{props.name}</h1>
            <p className="productDescription">{props.description}</p>
            <p className="productPrice">£{props.price}</p>
        </>
    )
}

export default Product;