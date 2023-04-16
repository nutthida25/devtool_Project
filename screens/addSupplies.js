import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from '@react-native-firebase/firestore';
import { auth, db } from '../database/firebase'
import { collection, getDocs, where, addDoc, deleteDoc, getDoc, query, onSnapshot } from "firebase/firestore"

const addSupplies = ({ navigation }) => {
  const [data, setData] = useState([]);
  const dbProduct = collection(db, "supplies");
  // updateData();

  // function updateData() {


  // keepChapter = [];
  // getDocs(dbProduct).then((x) => x.docs.forEach((doc) => keepChapter.push(doc.data())))
  // console.log(keepChapter, 'keepChapter')


  useEffect(() => {
    onSnapshot(dbProduct, (snapshot) => {
      // console.log(snapshot.docs)
      const users = snapshot.docs.map(doc => doc.data());
      setData(users);
      console.log(users, '1214');

    });
  }, []);



  // console.log(users[0].id_customer)
  // .productName
  // .productTotal

  // snapshot.docs.forEach((doc) => {
  //     // setTestData((prev) => [...prev, doc.data()])
  //     keepData.push({id_customer:doc.id_customer, ...doc.data()})
  //     console.log(keepData);
  // })
  //   })
  // }

  return (
    // {data.map((item, index) => (

    //   <Text key={index}>
    //     <Text>{item.id_customer}</Text>
    //     <Text>{item.productName}</Text>
    //     <Text>{item.productTotal}</Text>
    //     </Text>))}



    <View style={styles.container}>
      <View style={styles.view}>
        <Text>ส่งของ</Text>
      </View>

      {data.map((item, index) => (
        <View key={index} style={styles.listSupplies}>
          <TouchableOpacity style={styles.box}></TouchableOpacity>
          <View style={styles.detile}>
            <Text>ชื่อสินค้า : {item.productName}</Text>
            <Text>จำนวน : {item.productTotal}</Text>
            <Text>ID ผู้รับ : {item.id_customer}</Text>
          </View>

        </View>))}

      <TouchableOpacity style={styles.addOn}
        onPress={() => { navigation.navigate("data"), getData }}>

        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#B2A4FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  view: {
    width: '100%',
    height: '30%',
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  listSupplies: {
    width: '85%',
    height: '15%',
    marginTop: '5%',
    justifyContent: "flex-start",
    flexDirection: 'row',
    // alignItems: "center",
    backgroundColor: "#FDF7C3",
    borderRadius: 20,
    // borderColor: "#937DC2",
    // borderWidth: 1.5
    shadowColor: "#666666",
    shadowRadius: 4.50,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 5,
  },
  box: {
    width: '23%',
    height: '80%',
    marginTop: '3%',
    marginRight: '5%',
    marginLeft: '4%',
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFFF",
    borderRadius: 20,
    // shadowColor: "#666666",
    // shadowRadius: 4.50,
    // shadowOffset: {
    //   height: 4,
    //   width: 0,
    // }
  },
  addOn: {
    width: '85%',
    height: '5%',
    marginTop: '5%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDF7C3",
    borderRadius: 15,
    shadowColor: "#666666",
    shadowRadius: 4.50,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 5,

  },
  detile: {
    marginTop: '5%',
  }
});




export default addSupplies;