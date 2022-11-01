import React, { useState } from 'react'
import './Game.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const SqrState = {
  EMPTY: 'EMPTY',
  CIRCLE: 'CIRCLE',
  XMARK: 'XMARK',
}

function Game() {
  const startingStates = {
    1: SqrState.EMPTY,
    2: SqrState.EMPTY,
    3: SqrState.EMPTY,
    4: SqrState.EMPTY,
    5: SqrState.EMPTY,
    6: SqrState.EMPTY,
    7: SqrState.EMPTY,
    8: SqrState.EMPTY,
    9: SqrState.EMPTY,
  }

  const xMark = <FontAwesomeIcon icon={faXmark} className="custome-Xstyle" />
  const circle = <FontAwesomeIcon icon={faCircle} className="custome-Ostyle" />

  const [states, setStates] = useState(startingStates)
  const [currentPlayer, setCurrentPlayer] = useState(1)

  const displayState = id => {
    if (states[id] === SqrState.CIRCLE) {
      return circle
    } else if (states[id] === SqrState.XMARK) {
      return xMark
    } else {
      return null
    }
  }

  const handleClick = id => {
    if (currentPlayer === 1) {
      states[id] = SqrState.CIRCLE
    } else {
      states[id] = SqrState.XMARK
    }
    setStates({ ...states })
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
  }

  return (
    <div className="container">
      <div className="playground">
        <div className="squares" id="1" onClick={() => handleClick(1)}>
          {displayState(1)}
        </div>
        <div className="squares" id="2" onClick={() => handleClick(2)}>
          {displayState(2)}
        </div>
        <div className="squares" id="3" onClick={() => handleClick(3)}>
          {displayState(3)}
        </div>
      </div>
      <div className="playground">
        <div className="squares" id="4" onClick={() => handleClick(4)}>
          {displayState(4)}
        </div>
        <div className="squares" id="5" onClick={() => handleClick(5)}>
          {displayState(5)}
        </div>
        <div className="squares" id="6" onClick={() => handleClick(6)}>
          {displayState(6)}
        </div>
      </div>
      <div className="playground">
        <div className="squares" id="7" onClick={() => handleClick(7)}>
          {displayState(7)}
        </div>
        <div className="squares" id="8" onClick={() => handleClick(8)}>
          {displayState(8)}
        </div>
        <div className="squares" id="9" onClick={() => handleClick(9)}>
          {displayState(9)}
        </div>
      </div>
    </div>
  )
}

export default Game
