import React, {useState} from 'react';
import './questions.scss';


const Questions = () => {
   
  
   
    return (
        <section >
                        <div className='container'>
        <div className='questions'>  
            <div><h1>Частые вопросы:</h1></div>


            <div className='questions__div'>
             
                <h4>Как заказать?</h4>
                <p>+</p>
                
                    <ul>
                    <li> Оставьте заявку через сайт </li>
                    <li> Вскоре с вами свяжется менеджер и уточнит детали заказа</li>
                    </ul>

                
            </div>
            <div className='questions__div'>
                <h4>Как скоро придёт заказ?</h4>
                <p>+</p>

                <ul>

<li>
 В течение 1 рабочего дня по Екатеринбургу</li>
<li>  От 3 до 7 дней курьером в другие регионы </li>


</ul>
                </div>
            <div className='questions__div'>
                <h4>Какие условия оплаты?</h4>
                <p>+</p>

                <ul>
                    <li>Полная предоплата (скидка 5% на общую сумму заказа)</li>
                    <li>Оплата при получении курьеру</li>
                </ul>
                </div>
            
      </div>
            </div>
           
        </section>
    )
}

export default Questions;
