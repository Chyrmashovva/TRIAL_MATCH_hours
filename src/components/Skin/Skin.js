import React , {useState , useEffect} from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import './skin.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Skin = ({addCart , cart, setCart}) => {
  const [productData , setProductData] = useState({});
  const params = useParams();
  const navigate = useNavigate()
  const getProduct = () => {
    axios(`http://localhost:7070/${params.id}`)
    .then(({data}) => {
      setProductData(data)
    })
  }


  useEffect(() => {
    getProduct()
  }, []);
    return (
        <section>
          <div className='popup'>
            </div>
          <div className='container'>
            <div className='row'>
              <button className='goBack' onClick={() => {
                navigate(-1)
              }}><FontAwesomeIcon icon={faXmark} /></button>
              <div className='skin'>
            
               <img className='skin__img' src={productData.image} />
            <div className='col-6'>
            <div className='skin__description' >
          <h2 className='skin__h1'> {productData.model} </h2>
          <p className='skin__p'> {productData.price}руб. </p>
          <div className='skin__button'>
          {/* <button> + </button>
          
          <button> - </button> */}
          <button  className='skin__button-3' onClick={() => {
            addCart(productData)
          }}> <Link to={'/cart'}>Добавить</Link>  </button>
          </div>
            </div>
            </div>
            </div>
              </div>
            </div>
        </section>
    )
}

export default Skin;
