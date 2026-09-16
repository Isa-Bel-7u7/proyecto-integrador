import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender Git y GitHub', completada: false },
    { id: 2, texto: 'Crear repositorio del proyecto', completada: true },
  ])

  const [nuevaTarea, setNuevaTarea] = useState('')

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
    }

    setTareas([...tareas, tarea])
    setNuevaTarea('')
  }

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    )

    setTareas(tareasActualizadas)
  }

  const eliminarTarea = (id) => {
    const tareasRestantes = tareas.filter(
      (tarea) => tarea.id !== id
    )

    setTareas(tareasRestantes)
  }

  const tareasCompletadas = tareas.filter(
    (tarea) => tarea.completada
  ).length

  return (
    <main>
      <h1>TaskFlow</h1>
      <h2>Gestor de Tareas - Proyecto Integrador</h2>

      <p>Proyecto Integrador - Práctica Git y GitHub</p>
      <p>Versión estable de TaskFlow</p>

      <h3>Nueva tarea</h3>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />

      <button onClick={agregarTarea}>
        Agregar
      </button>

      <h3>Mis tareas</h3>

      {tareas.length === 0 && (
        <p>No hay tareas registradas.</p>
      )}

      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => completarTarea(tarea.id)}
          />

          <span
            style={{
              textDecoration: tarea.completada
                ? 'line-through'
                : 'none'
            }}
          >
            {tarea.texto}
          </span>

          <button onClick={() => eliminarTarea(tarea.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <p>Total de tareas registradas: {tareas.length}</p>
      <p>Completadas: {tareasCompletadas}</p>
    </main>
  )
}

export default App