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
            <View>
                <Text>+</Text>
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
    }
})

export default Index
