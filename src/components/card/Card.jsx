/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa"
import './Card.css'

export default function Card(props) {

  const [like, setLike] = useState(false)

  let handlerLike = () => { setLike(!like) }

  return (
    <>
    <div className='card-style'>
      <img className='thumbnail' src='https://www.dondeir.com/wp-content/uploads/2022/06/volver-al-futuro-musical.jpg'/>
        <div className="container mx-0">
          <div className="row">
            <div className="col m-0 p-0">
              <p className='fs-5'>{props.movie.titulo}</p>
            </div>
            <div className="col-1">
              {like ? <FaHeart onClick={handlerLike}></FaHeart> : <FaRegHeart onClick={handlerLike}></FaRegHeart>}
            </div>
          </div>
        </div>
        {/* <button type='button' className='btn btn-danger'>Detalle</button> */}
    </div>
    </>
  )
}
