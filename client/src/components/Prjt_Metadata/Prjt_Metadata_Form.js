import React, { useState } from 'react'
import SelectInput from "../SelectInput"
import { buildingChoices } from "../Data/BuildingChoices"
import { measureTypes } from "../Data/MeasureTypes"

const Prjt_Metadata_Form = () => {

    const [inputs, setInputs] = useState({
        project_id: '',
        building: 'Choose...',
        measure_type: 'Choose...',
        status: '',
        staff_lead: '',
        staff_colead: '',
        analyst: '',
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
        <div style={{ minHeight: '45vh' }} className="container d-flex align-items-center mt-5">
            <div className="card border-secondary bg-secondary text-center mb-3" >
                <div className="card-body text-black">
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Project ID</span>
                                    </div>
                                    <input type="text" name="project_id" className="form-control" value={project_id} onChange={onChange} />
                                </div>
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
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Status</span>
                                    </div>
                                    <input type="text" name="status" className="form-control" value={status} onChange={onChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Project Fiscal Year</span>
                                    </div>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Start Date</span>
                                    </div>
                                    <input type="text" name="baseline_start_date" value={baseline_start_date} onChange={onChange} className="form-control" />
                                    <input type="text" name="reporting_period_start_date" value={reporting_period_start_date} onChange={onChange} className="form-control" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default"># of Days</span>
                                    </div>
                                    <input type="text" name="length_baseline_period_days" className="form-control" value={length_baseline_period_days} onChange={onChange} />
                                    <input type="text" name="length_reporting_period_days" className="form-control" value={length_reporting_period_days} onChange={onChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">End Date</span>
                                    </div>
                                    <input type="text" className="form-control" />
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Staff Lead</span>
                                    </div>
                                    <input type="text" name="staff_lead" className="form-control" value={staff_lead} onChange={onChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Staff Support</span>
                                    </div>
                                    <input type="text" name="staff_colead" className="form-control" value={staff_colead} onChange={onChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Analyst</span>
                                    </div>
                                    <input type="text" name="analyst" className="form-control" value={analyst} onChange={onChange} />
                                </div>
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
                            <textarea rows='2' name="nonenergy_benefits" value={non_energy_benefits} onChange={onChange} className="form-control" aria-label="With textarea"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Prjt_Metadata_Form
