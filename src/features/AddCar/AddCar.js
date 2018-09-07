import React, { Component } from "react";
import { StyleSheet, View, Text, Modal, Button, Picker,SectionList } from "react-native";
import Fab from "../../components/Fab";

const Addcar = ({
  visible,
  onPress,
  selectedValueModalPicker,
  selectedValueMakePicker,
  selectedValueYearPicker,
  onValueChangeMakePicker,
  onValueChangeModalPicker,
  onValueChangeYearPicker
}) => {
  return (
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={visible}
        onRequestClose={() => console.log("modal close")}
      >
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.containerPicker}>
              <Picker
                selectedValue={selectedValueMakePicker}
                style={styles.picker}
                onValueChange={onValueChangeMakePicker}
              >
                <Picker.Item label="FORD" value="ford" />
                <Picker.Item label="TOYOTA" value="toyota" />
                <Picker.Item label="Honda" value="ford" />
                <Picker.Item label="Jeep" value="toyota" />
              </Picker>

              <Picker
                selectedValue={selectedValueModalPicker}
                style={styles.picker}
                onValueChange={onValueChangeModalPicker}
              >
                <Picker.Item label="CIVIC" value="ford" />
                <Picker.Item label="PRIUS" value="toyota" />
                <Picker.Item label="CAMRY" value="ford" />
                <Picker.Item label="FALCON" value="toyota" />
              </Picker>

              <Picker
                selectedValue={selectedValueYearPicker}
                style={styles.picker}
                onValueChange={onValueChangeYearPicker}
              >
                <Picker.Item label="2008" value="ford" />
                <Picker.Item label="2009" value="toyota" />
                <Picker.Item label="2010" value="ford" />
                <Picker.Item label="2011" value="toyota" />
              </Picker>
            </View>

            <View style={styles.containerRego}>
              <Text>Remaning Rego Duration</Text>
              <SectionList
                renderItem={({ item, index, section }) => (
                  <Text key={index}>{item}</Text>
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <Text style={{ fontWeight: "bold" }}>{title}</Text>
                )}
                sections={[
                  { title: "Title1", data: ["item1", "item2"] },
                  { title: "Title2", data: ["item3", "item4"] },
                  { title: "Title3", data: ["item5", "item6"] }
                ]}
                keyExtractor={(item, index) => item + index}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Fab onPress={onPress} icon={"done"} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRego: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: 5
  },
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  containerPicker: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: 5
  },
  picker: {
    width: "30%",
    height: 30
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    // backgroundColor:'yellow'
  },
  body: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center"
    //   backgroundColor:'green'
  }
});

export default Addcar;
