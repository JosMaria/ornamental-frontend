import { useEffect, useState } from "react"
import { Status } from "../types/Identification"

export const Searcher = () => {
  const [stateToSearch, setStateToSearch] = useState<Status>();
  
  useEffect(() => {
    console.log(stateToSearch);
  }, [stateToSearch])

  return (
    <form>
      <select name='status' onChange={event => setStateToSearch(event.target.value as Status)}>
        <option value='ALL'>TODOS</option>
        <option value='IN_CONSERVATION'>EN CONSERVACIÓN</option>
        <option value='AVAILABLE'>DISPONIBLE</option>
        <option value='NON_EXISTENT'>NO EXISTENTE</option>
      </select>
    </form>
  )
}
