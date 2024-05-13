import React, { useState } from 'react';
import './product.css'
import { MdFastfood } from "react-icons/md";


const Product = ({ menu, item }) => {
    const [itemMenu, setItemMenu] = useState(menu);
    const [products, setProducts] = useState(item);

    const FilterData = (cat) => {
        if(cat == "All"){
            setProducts(item);
        }else{
            const f = item.filter((product) => product.catogry === cat);
            setProducts(f);
        }
       
    }

    return (
        <div className='bg-img'>
            <div className='logo'>
            <header className='header'>
                <h1><MdFastfood />Food Menu </h1>
                </header>
            </div>
        <div align="center">
            <button className='btn  button-1 mt-3 mx-3' onClick={() =>FilterData("All")}>All</button>
            {itemMenu.map((val, index) => (
                <button onClick={() => FilterData(val.catogry)} className='btn mt-3 mx-3 button-1' key={index}> {val.catogry}</button>
            ))}
            <br /><br />
            <div className='container'>
                <div className='row'>
                    {products.map((p, index) => (
                        <div key={index} className='col-lg-4'>
                            <div className="card mt-5" style={{ width: '18rem', height: "25rem" }}>
                                <img className="card-img-top" src={p.image} alt="Product" />
                                <div className="card-body">
                                    <h5 className="card-title mt-1">Name:- {p.name}</h5>
                                    <p className="card-text mt-2">Price:- {p.price}</p>
                                    <span>Note :- {p.Note}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Product;
