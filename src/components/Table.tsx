import { useEffect, useState } from 'react';
import { fetchAllIdentifications, fetchAllIdentificationsByStatus } from '../services/axios';
import { IdentificationResponseDTO } from '../types/Identification';
import { Searcher } from './Searcher';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { Status } from '../types/Identification';

export const Table = () => {
  const [identifications, setIdentifications] = useState<Array<IdentificationResponseDTO>>([]);
  const [stateToSearch, setStateToSearch] = useState<Status>('ALL');

  const handleChangeStatus = (status: Status) => {
    setStateToSearch(status);
  }

  useEffect(() => {
    stateToSearch !== 'ALL' ? 
      fetchAllIdentificationsByStatus(stateToSearch)
        .then(identifications => setIdentifications(identifications)) :
      fetchAllIdentifications()
        .then(identifications => setIdentifications(identifications));
  }, [stateToSearch]);
  
  return (
    <div>
      <h1>Esta es la tabla de identificaciones</h1>
      <Searcher changeStatus={handleChangeStatus} />
      <table>
        <TableHeader />
        <TableBody content={identifications} />
      </table>
    </div>
  )
}
