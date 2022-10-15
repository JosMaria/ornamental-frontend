import { Status } from '../types/Identification';

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
