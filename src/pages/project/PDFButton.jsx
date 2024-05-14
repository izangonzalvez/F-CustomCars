import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PDFButton = ({ car }) => {
  const buttonStyles = {
    backgroundColor: '#FFD700',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)', 
    background: 'linear-gradient(to bottom, #FFD700 0%, #FFA500 100%)', 
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    label: {
      fontWeight: 'bold',
    },
    value: {
      marginLeft: 10,
    },
  });

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    totalPrice += car.wheel.price;
    totalPrice += car.engine.price;
    totalPrice += car.suspension.price;
    totalPrice += car.brake.price;
    totalPrice += car.exhaustpipe.price;
    totalPrice += car.light.price;
    totalPrice += car.spoiler.price;
    totalPrice += car.sideskirt.price;
    return totalPrice;
  };

  const calculateTotalPriceWithIVA = () => {
    const totalPrice = calculateTotalPrice();
    const totalWithIVA = totalPrice * 1.21; 
    return totalWithIVA.toFixed(2); 
  };

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Presupuesto del Proyecto</Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{car.name}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Color:</Text>
            <Text style={styles.value}>{car.color}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Bozina:</Text>
            <Text style={styles.value}>{car.horn}</Text>
          </View>
          <Text style={styles.title}>Detalles del Coche</Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Llanta:</Text>
            <Text style={styles.value}>{car.wheel.name} - {car.wheel.price}€</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Motor:</Text>
            <Text style={styles.value}>{car.engine.name} - {car.engine.price}€</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Suspensión:</Text>
            <Text style={styles.value}>{car.suspension.name} - {car.suspension.price}€</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Frenos:</Text>
            <Text style={styles.value}>{car.brake.name} - {car.brake.price}€</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Escape:</Text>
            <Text style={styles.value}>{car.exhaustpipe.type} - {car.exhaustpipe.price}€</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Faros:</Text>
            <Text style={styles.value}>{car.light.name} - {car.light.price}€</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Alerón:</Text>
            <Text style={styles.value}>{car.spoiler.type} - {car.spoiler.price}€</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Taloneras:</Text>
            <Text style={styles.value}>{car.sideskirt.material} - {car.sideskirt.price}€</Text>
          </View>
          <Text style={[styles.title, { marginTop: 20 }]}>Precio Total: {calculateTotalPrice()}€</Text>
          <Text style={[styles.title, { marginTop: 10 }]}>Precio Total + IVA: {calculateTotalPriceWithIVA()}€</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink document={<MyDocument />} fileName="presupuesto.pdf">
      {({ loading }) => (
        loading ? 'Generando PDF...' : <button style={buttonStyles}>Descargar Presupuesto</button>
      )}
    </PDFDownloadLink>
  );
};

export default PDFButton;
