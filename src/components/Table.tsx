import { useEffect, useState } from 'react';
import { fetchAllIdentifications } from '../services/axios';
import { IdentificationResponseDTO } from '../types/Identification';
import { Searcher } from './Searcher';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';

export const Table = () => {
  
  const [identifications, setIdentifications] = useState<Array<IdentificationResponseDTO>>([]);

  useEffect(() => { 
    fetchAllIdentifications()
      .then(identifications => setIdentifications(identifications));
  }, []);
  
  return (
    <div>
      <h1>Esta es la tabla de identificaciones</h1>
      <Searcher />
      <table>
        <TableHeader />
        <TableBody content={identifications} />
      </table>
    </div>
  )
}
