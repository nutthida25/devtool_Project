import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { auth, db } from '../database/firebase'
import { collection, getDocs, where, addDoc, deleteDoc, getDoc, query, onSnapshot } from "firebase/firestore"
import QRCode from 'react-native-qrcode-svg';

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

  const fetchData = () => {
    try {
      const snapshot = firestore().collection('supplies').get();
      const users = snapshot.docs.map(doc => doc.data());
      console.log(users);
    } catch (error) {
      console.error(error);
    }
  };

  // เรียกใช้งานฟังก์ชัน fetchData()
  fetchData();

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={{
          fontFamily: 'noto-sans',
          fontSize: 40,
          fontWeight: "bold",
          color: "#B2A4FF"
        }}>Lot 45</Text>
        <Image style={{ width: '10%', height: '10%', borderRadius: 20, marginBottom: 15 }} source={{ uri: 'https://cdn.discordapp.com/attachments/725983079675461725/1097103746749706320/image.png' }} />
      </View>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.listSupplies}>
          <View style={styles.box}>
            <QRCode
              value={item.id_customer}
              size={80}
              backgroundColor='white'
              color='gray'
            />
          </View>
          <View>
            <Text style={styles.detileFont}>ชื่อสินค้า : {item.productName}</Text>
            <Text style={styles.detileFont}>จำนวน : {item.productTotal}</Text>
            <Text style={styles.detileFont}>ID ผู้รับ : {item.id_customer}</Text>
          </View>

        </TouchableOpacity>))}
      <TouchableOpacity style={styles.addOn}
        onPress={() => { navigation.navigate("data"), getData }}
      >

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
    height: '20%',
    flexDirection: "row",
    backgroundColor: "#fff",
    // justifyContent: "space-between",
    alignItems: "flex-end",
    // paddingBottom: 20,
    paddingLeft: 30
  },
  listSupplies: {
    width: '85%',
    height: '15%',
    marginTop: '5%',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
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
  addOn: {
    width: '85%',
    height: '5%',
    marginTop: '5%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDF7C3",
    borderRadius: 15,

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
    width: '26%',
    height: '80%',
    marginTop: '3%',
    marginRight: '5%',
    marginLeft: '4%',
    // backgroundColor: "#FFFF",
    // borderRadius: 20,
  },
  detileFont: {
    fontFamily: 'noto-sans',
    fontSize: 15,
    color: "gray"
  }
});




export default addSupplies;