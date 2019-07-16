import React, { useReducer, useEffect } from 'react'
import './Main.css'
import TitleBar from './titlebar/TitleBar'
import SegmentIndicator from './segmentIndicator/SegmentIndicator';
import Conditions from './condition/Conditions';

const initState = { 
    progress: 90, 
    cardCount: 2, 
    conditionCards: [
        {
            type: "purchase"
        },
        {
            type: "tech"
        }
    ]

};

function reducer(state, action) {
    switch (action.type) {
      case 'add': 
        return { ...state };
      case 'delete':
        return { questionCount: state.questionCount - 1, correctCount: state.correctCount, wrongCount: state.wrongCount, btnStyle: "answerBtn"  };
      default:
        return {questionCount: state.questionCount}
    }
  }

const Main = () => {

    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {

    }, [state.cardCount])

    return (
        <div className="Main">
            <TitleBar />
            <div className="cardArea">
                <div className="card instructionCard">
                    <h2>Define a new Segment</h2>
                    <p>Add a Condition to define a segment. The more conditions you add the more specific your segment will be.</p>
                </div>
                <SegmentIndicator progress={state.progress} className="card" />
            </div>
            <Conditions dispatch={dispatch} conditionCards={state.conditionCards} />
        </div>
    )
}

export default Main
