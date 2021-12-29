import { useEffect, useState } from "react";
import ProductList from "../products/ProductList";

function Product (){

    const [isloading, setIsLoading] =useState();
    const [loadedProducts, setLoadedProducts] = useState([]);

    useEffect (() => {
        setIsLoading (true);
        fetch(
            'https://assessment-edvora.herokuapp.com'
        )
        .then((response => {
            return response.json();
        })
        .then((data =>{
            const products = [];
        })))
    })


    return(
        <section>
            <h1>Product Name</h1>
            <ProductList product = {loadedProducts} />
        </section>
    );
}
export default Product;