import { useState } from 'react'
import './App.css'

function App() {

  const [producto, setProducto] = useState([])

  async function recuperar() {
    try {
      const response = await fetch('https://scratchya.com.ar/react/datos.php')
      if (response.ok) {
        const data = await response.json()
        setProducto(data)
      } else {
        throw new Error('')
      }
    } catch (error) {
      console.error(error)
    }
  }

  recuperar()

  return (
    <>
      <h1>Proyecto 010</h1>
      <table className='tabla'>
        <thead>
          <tr>
            <th>CODIGO</th>
            <th>DESCRIPCION</th>
            <th>PRECIO</th>
          </tr>
        </thead>
        <tbody>
          {producto.map((product, index) => (
            <tr key={index}>
              <th>
                <td>{product.codigo}</td>
              </th>
              <th>
                <td>{product.descripcion}</td>
              </th>
              <th>
                <td>{product.precio}</td>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
