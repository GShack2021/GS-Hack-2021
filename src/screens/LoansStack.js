import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

// Loans screens that form a stack
import Loans from './Loans/Loans'
import ApplyLoans from './Loans/ApplyLoans'

const LoansStack = createStackNavigator();

export default function LoansStackScreen() {
    return (
        <LoansStack.Navigator >
            <LoansStack.Screen name="Loans" component={Loans} />
            <LoansStack.Screen name="Apply" component={ApplyLoans} />
        </LoansStack.Navigator>
    )
}