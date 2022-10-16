import { IdentificationResponseDTO, Status } from '../types/Identification';

interface SearcherProps {
  changeStatus: (status: Status) => void
}

export const Searcher = ({ changeStatus }: SearcherProps) => {
  return (
    <form>
      <select name='status' onChange={(event) => changeStatus(event.target.value as Status)}>
        <option value='ALL'>TODOS</option>
        <option value='IN_CONSERVATION'>EN CONSERVACIÓN</option>
        <option value='AVAILABLE'>DISPONIBLE</option>
        <option value='NON_EXISTENT'>NO EXISTENTE</option>
      </select>
    </form>
  )
}

interface SearchBarProps {
  identifications: Array<IdentificationResponseDTO>,
  wordToSearchBar: (identifications: Array<IdentificationResponseDTO>) => void
}

export const SearchBar = ({ identifications, wordToSearchBar }: SearchBarProps) => {
  const handleSearchBar = (text: string) => {
    if (!text) {
      wordToSearchBar(identifications)
    } else {
      const resultsArray = identifications.filter(identification => identification.commonName.includes(text.trim()));
      wordToSearchBar(resultsArray);
    }
  }

  return (
    <form>
       <input placeholder='Buscar' type='text' onChange={e => handleSearchBar(e.target.value as string)} />
    </form>
  )
}
