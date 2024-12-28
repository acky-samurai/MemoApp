import {
    Text, StyleSheet, TouchableOpacity,
    type ViewStyle
} from 'react-native'

interface Props {
    children: JSX.Element
    style?: ViewStyle
    onPress?: () => void
}

const CircleButton = (props: Props): JSX.Element => {
    const { children, style, onPress } = props
    return (
        // 配列にすることで、一番右のstyleが優先される.
        <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        // 丸みを定義.
        borderRadius: 32,
        backgroundColor: '#467FD3',
        // 子要素を親要素の中央に持ってくるためにフレックスボックスの設定を変更する.
        justifyContent: 'center',
        alignItems: 'center',
        // 位置の設定をする.ログアウトボタンの時に設定したのと同じ.
        position: 'absolute',
        right: 40,
        bottom: 40,
        // 【この設定はiosにのみ適用される,Androidに適用するためにはelevationを設定する.】
        // ボタンに影を設定する.
        shadowColor: '#000000',
        // 黒の25％であることを設定.
        shadowOpacity: 0.25,
        // どのくらいぼかすか.
        shadowRadius: 8,
        // 影の位置をずらす.
        shadowOffset: { width: 0, height: 8 },
        // Android用の影を落とす設定は下記のみ.
        // elevationとは、どの高さにあるものか(重なり順の設定)をGoogleが定義している.ボタンは標高が8くらいが適切であり、それに適した影が適用される.
        elevation: 8
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 48
    }
})

export default CircleButton
