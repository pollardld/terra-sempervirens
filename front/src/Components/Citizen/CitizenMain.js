import React from 'react';

const CitizenMain = (props) => {
    const hasCitizenId = props.hasCitizenId;
    
    if (hasCitizenId) {
        return (
            <div>
                <h1>Trees for {props.updateCurrentCitizenMain.name}</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Welcome</h1>
            </div>
        );
    }
}

export default CitizenMain;