import { IdentificationResponseDTO } from '../types/Identification'

interface TableBodyState {
  content: Array<IdentificationResponseDTO>
}

export const TableBody = ({ content }: TableBodyState) => {
  return (
    <tbody>
    {
      content.map(identification => 
        <tr key={identification.id}>
          <td>{identification.id}</td>
          <td>{identification.commonName}</td>
          <td>{identification.scientificName}
            {`${identification.firstLetterLastname ? '; ' + identification.firstLetterLastname + '.' : ''}`}
          </td>
          {/*IN_CONSERVATION*/}
          <td>{identification.family}</td>
          <td>{identification.status}</td>
        </tr>)
    }
    </tbody>
  )
}
