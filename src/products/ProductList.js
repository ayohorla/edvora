import ProductItem from "./ProductItem";

function ProductList(props){
    return (
        <ul>
            {props.products.map((product) => (
                <ProductItem
                product = {product.product}
                brand = {product.brand}
                />
            ))}
        </ul>
    );
}

export default ProductList;