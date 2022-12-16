
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/Routes';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';


export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    </ApplicationProvider>
  )
}