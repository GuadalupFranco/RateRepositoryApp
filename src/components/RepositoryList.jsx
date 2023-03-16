import { Text, View, FlatList } from 'react-native'
import React from 'react'
import repositories from '../data/repositories'
import { StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
	return (
		<FlatList
			data={repositories}
			ItemSeparatorComponent={() => <Text></Text>}
			renderItem={({ item: repo }) => (
				<View key={repo.id} style={styles.container}>
					<RepositoryItem {... repo}></RepositoryItem>
				</View>
			)}>
		</FlatList>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5
	},
	strong: {
		color: '#f8b',
		fontWeight: 'bold',
		marginBottom: 5
	}
})

export default RepositoryList
