import React from "react"
import { CardContainer } from "./styled"
import Images from "../Images"

function Card({
  titleCard,
  textCard,
  colorButton,
  backgroundCard,
  styleDefault,
  nameImage,
}) {
  return (
    <CardContainer
      className="card"
      background={backgroundCard}
      primary={styleDefault}
    >
      <Images name={nameImage} />
      <div className="card-body">
        <h5 className="card-title"> {titleCard} </h5>
        <p className="card-text"> {textCard} </p>
        <button className={`btn btn-${colorButton}`}>Go somewhere</button>
      </div>
    </CardContainer>
  )
}

export default Card
