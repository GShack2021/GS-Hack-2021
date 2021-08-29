import React, { useState } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity, 
    Button,
    Alert 
} from 'react-native';
// Global colors variables
import colors from '../../constants/colors';
import { ListItem, ListSeparator } from '../../components/List';

export default function currentLoansScreen({ navigation }) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Current Loans Component */}
        <Text style={containerStyles.text}>Current Loans</Text>

      </View>
    );
}

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
    titleText: {
      fontWeight: 'bold',
      marginRight: 20,
    },
    separator: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: colors.border,
    },
});

const buttonStyle = StyleSheet.create({
    button: {
        alignSelf: 'flex-end'
    }
})