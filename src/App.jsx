import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender Git y GitHub', completada: false },
    { id: 2, texto: 'Crear repositorio del proyecto', completada: true },
  ])

  const eliminarTarea = (id) => {
    const tareasRestantes = tareas.filter(
      (tarea) => tarea.id !== id
    )

    setTareas(tareasRestantes)
  }

  return (
    <main>
      <h1>TaskFlow</h1>
      <h2>Gestor de Tareas - Proyecto Integrador</h2>

      <p>Proyecto Integrador - Práctica Git y GitHub</p>
      <p>Versión estable de TaskFlow</p>

      <h3>Mis tareas</h3>
      {tareas.length === 0 && (
        <p>No hay tareas registradas.</p>
      )}
      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <span>
            {tarea.completada ? '✓' : '○'} {tarea.texto}
          </span>

          <button onClick={() => eliminarTarea(tarea.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <p>Total de tareas registradas: {tareas.length}</p>
    </main>
  )
}

export default App