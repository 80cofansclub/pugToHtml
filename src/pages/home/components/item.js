
const Item = ({ id, note, date, time, deleteData }) => {
    console.log('deleteData', deleteData);
    console.log('id', id);

    function deleteItem() {
        deleteData(function(prev) {
            return prev.filter(item => item.id !== id)
        })
    }

    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button onClick={deleteItem} className="remove">del</button>
    </div>
}

export default Item