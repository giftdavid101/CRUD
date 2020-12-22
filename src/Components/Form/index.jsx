import React, { useState } from 'react';
import './form.style.css';
import RFInput from '../elements/input';
import { v4 as uuidv4 } from 'uuid';
import { Button, notification } from 'antd';

const RegistrationForm = () => {
    const [values, setValues] = useState({});

    const openNotification = () => {
        notification.open({
            message: 'Missing Input Fields',
            description: 'Please fill in all the your details',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { fname, lname, email, phone } = values;

        if (!fname || !lname || !email || !phone) {
            alert('all fields are required');
        } else {
            alert('Details are submitted. Click details to view your data');
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
                    {values ? (
                        <Button htmlType={'submit'}> Submit</Button>
                    ) : (
                        <Button htmlType={'submit'} disabled>
                            Submit
                        </Button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
