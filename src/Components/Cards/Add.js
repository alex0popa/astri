import React, { useState } from 'react'

export const Add = (props) => {
    const [val, setVal] = useState({
        name: '',
        url: ''
    })

    const handleChange = (e) =>
        setVal({...val, [e.target.name]: e.target.value})

    const addPhoto = () => {
        if (val.name && val.url) {
            fetch(`https://astri-be.herokuapp.com/tinder/cards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: val.name,
                    imgUrl: val.url
                }),
            })
            .then(r => r.json())
            .then(d => {
                setVal({name: '', url: ''})
                props.toogle()
            })
        } else {
            alert('Devi compilare entrambi i campi!')
        }
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: '10vh',
            display: 'flex',
            width: '100%',
            // justifyContent: 'space-between'
          }}>
            <input placeholder="Nome" name="name" onChange={handleChange} />
            <br />
            <input placeholder="URL" name="url" onChange={handleChange} />
            <br />
            <input type="button" value="Add photo" onClick={addPhoto}/>
        </div>
    )
}
