export interface IdentificationResponseDTO {
  id: number,
  commonName: string,
  scientificName?: string,
  firstLetterLastname?: string,
  family?: string,
  status: Status
}

export type Status = 'ALL' | 'IN_CONSERVATION' | 'AVAILABLE' | 'NON_EXISTENT'; 