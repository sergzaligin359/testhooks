import React from 'react'

export const BackendErrorMessages = ({ backendErrors }) => {
    const errorMsgs = Object.keys(backendErrors).map( name => {
        return name + backendErrors[name].join(' ') 
    })
    return (
        <ul className="error-messages">
            {
                errorMsgs.map(error => <li key={ error }>{ error }</li>)
            }
        </ul>
    )
}
