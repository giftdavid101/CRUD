import React, { useEffect, useState, useRef } from 'react';

let DetailsItem = ({ id, fname, handleDelete, handleSave }) => {
    const editRef = useRef(true);
    const [editing, setEditing] = useState(false);
    const handleEdit = () => {
        setEditing(true);
        editRef.current.contentEditable = true;
    };

    const _handleSave = (id) => {
        const update = editRef.current.textContent;
        setEditing(false);
        handleSave({ id, fname: update });
    };

    return (
        <>
            <div style={{ color: 'purple' }} ref={editRef}>
                {fname}
            </div>
            {!editing && <button onClick={() => handleEdit()}>Edit</button>}
            {editing && <button onClick={() => _handleSave(id)}>Save</button>}

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

    const handleDelete = (id) => {
        const filtered = details.filter((detail) => detail.id !== id);
        setDetails(filtered);
        localStorage.setItem('regForm', JSON.stringify(filtered));
    };

    const handleSave = (update) => {
        const lastUpdate = [];
        for (let detail of details) {
            if (detail.id === update.id) {
                const uDetail = detail;
                uDetail.fname = update.fname;
                lastUpdate.push(uDetail);
            } else {
                lastUpdate.push(detail);
            }
        }
        console.log({ lastUpdate });
        setDetails(lastUpdate);
        localStorage.setItem('regForm', JSON.stringify(lastUpdate));
    };

    return (
        <div>
            {details.length > 0
                ? details.map(({ fname, id }) => (
                      <div key={id} id={id}>
                          <DetailsItem fname={fname} id={id} handleSave={handleSave} handleDelete={handleDelete} />
                      </div>
                  ))
                : 'No registered users'}
        </div>
    );
};

export default Details;
