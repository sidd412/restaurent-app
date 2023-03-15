import React from 'react'
import Item from './Item'
import './items.css'
export default function Items() {
  return (
    <div id='itemsList'>
      <div id='itemsListBox'>
      <Item foodNmae="coldrink" cost="2" />
      <Item foodNmae="butterDosa" cost="3" />
      <Item foodNmae="cawabParatha" cost="3" />
      <Item foodNmae="sandwitch" cost="2" />
      <Item foodNmae="curry-chawal" cost="5" />
      </div>
    </div>
  )
}
