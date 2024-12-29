import { Text, View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'

// "../"は一段階フォルダを上がることを意味する.
import MemoListItem from '../../compornents/MemoListItem'
import CircleButton from '../../compornents/CircleButton'
import Icon from '../../compornents/icon'

const handlePress = (): void => {
router.push('/memo/create')
}

const List = (): JSX.Element => {
    const navigation = useNavigation()
    navigation.setOptions({
        headerRight: () => { return <Text>Test</Text>}
    })
    return (
        <View style={styles.container}>
            {/* MemoList */}
            <View>
                {/* memoItem */}
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            {/* button */}
            <CircleButton onPress={handlePress} >
                <Icon name='plus' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // containerに対して画面全体を覆う,画面いっぱいに要素を広げる,containerという要素が設定された箇所全体に適応される.
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default List
