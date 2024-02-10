import {useEffect, useState} from 'react'

const NavDashboard = ({ course , data }) => {



const len = 1;
  return (
    <>
     <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <header className="bg-surface-primary border-bottom pt-6">
            <div className="container-fluid">
                <div className="mb-npx">
                   
                    <ul className="nav nav-tabs mt-4 overflow-x border-0">
                        <li className="nav-item ">
                            <a href="#" className="nav-link active">All files</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link font-regular">Shared</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link font-regular">File requests</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
                <div className="row g-6 mb-6">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">Enrolled Course</span>
                                        <span className="h3 font-bold mb-0">{len}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i className="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm">
                                    <span className="badge badge-pill bg-soft-success text-success me-2">
                                        <i className="bi bi-arrow-up me-1"></i>13%
                                    </span>
                                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Course Available</span>
                                        <span className="h3 font-bold mb-0">{course.length}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                            <i className="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm">
                                    <span className="badge badge-pill bg-soft-success text-success me-2">
                                        <i className="bi bi-arrow-up me-1"></i>30%
                                    </span>
                                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">Purchase History</span>
                                        <span className="h3 font-bold mb-0">{len}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i className="bi bi-clock-history"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm">
                                    <span className="badge badge-pill bg-soft-danger text-danger me-2">
                                        <i className="bi bi-arrow-down me-1"></i>-5%
                                    </span>
                                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">Section 4</span>
                                        <span className="h3 font-bold mb-0">Subtitle</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                            <i className="bi bi-minecart-loaded"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm">
                                    <span className="badge badge-pill bg-soft-success text-success me-2">
                                        <i className="bi bi-arrow-up me-1"></i>10%
                                    </span>
                                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow border-0 mb-7">
                    <div className="card-header">
                        <h5 className="mb-0">Purchase History Details</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover table-nowrap">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Course Id</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">paymentId</th>
                                    
                                </tr>
                            </thead>
                         <tbody>
                           <tr>
                            
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                                        <a className="text-heading font-semibold" href="#">
                                            Robert Fox
                                        </a>
                                    </td>
                                    <td>
                                        Feb 15, 2021
                                    </td>
                                    <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                            Dribbble
                                        </a>
                                    </td>
                                    <td>
                                        $3.500
                                    </td>
                                   
                                </tr>
                         </tbody>
                        </table>
                    </div>
                    <div className="card-footer border-0 py-5">
                        <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </>
  )
}

export default NavDashboard