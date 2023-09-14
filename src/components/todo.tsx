import { useState } from "react"
import "./../css/todo.css" 

export default function Todo() {
    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState<any[]>([])

    function submitNewItem(e: { preventDefault: () => void }) {
        e.preventDefault()

        console.log(newItem)
        setItems(currentTodos => {
            return ([...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false},
            ])
        })

        setNewItem("")
    } 
    
    function toggleItems(id: string, checked: boolean) {
        setItems(currentTodos => {
            return currentTodos.map(item => {
                if (item.id === id) {
                    return {...item, completed: checked}
                }
                return item
            })
        })
    }

    function deleteItem(id: string) {
        setItems(currentTodos => {
            return currentTodos.filter(item => item.id !== id)
        })
    }
    
    return( <>
    <form onSubmit={submitNewItem} className="todo">
        <div className="form-row">
            <label htmlFor="todo-input">New Item:</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" placeholder="type what needs to be done here!" />
            <button className="btn">Add</button>
        </div>
    </form>
    <div className="todo-list">
        <ul>
            {items.length === 0 && "Nothing to do! Add a task :)"}
            {items.map(item => (
                <li key={item.id}>
                    <input type="checkbox" checked={item.completed} onChange={e => toggleItems(item.id, e.target.checked)} />
                    <span>{item.title}</span>
                    <button className="btn btn-danger" onClick={()=>{deleteItem(item.id)}}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
    </>)
}
