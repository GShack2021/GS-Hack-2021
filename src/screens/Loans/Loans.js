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

export default function AllLoansScreen({ navigation }) {

    const [currentLoans, setCurrentLoans] = useState([
        {
            id: 1,
            title: 'Seondary Educational Loan',
            subtitle: 'This is the sub of the sampl sdfsdfe',
            amount: 10000,
            repaid: 0
        },
        {
            id: 2,
            title: 'Educational Adhoc Loan',
            subtitle: 'This is the sub of the sampl sdfsdfe',
            amount: 1000,
            repaid: 0
        },
        {
            id: 3,
            title: 'Food Loan',
            subtitle: 'This is the sub of the sampl sdfsdfe',
            amount: 300,
            repaid: 0
        },
    ])

    const [pastLoans, setPastLoans] = useState([
        {
            id: 4,
            title: 'Primary Education Loan',
            subtitle: 'This is the sub of the sampl sdfsdfe',
            amount: 2000,
            repaid: 2000,
        }
    ])

    const handlePress = () => {
        console.log('hello')
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Current Loans Component */}
        <Text style={containerStyles.text}>Current Loans</Text>
        <FlatList
            style={containerStyles.container}
            data={currentLoans}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
                <View style={listItemStyles.row}>
                    <Text style={listItemStyles.titleText}>
                        {item.title}
                        {"\n"}
                        {item.repaid} / {item.amount}
                    </Text>
                    <Button
                        title="Pay"
                        onPress={() => navigation.navigate('Apply', item)}
                    />
                </View>
            )}
            ItemSeparatorComponent={ListSeparator}
            ListHeaderComponent={ListSeparator}
            ListFooterComponent={ListSeparator}
        />

        {/* Past Loans component */}
        <Text style={containerStyles.text}>Past Loans</Text>
        <FlatList
            style={containerStyles.container}
            data={pastLoans}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
                <View style={listItemStyles.row}>
                    <Text style={listItemStyles.titleText}>
                        {item.title}
                        {"\n"}
                        {item.repaid} / {item.amount}
                    </Text>
                    <Button
                        title="Repaid"
                        style={buttonStyle.button}
                        disabled
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
            )}
            ItemSeparatorComponent={ListSeparator}
            ListHeaderComponent={ListSeparator}
            ListFooterComponent={ListSeparator}
        />
        <View style={{marginBottom: 40 }}>
            <Button
                title="New Loan"
                color='red'
                onPress={() => navigation.navigate('NewLoan')}
            />
        </View>
      </View>
    );
}

const containerStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingVertical: 15,
      paddingBottom: 30
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