import React, { useState } from 'react'
import SelectInput from "../Inputs/SelectInput"
import TextInput from "../Inputs/TextInput"
import Button from "../Button/Button"
import { buildingChoices } from "../Inputs/Data/BuildingChoices"
import { measureTypes } from "../Inputs/Data/MeasureTypes"
import { statusData } from "../Inputs/Data/Status"
import { staff } from "../Inputs/Data/Staff"
import { analystsData } from "../Inputs/Data/Analysts"
// import { projectIdData } from '../Inputs/Data/ProjectId'

const Prjt_Metadata_Form = () => {

    const [inputs, setInputs] = useState({
        project_id: '',
        building: 'Choose...',
        measure_type: 'Choose...',
        status: 'Choose...',
        staff_lead: 'Choose...',
        staff_colead: 'Choose...',
        analyst: 'Choose...',
        project_description: '',
        nonenergy_benefits: '',
        baseline_start_date: '',
        reporting_period_start_date: '',
        length_baseline_period_days: '',
        length_reporting_period_days: ''

    });

    const { project_id, building, measure_type, status, staff_lead, staff_colead, analyst, project_description,
        non_energy_benefits, baseline_start_date, reporting_period_start_date, length_baseline_period_days, length_reporting_period_days } = inputs


    const onChange = e => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = {
                project_id, building, measure_type, status, staff_lead, staff_colead, analyst, project_description,
                non_energy_benefits, baseline_start_date, reporting_period_start_date, length_baseline_period_days, length_reporting_period_days
            }

            const response = await fetch('http://localhost:5000/api/prjt_metadata', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            window.location = '/'
            console.log(response)

        } catch (error) {
            console.error(error.message);
        };
    }
    return (
        <>
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-4">
                    <TextInput
                        onChange={onChange}
                        value1={project_id}
                        name1="project_id"
                        dataName="Project ID"
                    />
                    <SelectInput
                        dataArray={buildingChoices}
                        onChange={onChange}
                        value={building}
                        name="building"
                        dataName="Building"
                    />
                    <SelectInput
                        dataArray={measureTypes}
                        onChange={onChange}
                        value={measure_type}
                        name="measure_type"
                        dataName="Measure Type"
                    />
                    <SelectInput
                        dataArray={statusData}
                        onChange={onChange}
                        value={status}
                        name="status"
                        dataName="Status"
                    />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Project Fiscal Year</span>
                        </div>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <TextInput
                        onChange={onChange}
                        value1={baseline_start_date}
                        value2={reporting_period_start_date}
                        name1="baseline_start_date"
                        name2="reporting_period_start_date"
                        placeholder="mm/dd/yy"
                        dataName="Start Date"
                        twoInputs
                    />
                    <TextInput
                        onChange={onChange}
                        value1={length_baseline_period_days}
                        value2={length_reporting_period_days}
                        name1="length_baseline_period_days"
                        name2="length_reporting_period_days"
                        dataName="# of Days"
                        twoInputs
                    />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">End Date</span>
                        </div>
                        <input type="text" className="form-control" />
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <SelectInput
                        dataArray={staff}
                        onChange={onChange}
                        value={staff_lead}
                        name="staff_lead"
                        dataName="Staff Lead"
                    />
                    <SelectInput
                        dataArray={staff}
                        onChange={onChange}
                        value={staff_colead}
                        name="staff_colead"
                        dataName="Staff Support"
                    />
                    <SelectInput
                        dataArray={analystsData}
                        onChange={onChange}
                        value={analyst}
                        name="analyst"
                        dataName="Analyst"
                    />
                </div>
            </div>
            <div className="input-group mt-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Project Description</span>
                </div>
                <textarea rows='5' name="project_description" value={project_description} onChange={onChange} className="form-control" aria-label="With textarea"></textarea>
            </div>
            <div className="input-group mt-5">
                <div className="input-group-prepend">
                    <span className="input-group-text">Non Energy Benefits</span>
                </div>
                <textarea rows='2' name="nonenergy_benefits" value={non_energy_benefits} onChange={onChange} className="form-control mb-4" aria-label="With textarea"></textarea>
            </div>
            <Button 
            action="Submit" 
            type="submit"
            color="btn-success"
            />
        </form>
        </>
    )
}

export default Prjt_Metadata_Form
