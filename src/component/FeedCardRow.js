import React from 'react'
import { Link } from 'react-router-dom'

export const FeedCardRow = ({num, card}) => {
  return(
    <tr>
      <th scope="row" className="text-center">{num}</th>
      <td>{card.caption}</td>
      <td>
        <img src={card.image.post} style={{ "width": "100px"}} alt={card.caption}/>
      </td>
      <td>{card.username}</td>
      <td className="text-center">
        <Link 
          to={{pathname: `/card/${card.id}`, state: {card}}} 
          className="btn btn-primary mb-25">
            Details
        </Link>
      </td>
    </tr>
  )
}