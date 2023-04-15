import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from '@react-native-firebase/firestore';

const addSupplies = ({navigation}) => {
  // const [id, setData1] = useState('');
  // const [nameProduct, setData2] = useState('');
  // const [numberProduct, setData3] = useState('');

  // const getData = async () => {
  //   try {
  //     // ใช้ AsyncStorage.getItem() เพื่อดึงข้อมูลจาก LocalStorage โดยกำหนด key ที่เราต้องการดึงข้อมูล
  //     const value1 = await AsyncStorage.getItem('idUser');
  //     const value2 = await AsyncStorage.getItem('nameProduct');
  //     const value3 = await AsyncStorage.getItem('numberProduct');
  //     if (value1 !== null) {
  //       setData1(value1);
  //       console.log(id)
  //     } else {
  //       setData1('ไม่มีข้อมูลใน LocalStorage');
  //     }
  //     if (value2 !== null) {
  //       setData2(value2);
  //       console.log(nameProduct)
  //     } else {
  //       setData2('ไม่มีข้อมูลใน LocalStorage');
  //     }
  //     if (value3 !== null) {
  //       setData2(value3);
  //       console.log(numberProduct)
  //     } else {
  //       setData3('ไม่มีข้อมูลใน LocalStorage');
  //     }
  //   } catch (error) {
  //     console.log('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
  //   }
  // };

  // useEffect(() => {
  //   getData(); // เรียกใช้ฟังก์ชั่น getData เมื่อ App component ถูกแสดงผล
  // }, []);

  const fetchData = () => {
    try {
      const snapshot =  firestore().collection('supplies').get();
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
        <Text>ส่งของ</Text>
      </View>
        <TouchableOpacity style={styles.listSupplies}>
            {/* <Text>{id}</Text>
            <Text>{nameProduct}</Text>
            <Text>{numberProduct}</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.addOn}
        onPress={() => { navigation.navigate("data"), getData} }
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
  view:{
    width: '100%',
    height: '30%',
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  listSupplies:{
    width: '85%',
    height: '15%',
    marginTop: '5%',
    flexDirection: "row",
    justifyContent: "center",
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
  addOn:{
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

  }
});



  
export default addSupplies;