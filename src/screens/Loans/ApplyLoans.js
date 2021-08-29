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
    const [comments, setComments] = useState('')

    // Passed params are in route
    const { id, title, subtitle, amount, repaid } = route.params // Destructure the params
    
    return (
      <View style={styles.view}>
          <View style={styles.innerView} >
            <Text style={styles.titleText}>
                {title}
            </Text>
            <Text style={{  }}>
                {repaid} / {amount}
            </Text>


            <View style={{
                flexDirection: 'row', 
                margin: 20, 
                alignItems: 'center',
                // justifyContent: 'space-between'
            }}>
                <Text>Payment {"\n"} Amount</Text>
                <Text style={{fontSize: 25}}>(IDR)</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="$$ Amount"
                    keyboardType="numeric"
                />
            </View>


            {/* Comments section */}
            <Text style={{  }}>
                Comments/Notes
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setComments}
                placeholder="Enter comments here..."
            />
            <Button 
                title="Next"
                onPress={() => navigation.navigate('Paynow', {
                    ...route.params,
                    number,
                    comments
                })}
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