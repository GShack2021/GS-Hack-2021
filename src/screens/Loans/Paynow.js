import React, { useState } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Button,
} from 'react-native';
// Global colors variables
import colors from '../../constants/colors';

export default function PaynowScreen({ route, navigation }) {
    // Passed params are in route
    
    return (
      <View style={styles.view}>
          <View style={styles.innerView}>
            <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                <Text style={styles.titleText}>Paying</Text>
                <Text style={styles.titleText}>IDR: {route.params.number}</Text>
            </View>

            <Text style={{marginTop: 10, fontWeight: 'bold'}}>From:</Text>
            <Text style={{  }}>Lisa Toh</Text>

            <Text style={{marginTop: 10, fontWeight: 'bold'}}>To:</Text>
            <Text style={{  }}>{route.params.title}</Text>

            <Text style={{marginTop: 10, fontWeight: 'bold'}}>Comments/Notes</Text>
            <Text style={{  }}>{route.params.comments}</Text>
          </View>

          <Button 
                titleStyle={{
                    fontSize: 30,
                }}
                color="green"
                title="Pay Now!"
                onPress={() => navigation.navigate('Confirm', {...route.params})}
            />
      </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 40,
        paddingRight: 40,
        paddingLeft: 40
    },
    innerView: {
        borderWidth: 1,
        height: '55%',
        paddingVertical: 50,
        paddingHorizontal: 80,
        alignItems: 'center'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    titleText: {
        fontWeight: 'bold',
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