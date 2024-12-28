import { 
    View, TextInput, StyleSheet, KeyboardAvoidingView
 } from 'react-native'
 import { router } from 'expo-router'

import Header from '../../compornents/header'
import CircleButton from '../../compornents/CircleButton'
import Icon from '../../compornents/icon'

const handlePress = (): void => {
router.back()
}


const Edit = (): JSX.Element => {
    return (
        // ReactNativeの公式サイトからKeyboardAvoidingViewにbehaviorを設定することを推奨されているため設定.
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <Header />
            <View style={styles.inputCOntainer}>
                {/* multilineを入れることで、複数行のテキストと認識し、iosでもtextAlignVerticalが適用される. */}
                {/* 改行を有効にするには中括弧でvalueを設定する. */}
                <TextInput multiline style={styles.input} value={'買い物\nリスト'} />
            </View>
            <CircleButton onPress={handlePress} >
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

export default Edit
