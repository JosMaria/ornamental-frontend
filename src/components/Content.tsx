import { useEffect, useState } from 'react';
import { IdentificationResponseDTO, Status } from '../types/Identification';
import { fetchAllIdentifications, fetchAllIdentificationsByStatus } from '../services/axios';
import { DropdownSearcher, SearchBar} from './Searcher';
import { Table } from './Table';

export const Content = () => {

  const [identifications, setIdentifications] = useState<Array<IdentificationResponseDTO>>([]);
  const [searchResults, setSearchResults] = useState<Array<IdentificationResponseDTO>>([]);
  const [stateToSearch, setStateToSearch] = useState<Status>('ALL');

  const handleChangeStatus = (status: Status) => setStateToSearch(status);
  const handleWordToSearchBar = (identifications: Array<IdentificationResponseDTO>) => setSearchResults(identifications);

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
      <h1>LISTADO</h1>
      <DropdownSearcher changeStatus={handleChangeStatus} />
      <SearchBar identifications={identifications} wordToSearchBar={handleWordToSearchBar} />
      <Table searchResults={searchResults} />
    </div>
  )
}
