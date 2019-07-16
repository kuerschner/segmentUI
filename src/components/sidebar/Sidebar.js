import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv,faUsers, faChartBar, faCloud, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className="sideBar">
            <ul className="menuList">
                <li className="menuItem"><FontAwesomeIcon icon={faProjectDiagram} className="makeMeWhite sectionIcon"/>Overview</li>
                <li className="menuItem"><FontAwesomeIcon icon={faTv} className="makeMeWhite sectionIcon"/>Experiences</li>
                <li className="menuItem active"><FontAwesomeIcon icon={faUsers} className="makeMeWhite sectionIcon"/>Segements</li>
                <li className="menuItem"><FontAwesomeIcon icon={faChartBar} className="makeMeWhite sectionIcon"/>Insights</li>
                <li className="menuItem"><FontAwesomeIcon icon={faCloud} className="makeMeWhite sectionIcon"/>Visitor Cloud</li>
            </ul>
            
        </div>
    )
}

export default Sidebar
