import React, { useState } from 'react'

import MetadataForm from './Metadata_form/Prjt_Metadata_Form'

const Prjt_Metadata = () => {

    const [inputs, setInputs] = useState ({
        projectid: '',
        building: '',
        measure_type: '',
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

    const { projectid, building, measureType, status, staffLead, staffColead, analyst, projectDescription, 
        nonEnergyBenefits, baselineStart,  reportingStart, numBaselineDays, numReportingDays } = inputs


    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const onSubmit = async e => {
        e.preventDefault();

        const body = { projectid, building, measureType, status, staffLead, staffColead, analyst, projectDescription, 
            nonEnergyBenefits, baselineStart,  reportingStart, numBaselineDays, numReportingDays }

        try {
        
                const response = await fetch('http://localhost:5000/api/prjt_metada', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                const parseRes = await response.json()
                console.log(parseRes)

        } catch (error) {
            console.error(error.message);   
        };
    }

    return (
        <div>
            <MetadataForm
            onSubmit={onSubmit}
            change={onChange}
            />
        </div>
    )
}

export default Prjt_Metadata
