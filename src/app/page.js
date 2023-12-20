import { useState } from "react"

export default function Home() {
    const [tasks, setTasks] = useState([
      'Go to walk', 'Have breakfast'
    ]);
  return (
    <main>
      <h1>Main Page</h1>
      <ul>
      {tasks.map((task)=> {
        <li>task</li>
      })}
      </ul>
    </main>
  )
}
