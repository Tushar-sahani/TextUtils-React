import React, { useState } from 'react'

export default function Alert(props) {
    
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert}</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
