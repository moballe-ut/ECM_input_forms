import React from 'react'

const TextInput = (props) => {

    return (
    <>
        {props.twoInputs ? (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">{props.dataName}</span>
                </div>
                <input type="text" placeholder={props.placeholder} name={props.name1} value={props.value1} onChange={props.onChange} className="form-control" />
                <input type="text" placeholder={props.placeholder} name={props.name2} value={props.value2} onChange={props.onChange} className="form-control" />
            </div>
        </div>
        ): (
            <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">{props.dataName}</span>
                </div>
                <input type="text" placeholder={props.placeholder} name={props.name1} value={props.value1} onChange={props.onChange} className="form-control" />
            </div>
        </div>
        )}
    </>
        
    )
}

export default TextInput
