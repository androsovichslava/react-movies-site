import React from 'react'

function Preloader() {
    return (
        <div>
            <div className="progress">
                <div className="indeterminate"></div>

            </div>
            <div className='loading'>Loading...</div>
        </div>
    )
}
export { Preloader }