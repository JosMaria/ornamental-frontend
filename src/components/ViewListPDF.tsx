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
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Times-Bold',
    padding: 20
  },
  viewHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textHeader: {
    fontFamily: 'Helvetica',
    fontSize: 12
  },
  textHeaderNumber: {
    width: 40,
    border: '1 solid black',
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    padding: 7,
    textAlign: 'center',
    margin: 0
  },
  textHeaderCommonName: {
    width: 170,
    border: '1 solid black',
    borderLeftWidth: 0,
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    padding: 7,
    textAlign: 'center',
    margin: 0
  },
  textHeaderScientificName: {
    width: 200,
    border: '1 solid black',
    borderLeftWidth: 0,
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    padding: 7,
    textAlign: 'center',
    margin: 0
  },
  textHeaderFamily: {
    width: 120,
    border: '1 solid black',
    borderLeftWidth: 0,
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    padding: 7,
    textAlign: 'center',
    margin: 0
  },
  textNumber: {
    textAlign: 'center',
    padding: 5,
    fontFamily: 'Times-Roman',
    fontSize: 13,
    width: 40,
    border: '1 solid black',
    borderTopWidth: 0,
    margin: 0
  },
  textCommonName: {
    padding: 5,
    fontFamily: 'Times-Roman',
    fontSize: 13,
    width: 170,
    border: '1 solid black',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    margin: 0
  },
  textScientificName: {
    padding: 5,
    fontFamily: 'Times-Roman',
    fontSize: 13,
    width: 200,
    border: '1 solid black',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    margin: 0
  },
  textFamily: {
    padding: 5,
    fontFamily: 'Times-Roman',
    fontSize: 13,
    width: 120,
    border: '1 solid black',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    margin: 0
  },
  viewRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
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


const firstLetterToUpperCase = (word: string | undefined) => {
  if (word) {
    return word.length === 1 ? 
      word.toUpperCase() : 
      word.charAt(0).toUpperCase() + word.substring(1, word.length)
    
  } else {
    return "";
  }
}
interface ViewListPDFProps {
  searchResults: Array<IdentificationResponseDTO>
}

export const ViewListPDF = ({ searchResults }: ViewListPDFProps) => (
  <Document title='plant-list.pdf'>
      <Page size='A4' style={styles.body}>
        <Text style={styles.title}>LISTADO</Text>
        <View style={styles.viewHeader}>
          <Text style={styles.textHeaderNumber}>N°</Text>
          <Text style={styles.textHeaderCommonName}>NOMBRE COMÚN</Text>
          <Text style={styles.textHeaderScientificName}>NOMBRE CIENTIFICO</Text>
          <Text style={styles.textHeaderFamily}>FAMILIA</Text>
        </View>
        {
          searchResults.map(identification => (
            <View style={styles.viewRow} key={identification.id}>
              <Text style={styles.textNumber}>{identification.id}</Text>
              <Text style={styles.textCommonName}>{firstLetterToUpperCase(identification.commonName)}</Text>
              <Text style={styles.textScientificName}>{firstLetterToUpperCase(identification.scientificName)} {firstLetterToUpperCase(identification.firstLetterLastname)}</Text>
              <Text style={styles.textFamily}>{firstLetterToUpperCase(identification.family)}</Text>                
            </View>
          ))
        }
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (`${pageNumber} / ${totalPages}`)} fixed />
      </Page>
  </Document>
);