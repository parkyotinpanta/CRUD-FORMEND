import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FormProduct = () => {
    // javascript
    
    const [data, setData] = useState([])
    const[form,setForm] = useState([])
    useEffect(() => {
        // code 
        loadData()

    }, [])
    const loadData = async () => {
        await axios.get('http://localhost:5000/api/product')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    const handleChange = (e)=>{
        
       setForm({
        ...form,
        [e.target.name]:[e.target.value]
       })
    }
    console.log(form);
    return (
        <div>

            {/*HTML*/}


            FormProduct
            <form>
                <input 
                    type='text'
                    name='name' 
                    onChange={e=>handleChange(e)} 
                    placeholder='name' 
                /><br/>
                <input type='text'
                        name='detail' 
                        placeholder='detail'
                        onChange={e=>handleChange(e)} 
                /><br/>
                <input type='text'
                        name='price' 
                        placeholder='price' 
                        onChange={e=>handleChange(e)}
                /><br/>
                <button>กด</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">deteil</th>
                        <th scope="col">price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        // javascrpit

                        data ? data.map((item,index) =>
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.detail}</td>
                        <td>{item.price}</td>
                    </tr>
        )
                            : null


                    }
                   
                </tbody>
            </table>




        </div>
    )
}

export default FormProduct