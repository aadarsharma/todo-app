import { useState } from 'react';

export function CreateTodo(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return <div>
        <input style={{
            width: '10%',
            padding: '10px',
            fontSize: '16px',
            margin: 10
        }}type="text" placeholder="Title" onChange={function(e) {
            setTitle(e.target.value);
        }}/><br />
        <input style={{
            width: '10%',
            padding: '10px',
            fontSize: '16px',
            margin: 10
            
        }} type="text" placeholder="Description" onChange={function(e) {
            setDescription(e.target.value);
        }}/> <br />
        <button style={{
            padding: '10px',
            fontSize: '16px',
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo created successfully");
                })
        }}>Add a todo</button>
    </div>
}