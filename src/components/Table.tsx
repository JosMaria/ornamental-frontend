import { useEffect, useState } from 'react';
import { fetchAllIdentifications, fetchAllIdentificationsByStatus } from '../services/axios';
import { IdentificationResponseDTO } from '../types/Identification';
import { Searcher, SearchBar} from './Searcher';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { Status } from '../types/Identification';

export const Table = () => {
  const [identifications, setIdentifications] = useState<Array<IdentificationResponseDTO>>([]);
  const [searchResults, setSearchResults] = useState<Array<IdentificationResponseDTO>>([]);
  const [stateToSearch, setStateToSearch] = useState<Status>('ALL');

  const handleChangeStatus = (status: Status) => {
    setStateToSearch(status);
  }

  const handleWordToSearchBar = (identifications: Array<IdentificationResponseDTO>) => {
    setSearchResults(identifications);
  }

  useEffect(() => {
    stateToSearch !== 'ALL' ? 
      fetchAllIdentificationsByStatus(stateToSearch)
        .then(identifications => {
          setIdentifications(identifications);
          setSearchResults(identifications);
        }) :
      fetchAllIdentifications()
        .then(identifications => {
          setIdentifications(identifications);
          setSearchResults(identifications);
        });
  }, [stateToSearch]);
  
  return (
    <div>
      <h1>Esta es la tabla de identificaciones</h1>
      <Searcher changeStatus={handleChangeStatus} />
      <SearchBar identifications={identifications} wordToSearchBar={handleWordToSearchBar} />
      <table>
        <TableHeader />
        <TableBody content={searchResults} />
      </table>
    </div>
  )
}
