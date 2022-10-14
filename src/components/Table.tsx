import { useEffect, useState } from 'react'
import { fetchAllIdentifications } from '../services/axios'

export const Table = () => {
  
  const [identifications, setIdentifications] = useState([]);

  useEffect(() => { 
    fetchAllIdentifications()
      .then(identifications => setIdentifications(identifications));
  }, [])
  
  return (
    <div>
      Table
      <>{ console.log(identifications)}</>
    </div>
  )
}
