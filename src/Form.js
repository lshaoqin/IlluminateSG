import React, {useState} from 'react'


const Form = () => {
    const [data, setData] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(e);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type ="text" placeholder="Input location here"/>
            <button> Send </button>
        </form>
    )
}


export default Form;