import React from 'react'

function Alert(props) {

    var {alert} = props;
    
    return (
        <div className="alert">
            <h3>{alert}</h3>
        </div>
    )
}
export default Alert
