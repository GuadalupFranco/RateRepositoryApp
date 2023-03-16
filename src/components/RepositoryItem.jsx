import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import RepositoryItemHeader from './RepositoryItemHeader.jsx'
import RepositoryStats from './RepositoryStats.jsx'

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
			<RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}
const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingVertical: 5
	},
	strong: {
		color: '#f8b',
		fontWeight: 'bold',
		marginBottom: 5
	},
})

export default RepositoryItem