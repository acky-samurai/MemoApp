import {
    View, Text, TextInput,
    TouchableOpacity, StyleSheet
} from 'react-native'
import { Link, router } from 'expo-router'

import Header from '../../compornents/header'
import Button from '../../compornents/Button'

// voidは関数に対して何も返さないことを意味する.
const handlePress = (): void => {
// ログイン
router.push('/memo/list')
}

const LogIn = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} value='Email Adress' />
                <TextInput style={styles.input} value='Password' />
                <Button label='Submit' onPress={handlePress} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    {/* Linkにはプロパティが必要であるため、hrefをセットする. */}
                    {/* asChildは他の要素を入れ子にする時に利用する. */}
                    <Link href='/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up here!</Text>
                        </TouchableOpacity>
                    </Link>
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
