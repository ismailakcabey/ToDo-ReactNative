import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextInput } from 'react-native-paper';

let dosya = [
  {
    "userId": 1,
    "id": 1,
    "title": "first mission",
    "completed": "false"
  }
]

export default function App() {

  const [user, setUser] = useState("")
  const [num, setNum] = useState("");
  const [gorev, setGorev] = useState("");
  const [comp, setComp] = useState("");
  let kucukDosya = { "userId": user, "id": num, "title": gorev, "complated": comp }
  return (
    <SafeAreaView>
      <ScrollView>

        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.divider} />
            <Text style={styles.title}>TODO <Text style={{ fontWeight: "400", color: "#24A6D9" }}>List</Text></Text>
            <View style={styles.divider} />
          </View>
          <View style={{ marginVertical: 48 }}>
            <View>
              <TextInput value={num}
                onChangeText={num => setNum(num)} activeUnderlineColor='#24A6D9' underlineColor='black' placeholder='Id' style={{ height: 50, width: 300, margin: 8 }} />
              <TextInput
                value={gorev}
                onChangeText={gorev => setGorev(gorev)}
                activeUnderlineColor='#24A6D9'
                underlineColor='black'
                placeholder='ToDo'
                style={{ height: 50, width: 300, margin: 8 }} />
              <TextInput
                value={user}
                onChangeText={user => setUser(user)}
                activeUnderlineColor='#24A6D9'
                underlineColor='black'
                placeholder='User'
                style={{ height: 50, width: 300, margin: 8 }} />
              <TextInput
                value={comp}
                onChangeText={comp => setComp(comp)}
                activeUnderlineColor='#24A6D9'
                underlineColor='black'
                placeholder='Statu'
                style={{ height: 50, width: 300, margin: 8 }} />
            </View>
            <TouchableOpacity
              onPress={() => {
                dosya.push(kucukDosya)
              }}
              style={styles.addList}>
              <AntDesign name='plus' size={16} color={'#24A6D9'} />
            </TouchableOpacity>
            <Text style={styles.add}>Add List</Text>
          </View>
          <View style={{ height: 275, paddingLeft: 32 }}>
            <FlatList
              data={dosya}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) =>
                <ScrollView>
                  <View style={styles.listContainer}>
                    <Text style={styles.numara} numberOfLines={1}>{item.id}</Text>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={styles.subtitle}>Title</Text>
                      <Text style={styles.gorev}>{item.title}</Text>
                      <Text style={styles.subtitle}>Statu</Text>
                      <Text style={styles.gorev}>{(item.completed)}</Text>
                      <BouncyCheckbox
                        size={25}
                        fillColor="#A7CBD9"
                        unfillColor="#FFFFFF"
                        text="ToDo"
                        iconStyle={{ borderColor: "red" }}
                        onPress={() => { item.completed = "true" }}
                      />
                    </View>
                  </View>
                </ScrollView>
              }
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  divider: {
    backgroundColor: '#A7CBD9',
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: '#2D3436',
    paddingHorizontal: 68
  },
  addList: {
    marginHorizontal: 125,
    width: 60,
    borderWidth: 2,
    borderColor: '#A7CBD9',
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    marginHorizontal: 125,
    color: '#24A6D9',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8
  },
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: "center",
    width: 225,
    backgroundColor: '#A7CBD9'
  },
  numara: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 18
  },
  subtitle: {
    marginBottom: 8,
    fontSize: 30,
    fontWeight: '500',

  },
  gorev: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',

  },
});
