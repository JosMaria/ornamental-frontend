import { StyleSheet, Font, Document, Page, Text, View } from '@react-pdf/renderer';
import { IdentificationResponseDTO } from '../types/Identification';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  }
});

interface ViewListPDFProps {
  searchResults: Array<IdentificationResponseDTO>
}

export const ViewListPDF = ({ searchResults }: ViewListPDFProps) => (
  <Document title='plant-list.pdf'>
      <Page size='A4' style={styles.body}>
        <Text style={styles.title}>LISTADO</Text>
        {
          searchResults.map(identification => (
            <View>
              <Text style={styles.text}>
                {identification.id} {identification.commonName} {identification.scientificName} {identification.firstLetterLastname}
                {identification.family} {identification.status}
              </Text>
            </View>
          ))
        }
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (`${pageNumber} / ${totalPages}`)} fixed />
      </Page>
  </Document>
);