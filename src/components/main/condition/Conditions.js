import React, { useState } from 'react'
import './Condition.css'
import ConditionCard from './ConditionCard';
import Select from 'react-select';


const options = [
    { value: 'purchase', label: 'Purchase History' },
    { value: 'tech', label: 'Technology' },
    { value: 'custom', label: 'Custom'}
];

const Conditions = props => {

const [optionType, changeOptionType] = useState();

let conditionCards = props.conditionCards
    return (
        <div className="conditionRow">
            {conditionCards.map((conditionCard) => (
                <ConditionCard 
                    type={conditionCard.type}        
                />
            ))}
            <div className="card conditionFlex">
                <h2>New condition</h2>
                <Select
                    value={optionType}
                    onChange={changeOptionType}
                    options={options}
                    className="conditionSelect"
                    />
                
                <button className="btn btnGreen" onClick={() => props.dispatch({type: 'add'})}>+ Add</button>
            </div>
        </div>
    )
}

export default Conditions
