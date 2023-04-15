import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { firebase, db } from "../database/firebase"
import { collection, getDocs, addDoc, deleteDoc, getDoc } from "firebase/firestore"

const addDataSupplies = ({navigation}) => {
  const [addID, setID] = useState("");
  const [addProductname, setProductname] = useState("");
  const [addTotal, setTotal] = useState('');
  function create() {
    console.log("เข้านะจ๊ะ")
    console.log(addID)
    addDoc(collection(db, "supplies"),{
      id_customer: addID,
      productName: addProductname,
      productTotal: addTotal
    }).then((res) => {
      setID('');
      setProductname('');
      setTotal('');
    })
      .catch((err) => {
        console.log('Error found: ', err);
      })
  };
  // const [data, setData] = useState({});
   // เก็บข้อมูลทั้งหมดในรูปแบบ Object

  // 
  //   try {
  //     await AsyncStorage.setItem("idUser", inputValue1);
  //     await AsyncStorage.setItem("nameProduct", inputValue2);
  //     await AsyncStorage.setItem("numberProduct", inputValue3);
  //     console.log("ข้อมูลถูกเก็บเรียบร้อยแล้ว!");
  //   } catch (error) {
  //     console.log("เกิดข้อผิดพลาดในการเก็บข้อมูล:", error);
  //   }

  // const saveData = async () => {
  //   try {
  //     setData({idUser:inputValue1, nameProduct:inputValue2, numberProduct:inputValue3})
  //     const value = await AsyncStorage.getItem('data');
  //     value = value + JSON.stringify(data)
  //     // ใช้ AsyncStorage.setItem() เพื่อเก็บข้อมูลลงใน LocalStorage โดยกำหนด key เป็นชื่อของชุดข้อมูล และ value เป็นข้อมูลที่ต้องการบันทึกในรูปแบบ JSON.stringify()
  //     await AsyncStorage.setItem('data', JSON.stringify(data));
  //     console.log('บันทึกข้อมูลสำเร็จ');
  //   } catch (error) {
  //     console.log('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles}>ลงทะเบียนพัสดุ</Text>
      <TextInput style={styles.input} placeholder="ID ลูกค้า" value={addID} onChangeText={(addID) => { setID(addID) }}/>
      <TextInput style={styles.input} placeholder="ชื่อสินค้า" value={addProductname} onChangeText={(addProductname) => { setProductname(addProductname) }}/>
      <TextInput style={styles.input} placeholder="จำนวนสินค้า" value={addTotal} onChangeText={(addTotal) => { setTotal(addTotal) }}/>

      {/* onChangeText={text => setData({idUser:inputValue1, nameProduct:inputValue2, numberProduct:inputValue3})} */}
      <Button title="submit" color="#841584" 
      onPress={() => {create(); navigation.navigate("supplies")}}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#B2A4FF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: "#fff",
    width: "80%",
    height: "5%",
    margin: 12,
    padding: 10,
    borderRadius: 10,
  },
});



export default addDataSupplies;
