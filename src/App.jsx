import { useState } from 'react';

const App = () => {
  const [ list , setList ] = useState([])
  const [ item , setItem ] = useState('')

  const addTaskItem = () => {
    list.push(item)
    setList([...list])

  }
  console.log(list)
  const removeTaskItem = (index) => {
    list.splice(index, 1)
    setList([...list])
  }
  return (
    <div className='container'>
        <h1>ToDo List</h1>
        <table>
          <tbody>
            {
              list.length !== 0 ? (
                list.map((element, index) => {
                  return (
                    <tr>
                      <td>{element}</td>
                      <td><button onClick={()=> removeTaskItem(index)}>Remove</button></td>
                    </tr>
                  )
                })
              ) : (<td></td>)
            }
          </tbody>
        </table>
        <input type="text" placeholder='New Item' onChange={(e) => setItem(e.target.value)} />
        <button onClick={addTaskItem}>Add</button>
    </div>
  );
};

export default App;