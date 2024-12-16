import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>
            {/* MemoList */}
            <View>
                {/* memoItem */}
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年12月17日 08:15</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年12月17日 08:15</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年12月17日 08:15</Text>
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
    container:{
        // containerに対して画面全体を覆う
        flex: 1,
        // 上下左右の中央にアイテムを持ってくる
        justifyContent: 'center',
        // ReactNativeでは横方向の制御がalignItems
        alignItems: 'center'
    }
})

export default Index
