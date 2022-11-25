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
  viewHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  textHeader: {
    fontFamily: 'Helvetica',
    fontSize: 12
  },
  text: {
    
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
    paddingLeft: 20
  },
  textNumber: {
    padding: 5,
    fontFamily: 'Times-Roman',
    fontSize: 14,
    width: 40,
    backgroundColor: 'blue'
  },
  textCommonName: {
    padding: 5,
    fontFamily: 'Times-Roman',
    fontSize: 14,
    width: 150,
    backgroundColor: 'green'
  },
  textScientificName: {
    padding: 5,
    fontFamily: 'Times-Roman',
    fontSize: 14,
    width: 200,
    backgroundColor: 'white'
  },
  textFamily: {
    padding: 5,
    fontFamily: 'Times-Roman',
    fontSize: 14,
    width: 100,
    backgroundColor: 'pink'
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
          <Text style={styles.textHeader}>N°</Text>
          <Text style={styles.textHeader}>NOMBRE COMÚN</Text>
          <Text style={styles.textHeader}>NOMBRE CIENTIFICO</Text>
          <Text style={styles.textHeader}>FAMILIA</Text>
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