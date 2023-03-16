import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx'
import { NativeRouter, Redirect, Route, Switch, Routes } from 'react-router-native'

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar/>
            <Routes>
                <Route path='/' exact element={<RepositoryList/>}/>
                <Route path='/signin' exact element={<Text>Working on it</Text>}/>
            </Routes>
        </View>
    )
}

export default Main