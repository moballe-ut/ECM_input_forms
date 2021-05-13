import React from 'react'



const SelectInput = ({arrayData}) => {
    const lisGroupArray = [...arrayData]
    return (
        <div class="input-group mb-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
                <li>"Action</li>
                <li>"Another action</li>
                <li>"Something else here</li>
            </ul>
                <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
        </div>
    )
}

export default SelectInput
