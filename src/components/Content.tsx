import { useEffect, useState } from 'react';
import { IdentificationResponseDTO, Status } from '../types/Identification';
import { fetchAllIdentificationsByStatus } from '../services/axios';
import { DropdownSearcher, SearchBar} from './Searcher';
import { Table } from './Table';

import '../stylesheets/Content.css';

export const Content = () => {
  const [identifications, setIdentifications] = useState<Array<IdentificationResponseDTO>>([]);
  const [searchResults, setSearchResults] = useState<Array<IdentificationResponseDTO>>([]);
  const [stateToSearch, setStateToSearch] = useState<Status>('ALL');

  const handleChangeStatus = (status: Status) => setStateToSearch(status);
  const handleWordToSearchBar = (identifications: Array<IdentificationResponseDTO>) => setSearchResults(identifications);

  useEffect(() => {
    fetchAllIdentificationsByStatus(stateToSearch)
      .then(identifications => {
        setIdentifications(identifications);
        setSearchResults(identifications)
      })
  }, [stateToSearch]);

  const [viewNormal, setViewNormal] = useState(true);
  const [viewPDF, setViewPDF] = useState(false); 

  const handleViewNormal = () => {
    setViewPDF(false);
    setViewNormal(true);
  };

  const handleViewPDF = () => {
    setViewNormal(false);
    setViewPDF(true);
  };

  const sectionsButtons = (
    <div className='buttons-container'>
      <button onClick={handleViewNormal}>Vista Normal</button>
      <button onClick={handleViewPDF}>Vista PDF</button>
      <button>Descargar PDF</button>
    </div>
  );

  return (
    <div className='content-container'>
      { sectionsButtons }

      { viewNormal && 
        <>
          <h1>LISTADO DE PLANTAS</h1>
          <div className='searcher-container'>
            <SearchBar identifications={identifications} wordToSearchBar={handleWordToSearchBar} />
            <DropdownSearcher changeStatus={handleChangeStatus} />
          </div>
          <Table searchResults={searchResults} />  
        </>
      }
      {
        viewPDF && <h1>VISTA PDF</h1>
      }

    </div>
  )
}
