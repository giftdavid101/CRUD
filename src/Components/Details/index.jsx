import React, { useEffect, useState, useRef } from 'react';
import { notification } from 'antd';

let DetailsItem = ({ id, fname, handleDelete, handleSave }) => {
    const editRef = useRef(null);
    const [editing, setEditing] = useState(false);

    const handleEdit = () => {
        setEditing(true);
        editRef.current.contentEditable = true;
    };

    const _handleSave = (id) => {
        const update = editRef.current.textContent;
        if (update) {
            handleSave({ id, fname: update });
            setEditing(false);
            editRef.current.contentEditable = false;
            update;
        } else {
            notification.open({
                message: 'Empty Field',
                description: 'Cannot leave field blank',
            });
        }
    };

    return (
        <>
            <div style={{ color: 'purple' }} ref={editRef}>
                {fname}
            </div>

            {editing ? (
                <button onClick={() => _handleSave(id)}>Save</button>
            ) : (
                <button onClick={() => handleEdit()}>Edit</button>
            )}

            <button
                onClick={() => {
                    handleDelete(id);
                }}>
                Delete
            </button>
        </>
    );
};

const Details = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        let oldValues = localStorage.getItem('regForm') || '[]';
        setDetails(JSON.parse(oldValues));
    }, []);

    //80 for the JS 80/100
    // 10 for the UI 10/ 100
    // user experience - poor

    const handleDelete = (id) => {
        const filtered = details.filter((detail) => detail.id !== id);
        setDetails(filtered);
        localStorage.setItem('regForm', JSON.stringify(filtered));
    };

    const handleSave = (update) => {
        const lastUpdate = [];
        for (let detail of details) {
            if (detail.id === update.id) {
                // const uDetail = detail;
                detail.fname = update.fname;
                lastUpdate.push(detail);
            } else {
                lastUpdate.push(detail);
            }
        }

        // const filAns = [1, 2, 3, 4, 5].filter((curValue, i, arr) => curValue % 2 == 0);
        // const mapAns = [1, 2, 3, 4, 5].map((curValue, i, arr) => curValue * 2);
        // [1, 2, 3, 4, 5].forEach((curValue, i, arr) => curValue * 2);

        // const updatedData = details.reduce((resolve, detail, i, arr) => {
        //     if (detail.id === update.id) detail.fname = update.fname;
        //     resolve.push(detail);
        //     return resolve;
        // }, []);

        // const ans = [1, 2, 3, 4, 5].reduce((initialSum, curNumber) => {
        //     initialSum += curNumber;
        //     return initialSum;
        // }, 0);

        console.log({ lastUpdate });
        setDetails(lastUpdate);
        localStorage.setItem('regForm', JSON.stringify(lastUpdate));
    };

    return (
        <div>
            {details.length > 0
                ? details.map((detail) => (
                      <div key={detail.id} id={detail.id}>
                          <DetailsItem {...detail} handleSave={handleSave} handleDelete={handleDelete} />
                      </div>
                  ))
                : 'No registered users'}
        </div>
    );
};

export default Details;
