import React from 'react';
import './Button.css';

function Button({link}) {
    return (
        <div className="button">
            <a href={link}>View</a>
        </div>
    )
}

export default Button;