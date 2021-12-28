import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"
import cardList from "./cards.json"
import "./Icons"
import "./Card.css"

const STORAGENAME = 'cardIndexes'

const _getCard = () => {
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

const Heading = ({ first, second, last }: { first: string, second: string, last: string }): JSX.Element => {
  return <h1 className="heading">{first}<span className="text-span">{second}</span>{last}</h1>
}

const getCardTest = () => {
  return cardList.cards[32]
}

const Card: React.FC = () => {
  const card = getCardTest()
  const splitted = card.text.split('|')
  const icon = card.icon as IconName
  const type = card.type as IconPrefix
  console.log(icon)
  return (
    <div className="center">
      <FontAwesomeIcon size={"3x"} icon={[type, icon]} />
      <Heading first={splitted[0]} second={splitted[1]} last={splitted[2]} />
    </div>
  )
}

export default Card
