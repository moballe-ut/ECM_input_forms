import React from 'react'

const SelectInput = (props) => {
   
    return (
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">{props.dataName}</label>
            <select onChange={props.onChange} value={props.value} name={props.name} className="form-select" id="inputGroupSelect01"> 
            <option disabled>Choose...</option>
            {props.dataArray.map(data => (
                <option key={data.id} value={data.value}>{data.name}</option>  
                ))}
            </select>
           
        </div>
    )
}

export default SelectInput
