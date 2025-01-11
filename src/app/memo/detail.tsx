import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

// vector iconsからフェザーライブラリを読み込む.
// import { Feather } from '@expo/vector-icons'
import Icon from '../../compornents/icon'
import CircleButton from '../../compornents/CircleButton'

const handlePress = (): void => {
router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
    // const params = useLocalSearchParams()
    const { id } = useLocalSearchParams()
    // paramsにidが入っている.
    // console.log(params)
    console.log(id)
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2024年12月24日 22:35</Text>
            </View>
            {/* memoの本文 */}
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                </Text>
            </ScrollView>
            {/* Button */}
            {/* スタイルとして、top: 160, bottom: 'auto'を受け渡し、indexの設定を上書きする. */}
            <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color='#ffffff' />
                {/* Featherからチェックマークをフォントサイズ40で受け取る. */}
                {/* <Feather name='check' size={40}/> */}
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        // memoHeaderの高さが上から96の位置.
        height: 96,
        // ReactNatibeのFlexBoxの縦方向の位置はjustifyContentで設定.
        justifyContent: 'center',
        // 余白の設定.
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16

    },
    memoBody: {
        // 余白の設定.
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        color: '#000000',
        fontSize: 16,
        lineHeight: 24
    }
})

export default Detail
