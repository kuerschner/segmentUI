import React from 'react'
import './TopNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function TopNav() {
    return (
        <div className="topNav">
            <h1 className="logo">
                Qubit
            </h1>
            <div className="accountArea">
                <FontAwesomeIcon icon={faBell} className="makeMeGray" size="2x"/>
                <div className="userBubble">MK</div>
                <p>Mike Kuerschner</p>
                <p className="companyName">Union Fashion</p>
            </div>
        </div>
    )
}

export default TopNav
