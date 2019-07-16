import React from 'react'
import './TitleBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function TitleBar() {
    return (
        <div className="titleBar">
          <input type="text" className='titleInput' placeholder="Enter Segment Name"></input>
          <FontAwesomeIcon icon={faEdit} className="makeMeWhite" size="2x"/>
          <button className="btn btnWhite">Save Changes</button>
          <button className="btn btnOutline">Preview</button>
          <button className="btn btnOutline">Exit</button>
          <p className="authorText">Created by Mike Kuerschner</p>

        </div>
    )
}

export default TitleBar
