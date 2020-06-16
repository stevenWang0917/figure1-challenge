import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container } from './Container'
import { FeedCardRow } from './FeedCardRow'
import API from '../config'

export const FeedCardList = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    Axios.get(API)
    .then(res => {
      setCards(res.data.feed)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return(
    <Container>
      <table className="table table-hover border mt-5">
        <thead>
          <tr className="table-secondary">
            <th scope="col" className="text-center">#</th>
            <th scope="col">Caption</th>
            <th scope="col">Image</th>
            <th scope="col">User</th>
            <th scope="col" className="text-center">Show Details</th>
          </tr>
        </thead>
        <tbody>
          {
            cards && cards.map((card, index) =>
              <FeedCardRow
                num={++index} 
                card={card} 
                key={card.id}
              />)
          }
        </tbody>
      </table>
    </Container>
  )
}