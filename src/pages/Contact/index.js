import * as React from "react";
import { Platform } from "react-native";
import { View, Text, Linking } from "react-native";
import { List } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
export default function Contact({ props }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="FALE CONOSCO E SAIBA MAIS" style={styles.section}>
      <List.Accordion
        title="Formas de Entrar em Contato"
        left={(props) => <List.Icon {...props} icon="phone" />}
      >
        <Text
          onPress={() => {
            Linking.openURL("http://api.whatsapp.com/send?phone=557187417165");
          }}
        >
          {" "}
          ATENDIMENTO VIA WHATSSAP
        </Text>
        <Text
          style={{ top: 10 }}
          onPress={() => {
            Linking.openURL("http://api.whatsapp.com/send?phone=557187417165");
          }}
        >
          {" "}
          ATENDIMENTO VIA TELEGRAM
        </Text>
      </List.Accordion>

      <List.Accordion
        style={{ top: 0 }}
        title="Outros Meios"
        left={(props) => <List.Icon {...props} icon="email" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <Text
          style={{ top: 5 }}
          onPress={() => {
            Linking.openURL("mailto:vanessasamira1996@gmail.com");
          }}
        >
          {" "}
          E-MAIL
        </Text>
        {/* <List.Item title="Second item" /> */}
      </List.Accordion>

      <List.Accordion
        style={{ top: 0 }}
        title="FAQS"
        left={(props) => <List.Icon {...props} icon="plus-box" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="Como registrar um idoso?" />
        <List.Item title="Como funciona o plano fidelidade?" />
        <List.Item title="Quantos remédios posso solicitar por vez?" />
        <List.Item title="O médico não foi até a instituição;" />
      </List.Accordion>
    </List.Section>
  );
}
