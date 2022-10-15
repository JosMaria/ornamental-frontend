export interface IdentificationResponseDTO {
  id: number,
  commonName: string,
  scientificName?: string,
  firstLetterLastname?: string,
  family?: string,
  status: Status
}

type Status = 'IN_CONSERVATION' | 'AVAILABLE' | 'NON_EXISTENT'; 