import React from "react"
import "./Card.css"
import cardList from "./../cards.json"

const STORAGENAME = 'cardIndexes'

const getCard = () => {
  const indexes = getIndexList()
  const indexInIndexes = Math.floor(Math.random() * indexes.length) // get index for list of indexes
  const index = indexes.splice(indexInIndexes, 1)

  window.localStorage.setItem(STORAGENAME, `[${indexes}]`)
  return cardList.cards[index]
}

const getIndexList = () => {
  const storage = window.localStorage
  let indexes = storage.getItem(STORAGENAME)
  if (indexes === null || indexes.length <= 2) {
    indexes = `[${[...Array(cardList.cards.length).keys()]}]`
    storage.setItem(STORAGENAME, indexes)
  }
  return JSON.parse(indexes)
}

const heading = (first: string, second: string, last: string) => {
  return <h1 className="heading">{first}<span className="text-span">{second}</span>{last}</h1>
}

const Card: React.FC = () => {
  const card = getCard()
  const splitted = card.text.split('|')
  const icon = card.icon
  return (
    <div className="center">
    <div className="font-awesome-head">{icon}</div>
    {heading(splitted[0], splitted[1], splitted[2])}
  </div>
  )
}

export default Card
