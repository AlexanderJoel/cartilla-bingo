import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['B','I','N','G','O'],
      tableData: [
        ['70', '62', '3', '12', '42'],
        ['91', '80', '18', '40', '38'],
        ['1', '2', '', '45', '29'],
        ['10', '50', '25', '86', '10'],
        ['15', '24', '28', '74', '1']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{backgroundColor: '#537791', }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'black' },
  text: { margin: 6 , color: 'white'}
});