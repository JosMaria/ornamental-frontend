import { IdentificationResponseDTO } from '../types/Identification';
import { translateStatus } from '../utils/translate';

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
          <td>{identification.family}</td>
          <td>{translateStatus(identification.status)}</td>
        </tr>)
    }
    </tbody>
  )
}
