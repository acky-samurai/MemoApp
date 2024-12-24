import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>Memo App</Text>
                <Text style={styles.headerRight}>ログアウト</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end'
    },
    headerInner: {
        // 横方向の制御.
        alignItems: 'center'
    },
    headerRight: {
        // 絶対位置を指定する(absolute),flexボックスのコントロールから外れて好きな位置に要素を配置できる.
        position: 'absolute',
        // 右方向からどのくらいの位置に配置するかを指定.
        right: 16,
        bottom: 16,
        color: 'rgba(255,255,255,0.7)'
    },
    headerTitle: {
        // 下に少し余白を持たせる.
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})

export default Header
