export interface IdentificationResponseDTO {
  id: number,
  commonName: string,
  scientificName?: string,
  firstLetterLastname?: string,
  family?: string,
  status: string
}