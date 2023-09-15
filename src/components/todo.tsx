import { useEffect, useState } from "react"
import "./../css/todo.css"

export default function Todo() {
    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState(()=>{
        const localValue = localStorage.getItem("items");
        if (localValue===null){
            return []
        }
        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items]
    )

    function submitNewItem(e: { preventDefault: () => void }) {
        e.preventDefault()

        if (newItem === "") {
            return;
        }

        console.log(newItem)
        setItems((currentTodos:any) => {
            return ([...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false },
            ])
        })

        setNewItem("")
    }

    function toggleItems(id: string, checked: boolean) {
        setItems((currentTodos:any) => {
            return currentTodos.map((item:any) => {
                if (item.id === id) {
                    return { ...item, completed: checked }
                }
                return item
            })
        })
    }

    function deleteItem(id: string) {
        setItems((currentTodos:any) => {
            return currentTodos.filter((item:any) => item.id !== id)
        })
    }


    return (<>
        <div className="todo-container">
            <form onSubmit={submitNewItem} className="todo">
                <div className="form-row">
                    <label>New Item:</label>< br />
                    <input value={newItem} className="todo-input" onChange={e => { setNewItem(e.target.value) }} type="text" placeholder="type what needs to be done here!" />< br />
                    <button className="btn">Add</button>
                </div>
            </form>
            <div className="todo-list">
                <ul>
                    {items.length === 0 && "Nothing to do! Add a task :)"}
                    {items.map((item:any) => (
                        <li key={item.id}>
                            <input type="checkbox" checked={item.completed} onChange={e => toggleItems(item.id, e.target.checked)} />
                            <span>{item.title}</span>
                            <button className="btn btn-danger" onClick={() => { deleteItem(item.id) }}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>)
}
