import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text,Platform, Modal, Button, Picker, SectionList,TouchableOpacity, Slider, TextInput, Image } from "react-native";
import Fab from "../../components/Fab";
import { font } from '../../utils/themes';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Addcar = ({
  visible,
  onPress,
  selectedValueModalPicker,
  selectedValueMakePicker,
  selectedValueYearPicker,
  onValueChangeMakePicker,
  onValueChangeModalPicker,
  onValueChangeYearPicker,
  regoPeriod,
  onValueChangeRegoSlider,
  onClose
}) => {
  return (
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={visible}
        onRequestClose={() => console.log("modal close")}
      >

        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor:'#f8f8f8'}}>
          <View style={{ flex: 1 }}>
          <View style={styles.header}>
              <Text style={{fontSize:22, fontWeight:'100'}}>Enter Your New Vehicle Details</Text>
              <TouchableOpacity style={styles.closeBtn} onPress={onClose} ><Icon name={'close'} size={30} color={'#e1e1e1'}/></TouchableOpacity>
              </View>
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
                <Slider
                  style={styles.slider}
                  step={1}
                  minimumValue={0}
                  maximumValue={12}
                  value={regoPeriod}
                  onValueChange={onValueChangeRegoSlider}
                //onSlidingComplete={ val => }
                />
                <Text style={styles.sliderValueLabel}>kkkkkk</Text>
              </View>

              <View>
                <TextInput
                  multiline={true}
                  numberOfLines={5}
                  style={styles.desText}
                  placeholder={'Description'}
                />
              </View>

              <View style={styles.imageContainer}>
                <Text style={styles.imageLabel}>Upload Photos</Text>
                <View style={styles.imageList}>
                  <Image source={require('../../Image/cameraPlaceholder.png')} style={styles.uploadImagePlaceholder} />
                  <Image source={require('../../Image/cameraPlaceholder.png')} style={styles.uploadImagePlaceholder} />
                  <Image source={require('../../Image/cameraPlaceholder.png')} style={styles.uploadImagePlaceholder} />
                  <Image source={require('../../Image/cameraPlaceholder.png')} style={styles.uploadImagePlaceholder} />
                  <Image source={require('../../Image/cameraPlaceholder.png')} style={styles.uploadImagePlaceholder} />

                </View>
              </View>

              <View style={styles.uploadDoc}>
                <TouchableOpacity
                style={styles.uploadDocLabel}
                >
                  <Text style={{alignSelf:'center'}}>Upload Documents</Text>
                </TouchableOpacity> 
                
                <View style={styles.uploadDcList}>
                <Image source={require('../../Image/docPlaceholder.png')} style={styles.uploadDocPlaceholder} />
                  <Image source={require('../../Image/docPlaceholder.png')} style={styles.uploadDocPlaceholder} />
                  <Image source={require('../../Image/docPlaceholder.png')} style={styles.uploadDocPlaceholder} />
                  <Image source={require('../../Image/docPlaceholder.png')} style={styles.uploadDocPlaceholder} />
                  <Image source={require('../../Image/docPlaceholder.png')} style={styles.uploadDocPlaceholder} />
                </View>
              </View>
            </View>

            <View style={styles.footer}>
              <Fab onPress={onPress} icon={"done"} />
            </View>
          </View>
        </ScrollView>

      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  closeBtn:{
    flex:1,
    alignItems:'flex-end',
  },
  header:{
    width:'100%',
    flexDirection:'row',
    paddingHorizontal:10,
    paddingVertical:5
  },
  uploadDoc:{
    marginTop:10,
    padding:8,
    backgroundColor: "#fff",
  },
  imageContainer:{
    marginTop:10,
    padding:8,
    backgroundColor: "#fff",
  },
  uploadDocLabel:{
    fontSize:14,
    backgroundColor:'#e8e8e8',
    borderRadius:60,
    padding:5,
    width:'40%',
  marginVertical:10
  },
  uploadDcList:{
    flex:1,
    flexDirection:'row'
  },
  uploadDocPlaceholder: {
    width:30,
    height:30
  },
  imageLabel: {
    fontSize: 14
  },
  imageList: {
    flex: 1,
    flexDirection: 'row'
  },
  uploadImagePlaceholder: {
    width: 60,
    height: 60
  },
  desText: {
    width: '100%',
    minHeight: 100,
    textAlignVertical: 'top',
    marginTop:10,
    padding:8,
    backgroundColor: "#fff",
  },
  slider: {


  },
  containerRego: {
    flexDirection: "column",
    backgroundColor: "#fff",
    width: '100%',
    marginTop:10,
    padding:8

  },
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  containerPicker: {
    ...Platform.select({
      ios:{ flex: 1},
      android:{height:60, alignItems:'center',}
    }),
   
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  picker: {
    width: "30%",
    height: 30
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    flex: 5,
    padding:10
  },
  sliderValueLabel: {
    alignSelf: 'center'
  }
});

export default Addcar;
