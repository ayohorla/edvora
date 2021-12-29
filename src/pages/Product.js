import { useState } from "react";
import ProductList from "../products/ProductList";

function Product (){

    const [isloading, setIsLoading] =useState();
    const [loadedProducts, setLoadedProducts] = useState();

    
    return(
        <section>
            <h1>Product Name</h1>
            <ProductList product = {loadedProducts} />
        </section>
    );
}
export default Product;