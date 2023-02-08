import React, {useState} from 'react'




const Form = () => {
    const [data, setData] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
          <button> Send </button>
        </form>
    )
}


export default Form;