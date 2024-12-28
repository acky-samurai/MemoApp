// 共通で利用される部品はコンポーネントに切り出すと便利.
// TouchableOpacityは、設定したボタンをタッチした時に反応するようにする設定.
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
    label: string
    // voidはなにも返さないことを意味する.
    onPress? : () => void
}

const Button = (props: Props): JSX.Element => {
    const { label, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default Button
