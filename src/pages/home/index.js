import { useState, useEffect } from 'react';
import { API_GET_DATA } from '../../global/constants'

import Edit from './components/edit';
import List from './components/list';
import './index.css';

// const app= {
//     color: 'red'
// }

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
}

async function updateData(data) {
    const res = await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ data })
    })
}

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        updateData(data)
    }, [data])

    useEffect(() => {
        fetchData(setData)
    }, [])

    return <div className="app">
        <Edit add={setData} />
        <List listData={data} deleteData={setData} />
    </div>
}

export default Home