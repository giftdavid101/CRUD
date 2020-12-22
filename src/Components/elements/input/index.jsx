import React from 'react';
import { Input } from 'antd';
import './input.style.css';

const RFInput = (props) => {
    return (
        <div className={'rf-input'}>
            {props.label && props.label.trim() ? <label htmlFor={props.name}>{props.label + ':'}</label> : null}
            <Input id={props.name} {...props} required />
        </div>
    );
};

export default RFInput;
