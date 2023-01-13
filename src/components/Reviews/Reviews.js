import React from 'react';
import './reviews.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
 
const Reviews = () => {
    return (
        <section >
           <div className='container'>
            <div className='row'>
                <div  className='reviews'>
            <h1 className='reviews__h1'>Они проверили
Trial Watch в деле:</h1>
<div className='reviews__text'>
    <div className='reviews__text-position'>
        <div><img src='https://m-files.cdnvideo.ru/lpfile/1/d/4/1d42755fe4642800f203ccd90751c981/-/resize/400/f.png?18838810' /></div>
        <div>
            <span >
    <p>Давно присматривался к линейке часов TREND WATCH, и выбор пал на модель GAX-100A-7A. Понравилась именно матовая текстура белого цвета а не глянец. Часы удобные, красивые, притягивают внимание, как очень стильный аксессуар. Собраны безупречно, все идеально ровно и точно подогнано, чувствуются качество и дороговизна изделия.</p>
    </span>

    <h3>Илья Корсунский, Екатеринбург</h3>
    <div  className='reviews__icon'>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    </div>
    <div></div>
    </div>
    
    </div>
    <div className='reviews__text-position'>
        <div>
<img src='https://m-files.cdnvideo.ru/lpfile/8/e/9/8e9f01a9e4577a575fe06f0ca8dc8fd9/-/resize/400/f.jpg?62913217'/></div>

        <div>
            <p>Давно присматривался к линейке часов TREND WATCH, и выбор пал на модель GAX-100A-7A. Понравилась именно матовая текстура белого цвета а не глянец. Часы удобные, красивые, притягивают внимание, как очень стильный аксессуар. Собраны безупречно, все идеально ровно и точно подогнано, чувствуются качество и дороговизна изделия.
</p>

<h3>Юрий Иванов, Пермь</h3>
<div  className='reviews__icon'>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    </div>
</div>
    
</div>
<div className='reviews__text-position'>
    <div><img  src='https://m-files.cdnvideo.ru/lpfile/9/1/d/91db99d906852bd0b829883a06f0be7a/-/resize/400/f.jpg?58409080'/></div>
    <div>
    <p>Давно присматривался к линейке часов TREND WATCH, и выбор пал на модель GAX-100A-7A. Понравилась именно матовая текстура белого цвета а не глянец. Часы удобные, красивые, притягивают внимание, как очень стильный аксессуар. Собраны безупречно, все идеально ровно и точно подогнано, чувствуются качество и дороговизна изделия.</p>

<h3>Роман Петров, Казань</h3>
<div className='reviews__icon'>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    </div>
    </div>

</div>
<div className='reviews__text-position' >
    <div><img src='https://m-files.cdnvideo.ru/lpfile/8/9/0/89074e6e41857e982e9464c3ff2c05a9/-/resize/400/f.png?94882847' /></div>
    <div>
    <span>
<p>
Давно присматривался к линейке часов TREND WATCH, и выбор пал на модель GAX-100A-7A. Понравилась именно матовая текстура белого цвета а не глянец. Часы удобные, красивые, притягивают внимание, как очень стильный аксессуар. Собраны безупречно, все идеально ровно и точно подогнано, чувствуются качество и дороговизна изделия.
</p>
</span>

<h3>Дмитрий Медведев, Казань</h3>
<div  className='reviews__icon'>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar}/>
    </div>
</div>

</div>
</div>
</div>
</div>
</div>
        </section>
    )
}

export default Reviews;
