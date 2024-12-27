import { View, Text, TextInput, StyleSheet } from 'react-native'

import Header from '../../compornents/header'


const LogIn = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} value='Email Adress' />
                <TextInput style={styles.input} value='Password' />
                <View style={styles.button}>
                    <Text style={styles.buttonLabel}>Submit</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Text style={styles.footerLink}>Sign up here!</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        // 要素の下に空白を追加する
        marginBottom: 24
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    button: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        // flexボックスの子要素の位置を制御するにはalignItemとjustifyContentだったが、FlexBox自体の並び方をコントロールするにはalignSelfを用いる.
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 24
    },
    footer: {
        // ReactNativeのデフォルトではFlexBoxは縦方向に並ぶ.それを横方向にするには方向を入れ替える必要がある為,flexDirectionを設定する.
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        // 要素の右に空白を追加する
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }
})

export default LogIn
