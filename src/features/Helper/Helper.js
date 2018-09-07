import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export default class Helper extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.header} />

        <View style={styles.body}>
          <Text style={styles.label}>Welcome</Text>
          <Text style={styles.label}>
            We Are here to handle you Sales's Documents.{" "}
          </Text>
          <Text style={styles.label}>
            Save All of your Vehicles Photos, Documents.
          </Text>
          <Text style={styles.label}>
            We will take care everything for you.
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("LoginStack")}
          >
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "100"
                }}
              >
                GO
              </Text>
              <Icon
                style={
                  {
                    //   justifyContent: "center",
                     alignSelf: "center"
                  }
                }
                name={"navigate-next"}
                size={40}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
    marginBottom: "5%"
  },
  btn: {
    flex: 1,
    alignSelf: "flex-end",
    marginRight: "5%"
  },
  label: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "100"
  }
});
