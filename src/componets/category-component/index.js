import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
 
const PaginaDatos = (props) => {

    let { id } = useParams(); 
    const [data, setData] = useState([]);


    useEffect(() => {
        axios("http://localhost:3001/data.json").then((res) => setData(res.data));
    },[]);
        return (
            <div>
                <Navbar />
                <Banner />
                <div className='product-card-container'>
                 <Products />
                 </div>
                <div>
                    {data.filter(data => data.category == id).map((product) => { 
                        return <div className='card' key={product.id}>
                          <img src={product.img} alt='img-product-card' />
                            <h3>{product.name}</h3>
                            <h4>{product.price}$</h4>
                        </div>
                        })}
                </div>
            </div>
        );
}

export default PaginaDatos;