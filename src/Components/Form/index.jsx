import React from 'react';
import { Form, Input, Button } from 'antd';
import './form.style.css';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const RegistrationForm = (props) => {
    const onFinish = (values) => {
        console.log(values);
    };
    console.log({ props });

    return (
        <div className="registration-form">
            <div className="form-container container">
                <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['user', 'fname']}
                        label="First Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input />
                    </Form.Item>{' '}
                    <Form.Item
                        name={['user', 'lname']}
                        label="Last Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'phoneNo']} label="Phone Number" rules={[{ type: 'number', max: 11 }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default RegistrationForm;
