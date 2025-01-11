// FlatListは画面に表示されるリストを制御するもの.
import { View, StyleSheet, FlatList } from 'react-native'
// use〇〇というのは、React Hooksであることを意味する.
// react hooks は、Reactの色々なコンポーネントに機能を与えるもの.
import { router, useNavigation } from 'expo-router'
// useStateは値を保持するためのもの.
import { useEffect, useState } from 'react'
// dataを取得するためのもの.
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

// "../"は一段階フォルダを上がることを意味する.
import MemoListItem from '../../compornents/MemoListItem'
import CircleButton from '../../compornents/CircleButton'
import Icon from '../../compornents/icon'
import LogOutButton from '../../compornents/LogOutButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    // 空の配列を初期値に設定している.<Memo[]>はTypeScriptの書き方.
    const [memos, setMemos] = useState<Memo[]>([])
    // 配列に何も指定されていないため、画面が表示されたときに一度だけ表示される.
    // 一つ目の引数にはAllowFunction、二つ目の引数には配列を設定する.
    const navigation = useNavigation()
    // indexページとは関係のないところに、影響を与えるためにはuseEffectを利用する.
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])
    // 作業の内容によってuseEffectを使い分ける.
    useEffect(() => {
        if (auth.currentUser == null) { return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        // queryはどういうデータが欲しいのかを表現する.
        // ascendant,desendantで、昇順降順を選ぶ.
        const q = query(ref, orderBy('updatedAt', 'desc'))
        // memoを監視する.snapshotの中に我々のメモデータが入っている.
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = []
            snapshot.forEach((doc) => {
                console.log('memo', doc.data())
                const { bodyText, updatedAt } = doc.data()
                remoteMemos.push({
                    id: doc.id,
                    // 変数の名前が同じ場合は省略できる。bodyText: bodyText,updatedAt: updatedAt.
                    bodyText,
                    updatedAt
                })
            })
            setMemos(remoteMemos)
        })
        return unsubscribe
    }, [])

    return (
        <View style={styles.container}>
            {/* MemoList */}
            <FlatList
                data={memos}
                // リストのアイテムを表示する関数.{}とreturnは省略可能.
                renderItem={({ item }) => { return <MemoListItem memo={item} />}}
            />
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
