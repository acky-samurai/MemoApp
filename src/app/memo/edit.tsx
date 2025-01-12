import {
    View, TextInput, StyleSheet, Alert
} from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
//  編集画面を実装する.
import { useState, useEffect } from 'react'
// getDoc:メモデータの取得,setDoc:メモデータの上書き.
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'

import KeyboardAvoidingView from '../../compornents/KeyboardAvoidingView'
import CircleButton from '../../compornents/CircleButton'
import Icon from '../../compornents/icon'
// 編集画面を実装する.
import { auth, db } from '../../config'

const handlePress = (id: string, bodyText: string): void => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    // メモを更新する.
    setDoc(ref,{
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then(() => {
        router.back()
    })
    .catch((error) => {
        console.log(error)
        Alert.alert('更新に失敗しました')
    })
}


const Edit = (): JSX.Element => {
    const id = String(useLocalSearchParams().id)
    const [bodyText, setBodyText] = useState('')
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        getDoc(ref)
            .then((docRef) => {
                const RemoteBodyText = docRef?.data()?.bodyText
                // badyTextが更新されるようになる.
                setBodyText(RemoteBodyText)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        // ReactNativeの公式サイトからKeyboardAvoidingViewにbehaviorを設定することを推奨されているため設定.
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputCOntainer}>
                {/* multilineを入れることで、複数行のテキストと認識し、iosでもtextAlignVerticalが適用される. */}
                {/* 改行を有効にするには中括弧でvalueを設定する. */}
                <TextInput
                    multiline
                    style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => { setBodyText(text) }}
                    autoFocus
                />
            </View>
            <CircleButton onPress={() => {handlePress(id, bodyText)}} >
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
        flex: 1
    },
    input: {
        flex: 1,
        // Androidには下記でテキストを上部に持ってこれる.
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 32,
        paddingHorizontal: 27
    }
})

export default Edit
