import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { increment } from 'src/store/addToCartSlice';

export default function Products() {
    const [items, setItems]: any = useState([]);
    const dispatch = useDispatch()

    const shoppingList = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        // console.log(data)
        setItems(data);
    };
    const handleAdd = (product: any) => {
        dispatch(increment(product));
        console.log(dispatch(increment(product)))

    }

    useEffect(() => {
        shoppingList()
        // console.log('first')


    }, [])


    return (
        <div className="productsWrapper">
            {items.map((product: any) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}
