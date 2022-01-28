import { useState } from 'react';

import Edit from './components/edit';
import List from './components/list';
import './index.css';

// const app= {
//     color: 'red'
// }

const Home = () => {

    const [data, setData] = useState([])

    return <div className="app">
        <Edit add={setData} />
        <List listData={data} deleteData={setData}/>
    </div>
}

export default Home