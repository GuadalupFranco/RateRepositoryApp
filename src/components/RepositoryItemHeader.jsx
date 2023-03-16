import { View, Image } from 'react-native'
import React from 'react'
import StyledText from './StyledText.jsx'
import { StyleSheet } from 'react-native-web'
import theme from '../theme.js'


const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language}) => {
    return (
        <View style={{flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
            </View>
            <View style={{ flex: 1 }}>    
                <StyledText fontSize='subheading' fontWeight='bold'>{fullName}</StyledText>
                <StyledText>{description}</StyledText>
                <StyledText style={styles.language} bold>{language}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
	language: {
		padding: 4,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		alignSelf: 'flex-start',
        marginVertical: 4,
		borderRadius: 4,
		overflow: 'hidden' //goes along with border
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4
	}
})

export default RepositoryItemHeader