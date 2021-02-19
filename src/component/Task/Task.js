import React from 'react';
import './task.css'

export default function Task({task: {id, title}}) {
    return (
        <div key={id} className="list-item"> {title} </div>
    );
}