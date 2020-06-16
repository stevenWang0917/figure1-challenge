import React from 'react'
import { Container } from './Container'

export const FeedCardDetail = ({card}) => {
  return(
    <Container>
      <div className="card mt-5" style={{"width": "22rem"}}>
        {card.image.post?
          <> 
            <img className="card-img-top" src={card.image.post} alt={card.caption}/>
            <div className="card-body">
              <p className="card-text">{card.caption}</p>
            </div>
          </> : null}         
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {`User: ${card.username}`} &nbsp; 
            <img src={card.image.profile} alt={`profile`}/>
          </li>
          <li className="list-group-item">{`Star: ${card.stats? card.stats.star:'/'}`}</li>
          <li className="list-group-item">{`Follow: ${card.stats? card.stats.follow:'/'}`}</li>
          <li className="list-group-item">{`Views: ${card.stats? card.stats.views:'/'}`}</li>
        </ul>
      </div>
    </Container>
  )
}