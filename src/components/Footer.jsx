import { Button, StyleSheet, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Button title='Sair' />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    padding: 20,
  },
});