/* eslint-disable react/prop-types */
import './Card.css'

export default function Card(props) {
  return (
    <>
    <div className='card-style'>
      <img className='thumbnail' src='https://www.dondeir.com/wp-content/uploads/2022/06/volver-al-futuro-musical.jpg'/>
      <h2>{props.movie.title}</h2>
      <p>{props.movie.desc}</p>
      <p><strong>{props.movie.length}</strong></p>
    </div>
    </>
  )
}
