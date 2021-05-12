import React, { useState } from 'react'

import MetadataForm from './Metadata_form/Prjt_Metadata_Form'

const Prjt_Metadata = () => {

    const [projectid, setProjectId] = useState ('');
    const [building, setBuilding] = useState ('');
    const [measureType, setMeasureType] = useState ('');
    const [status, setStatus] = useState ('');
    const [staffLead, setStaffLead] = useState ('');
    const [staffColead, setStaffColead] = useState ('');
    const [analyst, setAnalyst] = useState ('');
    const [projectDescription, setProjectDescription] = useState ('');
    const [nonEnergyBenefits, setNonEnergyBenefits] = useState ('');
    const [baselineStart, setBaselineStart] = useState ('');
    const [reportingStart, setReportingStart] = useState ('');
    const [numBaselineDays, setnumBaselineDays] = useState ('');
    const [numReportingDays, setNumReportingDays] = useState ('');

    const onSubmit = async e => {
        e.preventDefault();

        try {
            
            const body = { projectid, building, measureType, status, staffLead, staffColead, analyst, projectDescription, 
                nonEnergyBenefits, baselineStart,  reportingStart, numBaselineDays, numReportingDays }

                const response = await fetch('http://localhost:5000/api/prjt_metada', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                console.log(response)

                window.location='/'

        } catch (error) {
            console.error(error.message);   
        };
    }

    return (
        <div>
            <MetadataForm
            onSubmit={onSubmit}
            projectid={projectid}
            building={building} 
            measureType={measureType} 
            status={status} 
            staffLead={staffLead} 
            staffColead={staffColead} 
            analyst={analyst} 
            projectDescription={projectDescription} 
            nonEnergyBenefits={nonEnergyBenefits} 
            baselineStart={baselineStart}  
            reportingStart={reportingStart} 
            numBaselineDays={numBaselineDays} 
            numReportingDays={numReportingDays}
            setProjectId={setProjectId}
            setBuilding={setBuilding}
            setMeasureType={setMeasureType}
            setStatus={setStatus}
            setStaffLead={setStaffLead}
            setStaffColead={setStaffColead}
            setAnalyst={setAnalyst}
            setProjectDescription={setProjectDescription}
            setNonEnergyBenefits={setNonEnergyBenefits}
            setBaselineStart={setBaselineStart}
            setnumBaselineDays={setnumBaselineDays}
            setNumReportingDays={setNumReportingDays}
            setReportingStart={setReportingStart}
            />
        </div>
    )
}

export default Prjt_Metadata
