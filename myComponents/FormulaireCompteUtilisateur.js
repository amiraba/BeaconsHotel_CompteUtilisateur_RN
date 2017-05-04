import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

export class FormulaireCompteUtilisateur extends Component {
  render() {
        return (
              <View>

                    <Text style={styles.center} > Compte utilisateur </Text>

                    <TextInput style={{height: 40, width:200, borderColor: 'gray'}}
                        //onChangeText={(text) => this.setState({text})}
                        value={"Nom"}
                    />

                    <TextInput style={{height: 40, width:200, borderColor: 'gray'}}
                        //onChangeText={(text) => this.setState({text})}
                        value={"E-mail"}
                     />

                    <Button
                        //onPress={onPressLearnMore}
                        title="Sauvegarder"
                        color="#3b5998"
                        //accessibilityLabel="Learn more about this purple button"
                     />

              </View>
        );
    }
}

const styles = StyleSheet.create({
  center: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});