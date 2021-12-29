function ProductItem(props) {
    return (
        <li>
            <div>
                <product>
                    {props.product}
                </product>
                <brand>{props.brand}</brand>
            </div>
        </li>
    );
}

export default ProductItem;