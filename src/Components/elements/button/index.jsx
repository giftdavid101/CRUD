import React from 'react';

const Button = () => {
    if (fname && lname && email && phone) {
        return <button type="button">Button</button>;
    }
    return <div>{<button> Submit</button>}</div>;
};

export default Button;
