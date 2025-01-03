import { View, StyleSheet } from 'react-native'
// use〇〇というのは、React Hooksであることを意味する.
// react hooks は、Reactの色々なコンポーネントに機能を与えるもの.
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'

// "../"は一段階フォルダを上がることを意味する.
import MemoListItem from '../../compornents/MemoListItem'
import CircleButton from '../../compornents/CircleButton'
import Icon from '../../compornents/icon'
import LogOutButton from '../../compornents/LogOutButton'

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    // 配列に何も指定されていないため、画面が表示されたときに一度だけ表示される.
    // 一つ目の引数にはAllowFunction、二つ目の引数には配列を設定する.
    const navigation = useNavigation()
    // indexページとは関係のないところに、影響を与えるためにはuseEffectを利用する.
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])

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
