import React, { useEffect } from 'react';
import './cart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, setCart, setCartCount , cartCount }) => {
    const navigate = useNavigate();
    const deleteAll = (id) => {
        setCart(cart.filter((item) => {
            return item.id !== id
        }))
    }
    const adCart = (id) => {
        const idx = cart.findIndex((item) => {
            return item.id === id
        });
        if(idx == -1){
            setCart([...cart])
          }else{
            cart[idx].count++;
            setCart([...cart])
          }
    }
    const deleteCart = (id) => {
        setCartCount(cartCount)
        const idx = cart.findIndex((item) => {
            return item.id === id
          });
          if(cart[idx].count > 1){
         cart[idx].count--;
         setCart([...cart])
          }else{
            setCart(cart.filter((item)=> {
                return item.id !== id
            }))
          }
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    return (
        <section>
            <div className='container' >

        

                <div className='row-1'>
                <button className='goBack ' onClick={()=> {
                    navigate(-1)
                }}><FontAwesomeIcon icon={faArrowRight} /></button>
        <div className='cart'>
       {
        cart.length === 0 ? ""
         : <h2>Заказ</h2>
       }
        {
            cart.length === 0 ? <div className='empty'>
                <img src='https://avatars.mds.yandex.net/i?id=4bda7c0bbf998aa95b7af24805243247-4668036-images-thumbs&n=13' />
                 <h5 > <b> Ваша корзина пуста </b></h5> 
            <p>Для оформления заказа добавьте нужные товары.</p> 
            
             </div>
           : cart.map((item) => {
                return <div key={item.id} className='cart__item'>
                    
                    <div className='cart__item-img'>
                    <img  src={item.image} />
                    </div>
                    <div className='cart__item-model'>
                    <h4> {item.model} </h4>
                    <p className='cart__item-model-p'><b>{item.price * item.count}</b><span> руб.</span> </p>

                    </div>
                    <div className='cart__item-button'>
                    <button className='btn-1' onClick={() => {
                        adCart(item.id)
                    }}><FontAwesomeIcon icon={faPlus} /></button>
                    <p> {item.count}</p>

                    <button className='btn-2' onClick={() => {
                            
                        deleteCart(item.id)
                    }}> <FontAwesomeIcon icon={faMinus} /></button>
                        <button className='btn-3' onClick={() => {
                            setCartCount(cartCount - item.count)
                            deleteAll(item.id)
                        }}>Удалить</button>
                        </div>
                </div>
            })
        }
        <p className='item-price'><span>Сумма:</span> <b>{cart.reduce((acc, rec)=>{ 
            return acc + (rec.count * rec.price)
        }, 0)}</b> <span>руб.</span> </p>
        </div>
        </div>
                </div>
        </section>
    )
}

export default Cart;