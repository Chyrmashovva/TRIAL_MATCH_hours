import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import './model.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
const Models = ({addCart , cartCount}) => {
    const [products , setProducts] = useState([]);
    
    const getProducts = () => {
        axios('http://localhost:7070/')
        .then(({data}) => {
            setProducts(data)
        })
    }
    useEffect(() =>{
        getProducts();

    }, []);
    
    return (
        <section>
           
            <div className='container'>
            <h1 clasName='models'>Модели</h1>
                
                <div className='row-1'>
               
                <div className='a'>
                <Link to={"/cart"}><FontAwesomeIcon icon={faCartShopping} /></Link>
            {
                cartCount === 0 ? '' : <span className='cartCount'>{cartCount}</span>
            }
                </div>
                
                 
           {
            products.map((item) => {
                return <div key={item.id} className='col-4' >
                <div className='home-card'>
                    <div>
                    <img  src={item.image} />

                    </div>
                   <div>
                    
                    <h3 className='home-card__model'> {item.model} </h3>
                    <p className='home-card__description'> {item.description} </p>
                    <p className='home-card__price'> {item.price} руб. </p>
                    <div className='home-card__more'>
                    <button onClick={() => {
                        addCart(item)
                    }} >В корзину</button>
                    <Link to={`/skin/${item.id}`}>Подробнее</Link>
                    </div>
                    </div>
                    </div>
           </div>

            })
           }
           </div>
           </div>
        </section>
    )
}

export default Models;
