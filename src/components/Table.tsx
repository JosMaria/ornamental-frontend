import { IdentificationResponseDTO } from '../types/Identification';
import { translateStatus } from '../utils/translate';

import '../stylesheets/Table.css';

interface TableProps {
  searchResults: Array<IdentificationResponseDTO>
}

export const Table = ({ searchResults }: TableProps) => {
  return (   
    <table>
      <TableHeader />
      <TableBody searchResults={searchResults} />
    </table>
  )
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>N°</th>
        <th>NOMBRE COMÚN</th>
        <th>NOMBRE CIENTIFICO</th>
        <th>FAMILIA</th>
        <th>ESTADO</th>
      </tr>
    </thead>
  )
}

const TableBody = ({ searchResults }: TableProps) => {
  return (
    <tbody>
    {
      searchResults.map(identification => 
        <tr key={identification.id}>
          <td>{identification.id}</td>
          <td className='uppercase-firstLetter'>{identification.commonName}</td>
          <td>
            <p><i>{identification.scientificName}</i></p>
            <p><i>{`${identification.firstLetterLastname ? ' ' + identification.firstLetterLastname + '.' : ''}`}</i></p>
          </td>
          <td className='uppercase-firstLetter'>{identification.family}</td>
          <td>{translateStatus(identification.status)}</td>
        </tr>
      )
    }
    </tbody>
  )
}