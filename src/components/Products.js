import React, { useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext'
import { CartContext } from '../global/CartContext';
import bunner from '../images/Bunner11.PNG'
// ***** retrieves products data from firebase database ***
export const Products = () => {

    const {products} = useContext(ProductsContext);
    // ***test on console ***
    const data = useContext(CartContext);
    console.log(data);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 }
            
            <div class='container-fluid' className='products-container'>
                <img src={bunner} alt="Bunner here" />
            </div>
            <h1>Products</h1>

            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            USD {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}