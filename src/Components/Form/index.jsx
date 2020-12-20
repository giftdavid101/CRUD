import React, { useState } from 'react';
import { Button } from 'antd';
import './form.style.css';
import RFInput from '../elements/input';
import { v4 as uuidv4 } from 'uuid';

const RegistrationForm = () => {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { fname, lname, email, phone } = values;
        if (!fname && !lname && !email && !phone) {
            alert('Some required fields are missing values');
            return;
        }
        let oldValues = localStorage.getItem('regForm') || '[]';
        oldValues = JSON.parse(oldValues);
        // values.id = uuidv4()
        const dataUpdate = [...oldValues, { ...values, id: uuidv4(), reg_date: new Date().toUTCString() }];
        // const dataUpdate = Array.from(oldValues).concat(values);
        console.log(dataUpdate);
        localStorage.setItem('regForm', JSON.stringify(dataUpdate));
    };

    return (
        <div className="registration-form">
            <div className="form-container container">
                <form onSubmit={handleSubmit}>
                    <RFInput label={'first name'} name={'fname'} onChange={handleChange} />
                    <RFInput label={'last name'} name={'lname'} onChange={handleChange} />
                    <RFInput label={'email'} name={'email'} onChange={handleChange} />
                    <RFInput label={'phone number'} name={'phone'} onChange={handleChange} />
                    <Button htmlType={'submit'} type={'primary'}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
