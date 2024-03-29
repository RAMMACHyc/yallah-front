import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import FormData from '@/components/FormData'
import ListPlaces from '@/components/ListPlaces'

import { Link } from 'expo-router'


const location = () => {
  return (
    <View>
        <Stack.Screen  options={{headerShown:false}} />
         <Link href="/addPost">Login</Link>
       
    
    </View>
  )
}

export default location

const styles = StyleSheet.create({})