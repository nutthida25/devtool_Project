import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const mainPage = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const SIZE = width
  return (
    <View style={styles.bigcontainer}>
      <View style={styles.view2}>
        <View style={styles.subview1}>
          <Text style={[styles.header, {color: "#fff"}]}>Wingman</Text>
          <Text style={[styles.testfont, {color: "#fff"}]}>ส่งของไว บริการด้วยใจ</Text>
        </View>
        <View  style={styles.subview2}>
          <Image style={{ width: 120, height: 80 }} source = {{uri:'https://cdn.discordapp.com/attachments/725983079675461725/1096448483579408444/Moneyverse_Gifts_1.png'}}/>
        </View>
      </View>
      <TouchableOpacity style={styles.addSupplie} onPress={() => { navigation.navigate("supplies") }}>
        <Text style={[styles.header, {color: "#B2A4FF"}]}>ส่งของ Lot ใหม่</Text>
        <Image style={{ width: 50, height: 50 }} source = {{uri:'https://cdn.discordapp.com/attachments/725983079675461725/1096447493044174888/image.png'}}/>

      </TouchableOpacity>
      <View style={styles.favaddress}>
        <Text style={styles.testfont}>ที่อยู่โปรด</Text>
        <View style={styles.alladdress}>
          <View style={styles.address}>
            <TouchableOpacity style={[styles.circle, {marginBottom: 5}]}></TouchableOpacity>
            <Text style={styles.testfont}>น้องพิม</Text>
          </View>
          <View style={styles.address}>
            <TouchableOpacity style={[styles.circle, {marginBottom: 5}]}></TouchableOpacity>
            <Text style={styles.testfont}>พี่ชาย</Text>
          </View>
          <View style={styles.address}>
            <TouchableOpacity style={[styles.circle, {marginBottom: 5}]}></TouchableOpacity>
            <Text style={styles.testfont}>ไอต้าว</Text>
          </View>
          <View style={styles.address}>
            <TouchableOpacity style={[styles.circle, {marginBottom: 5}]}>
            <Image style={{ width: 50, height: 50 }} source = {{uri:'https://cdn.discordapp.com/attachments/725983079675461725/1096446539192352930/image.png'}}/>
            </TouchableOpacity>
            <Text style={styles.testfont}> </Text>
          </View>
        </View>
        <Text style={styles.testfont}>โปรโมชัน</Text>
      </View>
      <View style={styles.promotion}>
        <ScrollView
          horizontal
          showHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThorttle={16}
          snapToInterval={SIZE}
          decelerationRate="fast"
        >
          <TouchableOpacity style={styles.subpromotion}>
            <Image style={{ width: '100%', height: '100%', borderRadius: 20}} source={{uri: 'https://cdn.discordapp.com/attachments/725983079675461725/1096452976920494180/image.png'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subpromotion}>
          <Image style={{ width: '100%', height: '100%', borderRadius: 20}} source={{uri: 'https://cdn.discordapp.com/attachments/725983079675461725/1096455606258368656/image.png'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subpromotion}>
            <Image style={{ width: '100%', height: '100%', borderRadius: 20}} source={{uri: 'https://cdn.discordapp.com/attachments/752894614448635944/1096457291844296825/image_3.png'}}/>
          </TouchableOpacity>
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  view2: {
    width: '100%',
    height: '30%',
    flexDirection: "column",
    backgroundColor: "#B2A4FF",
    paddingLeft: 30,
    paddingRight: 10,
    justifyContent: "flex-end",
  },
  header: {
    fontFamily: 'noto-sans',
    fontSize: 20,
    fontWeight: "bold"
  },
  testfont: {
    fontFamily: 'noto-sans',
    fontSize: 15
  },
  addSupplie: {
    width: '85%',
    height: '13%',
    marginTop: '5%',
    flexDirection: "row",
    justifyContent: "space-around",
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
  favaddress: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 15
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#FDF7C3',
    textAlign: 'center',
    shadowColor: "#666666",
    shadowRadius: 4.50,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 5,
  },
  alladdress: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  address: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  promotion: {
    width: "100%",
    height: "30%",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 50
  },
  subpromotion: {
    backgroundColor: "#D9D9D9",
    width: "330%",
    marginRight: 15,
    borderRadius: 20
    // height: "100%",
  },
  subview1: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  subview2:{
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }

});




export default mainPage;