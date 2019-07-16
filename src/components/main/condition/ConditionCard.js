import React, { useState} from 'react'
import Select from 'react-select';

const optionsPurchase1 = [
    { value: 'cat', label: 'Category' },
    { value: 'name', label: 'Name' }
  ];

const optionsTech1 = [
    { value: 'device', label: 'Device' },
    { value: 'browser', label: 'Browser' }
];

const operatorValues = [
    { value: 'is', label: 'is' },
    { value: 'is one of', label: 'is one of' },
    { value: 'on', label: 'on'}
];

const timeValues = [
    { value: 'purchase', label: 'Products purchased' },
    { value: 'addedToCart', label: 'Products added to cart' }
];



const ConditionCard = props => {

    const [purchasOption1State, changePurchaseOption1State] = useState();
    const [purchasOption2State, changePurchaseOption2State] = useState();
    const [techOption1State, changeTechOption1State] = useState();
    const [operatorOption1State, changeOperator1State] = useState('is');
    const [operatorOption2State, changeOperator2State] = useState();

    if (props.type === "purchase") {
        return (
            <div className="padding-y">
                <div className="card">
                    <h2>Products Purchased <span>- What products have they interacted with?</span></h2>   
                    <div className="selectRow">
                        <Select
                        value={purchasOption1State}
                        onChange={changePurchaseOption1State}
                        options={optionsPurchase1}
                        className="conditionSelect"
                        />
                        <Select
                        value={operatorOption1State}
                        onChange={changeOperator1State}
                        options={operatorValues}
                        className="conditionSelect"
                        />
                    </div>
                    <div className="line"></div>
                    <h2>Time of purchase <span>- When did this purchase take place?</span></h2>  
                    <div className="selectRow padding-y">
                        <Select
                        value={purchasOption2State}
                        onChange={changePurchaseOption2State}
                        options={timeValues}
                        className="conditionSelect"
                        />
                        <Select
                        value={operatorOption2State}
                        onChange={changeOperator2State}
                        options={operatorValues}
                        className="conditionSelect"
                        />
                    </div>
                </div>
            </div>
        )
    }

    if (props.type === "tech") {
        return (
            <div className="padding-y">
                <div className="card">
                    <h2>Technology <span>- Which device, browser or operating system are they using?</span></h2>
                    <Select
                        value={techOption1State}
                        onChange={changeTechOption1State}
                        options={optionsTech1}
                        className="conditionSelect"
                    />
                </div>
            </div>

        )
    }

    if (props.type === "custom") {

    }
}

export default ConditionCard
