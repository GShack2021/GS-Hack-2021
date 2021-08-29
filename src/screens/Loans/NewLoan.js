import React, { useState } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Button,
    TextInput,
    Alert,
} from 'react-native';
// Global colors variables
import colors from '../../constants/colors';

export default function ApplyLoansScreen({ route, navigation }) {

    const [number, onChangeText] = useState(0);
    const [interest, setInterest] = useState(3);
    const [loanableAmount, setLoanableAmount] = useState(20500)

    const handlePress = () => {

        if (number && number <= loanableAmount) {
            navigation.navigate('BeforeDone', {
                ...route.params,
                number,
                loanableAmount,
                interest
            })
        } else {
            Alert.alert('Key in a valid amount')
        }
    }

    // Passed params are in route
    return (
      <View style={styles.view}>
          <View style={styles.innerView} >
            <Text style={styles.titleText}>
                New Loan Application
            </Text>
            <Text style={{  }}>
                Interest Rate: {interest}%
            </Text>
            <Text style={{  }}>
                Loanable amount: ${loanableAmount}
            </Text>


            <View style={{
                flexDirection: 'row', 
                margin: 20, 
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text>Loaning {"\n"} Amount</Text>
                <Text style={{fontSize: 25}}>(IDR):</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={number}
                    placeholder="$$ Amount"
                    keyboardType="numeric"
                />
            </View>


            <Button 
                title="Next"
                onPress={handlePress}
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
        height: 350,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        // justifySelf: 'flex-end'
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