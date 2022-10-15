import { IdentificationResponseDTO } from '../types/Identification';
import { translateStatus } from '../utils/translate';

import '../stylesheets/TableBody.css';

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
          <td className='uppercase-firstLetter'>{identification.commonName}</td>
          <td className='uppercase-firstLetter'>{identification.scientificName}
            {`${identification.firstLetterLastname ? ' ' + identification.firstLetterLastname + '.' : ''}`}
          </td>
          <td className='uppercase-firstLetter'>{identification.family}</td>
          <td>{translateStatus(identification.status)}</td>
        </tr>)
    }
    </tbody>
  )
}
