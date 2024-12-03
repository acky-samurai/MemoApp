// React Nativeから必要なツールをインポートする
import { View, Text, StyleSheet, type TextStyle } from 'react-native'
// propsの中身(型)を表現する
interface Props {
    // 必ず渡さなければいけないと定義されている。
    // bang?とすることでオプション（App.tsxに渡しても渡さなくてもどちらでもよい）となる。
    children: string
    bang?: boolean
    style?: TextStyle
}
// コンポーネントを記述する、関数はAllowFunctionで記述する、Helloという変数に関数を代入する、関数からはJSXのElementが返ることを明示
// childrenは、App.tsxの<Hello>World</Hello>というコンポーネントのの「World」のこと。
const Hello = (props: Props): JSX.Element => {
    const { children, bang, style } = props
    // jsxというリアクトネイティブの構造体(JSX)を返す
    return (
        // 構造体(JSX)
        <View>
            {/* 配列の中は、あとから入れたものが優先される。この場合は、最も優先されるのはstyleであり、styleの隣に新しく追加されたら、それが最優先になる */}
            {/* ReactNativeのコンポーネントにオブジェクトを入れる場合はカーリーブランケットで必ず囲む */}
            <Text style={[styles.text, style]}>
                Hello {children} {bang === true ? '!' : ''}
            </Text>
        </View>
    )
}
// StyleSheetをあらかじめ定義しておき、要素に適用していく
// 単純にオブジェクトを入れるだけではなく、stylesという変数にはStyleSheet.createとしないといけない
const styles = StyleSheet.create({
    // textというキーを追加
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})

// Helloというコンポーネントをほかのファイルで利用するために、このファイルからエクスポートする
export default Hello
