import React from "react"
import BottomNavBar from "./BottomNavBar"

import "./EmployeePage.css"

function EmployeePage() {
    // TODO: Populate with example Employees
    return (
        <div className="employee-content">
            <img className="employee-call" src="./images/caller-icon.png" alt="User Call" />
            <div className="notifs-section">
                <img className="notif-moptro" src="./images/moptro-logo.png" alt="MOPTro Notifications" />
                <div className="notif-badge">
                    <p className="notif-number">4</p>
                </div>
            </div>
            <div>
                <form>
                    <input
                        className="search-field"
                        placeholder="Search with name"
                    />
                </form>
            </div>
            <BottomNavBar />
        </div>
    )
}

export default EmployeePage
