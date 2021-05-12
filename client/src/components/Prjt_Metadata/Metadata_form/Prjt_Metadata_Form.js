import React from 'react'

const Prjt_Metadata_Form = (props) => {
    return (
        <div style={{ minHeight: '45vh' }} className="container d-flex align-items-center mt-5">
            <div className="card border-secondary bg-secondary text-center mb-3 w-100" >
                <div className="card-body text-black">
                    <form onSubmit={props.onSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Project ID</span>
                                    </div>
                                    <input type="text" className="form-control" value={props.projectid} onChange={e => props.setProjectId(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Building</span>
                                    </div>
                                    <input type="text" className="form-control"  value={props.building} onChange={e => props.setBuilding(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Measure Type</span>
                                    </div>
                                    <input type="text" className="form-control"  value={props.measureType} onChange={e => props.setMeasureType(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Status</span>
                                    </div>
                                    <input type="text" className="form-control"  value={props.status} onChange={e => props.setStatus(e.target.value)} />
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
                                    <input type="text" value={props.baselineStart} onChange={e => props.setBaselineStart(e.target.value)} className="form-control" />
                                    <input type="text" value={props.reportingStart} onChange={e => props.setReportingStart(e.target.value)} className="form-control" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default"># of Days</span>
                                    </div>
                                    <input type="text" className="form-control"  value={props.numBaselineDays} onChange={e => props.setNumBaselineDays(e.target.value)} />
                                    <input type="text" className="form-control"  value={props.numReportingDays} onChange={e => props.NumReportingDays(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">End Date</span>
                                    </div>
                                    <input type="text" className="form-control"  />
                                    <input type="text" className="form-control"  />
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Staff Lead</span>
                                    </div>
                                    <input type="text" className="form-control"  value={props.staffLead} onChange={e => props.setStaffLead(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Staff Support</span>
                                    </div>
                                    <input type="text" className="form-control"  value={props.staffColead} onChange={e => props.setStaffColead(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Analyst</span>
                                    </div>
                                    <input type="text" className="form-control"  value={props.analyst} onChange={e => props.setAnalyst(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Project Description</span>
                            </div>
                            <textarea rows='5' value={props.projectDescription} onChange={e => props.setProjectDescription(e.target.value)} className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Prjt_Metadata_Form
