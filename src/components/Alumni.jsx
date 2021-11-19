import React, { Component } from 'react'

export default class Alumni extends Component {
    render() {
        return (
            <div className="alumni">
                <h2 className="head-alumni">You have reached the alumni page</h2>

                <img src="data:image/jpeg;base64,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" alt="" />
                
                
            </div>
        )
    }
}
