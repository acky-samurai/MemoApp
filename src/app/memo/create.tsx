import {
    View, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react'

import CircleButton from '../../compornents/CircleButton'
import Icon from '../../compornents/icon'
import { db, auth } from '../../config'

const handlePress = (bodyText: string): void => {
    if (auth.currentUser == null) { return }
    // collectionへの参照を作成する.
    // 文字列の中で変数を使いたいときは`バッククォート`を使う.
    // `userごとにメモを保存できるようにする`.
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    addDoc(ref, {
        // キーとバリューの変数名が同じなら、省略できる.
        // bodyText: bodyText
        bodyText,
        // 日付時刻情報.
        // updatedAt: new Date()
        // firestoreで時刻を扱うにはこのTimestampを利用するのが公式.
        updatedAt: Timestamp.fromDate(new Date())
    })
        .then((docRef) => {
            console.log('success', docRef.id)
            router.back()
        })
        .catch((error) => {
            console.log(error)
        })
    /*
    const handlePress = async (): void => {
     //    awaitが出てきたら、asyncをセットしないといけない
     // async,awaitの大きなメリットはコールバックの入れ子を避けることができることである.上記だとthenの中身が深くなってしまうが、async,awaitを利用すると読みやすくなる.
     await addDoc(collection(db, 'memos'), {
         bodyText: 'test 2'
     })
         .catch((error) => {
             console.log(error)
         })
     router.back()
     */

}

const Create = (): JSX.Element => {
    // 文字の入力を受け付ける.
    const [bodyText, setBodyText] = useState('')
    return (
        // ReactNativeの公式サイトからKeyboardAvoidingViewにbehaviorを設定することを推奨されているため設定.
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputCOntainer}>
                {/* multilineを入れることで、複数行のテキストと認識し、iosでもtextAlignVerticalが適用される. */}
                {/* 改行を有効にするには中括弧でvalueを設定する. */}
                <TextInput 
                multiline 
                style={styles.input} 
                value={bodyText} 
                onChangeText={(text) => { setBodyText(text) }}
                />
            </View>
            <CircleButton onPress={() => { handlePress(bodyText) }} >
                <Icon name='check' size={40} color='#ffffff' />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputCOntainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {
        flex: 1,
        // Androidには下記でテキストを上部に持ってこれる.
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24
    }
})

export default Create
