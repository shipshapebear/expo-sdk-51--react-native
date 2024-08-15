import React from "react";
import { StyleSheet, Text, View } from "react-native";

function FirstItem() {
  const today = new Date();
  return (
    <View style={styles.container}>
      <View style={styles.basicInfo}>
        <Text style={styles.header}>Julius Punay</Text>
        <Text style={styles.subHeader}>Welcome to my first mobile app</Text>
        <Text style={styles.subHeader2}>{today.toDateString()}</Text>
      </View>
      <View style={styles.balanceInfo}>
        <Text style={styles.header}>123</Text>
        <Text style={styles.subHeader}>Balance</Text>
      </View>
    </View>
  );
}

export default FirstItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    height: "100%",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#0a0a0a",
    shadowRadius: 5,
    shadowOpacity: 0.2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    color: "#adadad",
  },
  subHeader2: {
    fontSize: 14,
    color: "#adadad",
    fontWeight: "bold",
  },
  basicInfo: {
    marginTop: 20,
  },
  balanceInfo: {
    marginTop: 20,
  },
});
