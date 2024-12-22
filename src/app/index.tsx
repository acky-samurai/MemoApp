import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>
            {/* MemoList */}
            <View>
                {/* memoItem */}
                <View style={styles.memoListItem} >
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2024年12月17日 08:15</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View style={styles.memoListItem} >
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2024年12月17日 08:15</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View style={styles.memoListItem} >
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2024年12月17日 08:15</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>


            </View>
            {/* button */}
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // containerに対して画面全体を覆う,画面いっぱいに要素を広げる,containerという要素が設定された箇所全体に適応される.
        flex: 1,
        backgroundColor: '#ffffff'
    },
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
    },
    memoListItem: {
        backgroundColor: '#ffffff',
        // 子要素を横方向に並べる.
        flexDirection: 'row',
        // 間に空白を入れ、横一杯に表示する.
        justifyContent: 'space-between',
        // 内側に余白を設ける.
        paddingVertical: 16,
        paddingHorizontal: 19,
        // alignItemsは横方向の位置を調整するものだが、flexDirectionで方向が入れ替わっているため、縦方向の位置を中央に移動.
        alignItems: 'center',
        // Borderの太さを1に設定.
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)'

    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    },
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
            shadowColor:'#000000',
            // 黒の25％であることを設定.
            shadowOpacity: 0.25,
            // どのくらいぼかすか.
            shadowRadius: 8,
            // 影の位置をずらす.
            shadowOffset: {width: 0, height: 8},
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

export default Index
