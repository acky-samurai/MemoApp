import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'

// "../"は一段階フォルダを上がることを意味する.
import Header from '../../compornents/header'
import MemoListItem from '../../compornents/MemoListItem'
import CircleButton from '../../compornents/CircleButton'
import Icon from '../../compornents/icon'

const handlePress = (): void => {
router.push('/memo/create')
}

const List = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Header />
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
