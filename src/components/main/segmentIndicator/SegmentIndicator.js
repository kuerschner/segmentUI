import React from 'react'
import './SegmentIndicator.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

function SegmentIndicator() {
    return (
        <div className="segmentIndicator">
            <div className="card">
                <h2>Estimated segment size</h2>
                <p> of your total traffic expected to join based on a sample of historical data</p>
                <ProgressBar now={60} />
            </div>
        </div>
    )
}

export default SegmentIndicator
