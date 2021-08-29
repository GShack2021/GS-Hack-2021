import React, { useState } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    FlatList, 
    Button,
    TextInput,
} from 'react-native';
// Global colors variables
import colors from '../../constants/colors';
import { ListItem, ListSeparator } from '../../components/List';

export default function ApplyLoansScreen({ route, navigation }) {

    const [number, onChangeNumber] = useState(null);

    // Passed params are in route
    const { id, title, subtitle, amount, repaid } = route.params // Destructure the params
    
    return (
      <View style={styles.view}>
          <View style={styles.innerView} >
            <Text style={styles.titleText}>
                {title}
                {"\n"}
                {repaid} / {amount}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Payment Amount"
                keyboardType="numeric"
            />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    innerView: {
        borderWidth: 1,
        height: '75%',
        padding: 50,
        alignContent: 'center'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        alignSelf: 'flex-end'
    },
    titleText: {
        fontWeight: 'bold',
        marginRight: 20,
    },
  });

const containerStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingVertical: 15,
    },

    text: {
        fontSize: 25,
        paddingTop: 10
    }
});

const listItemStyles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: colors.white,
      justifyContent: 'space-between',
      marginBottom: 14
    },
    
    separator: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: colors.border,
    },
});