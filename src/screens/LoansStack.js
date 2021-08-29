import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

// Loans screens that form a stack
import Loans from './Loans/Loans'
import ApplyLoans from './Loans/ApplyLoans'
import Paynow from './Loans/Paynow'
import Confirm from './Loans/Confirm'

const LoansStack = createStackNavigator();

export default function LoansStackScreen() {
    return (
        <LoansStack.Navigator>
            <LoansStack.Screen name="Loans" component={Loans} />
            <LoansStack.Screen name="Apply" component={ApplyLoans} />
            <LoansStack.Screen name="Paynow" component={Paynow} />
            <LoansStack.Screen name="Confirm" component={Confirm} />
        </LoansStack.Navigator>
    )
}