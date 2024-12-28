import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Icon from './icon'

const MemoListItem = (): JSX.Element => {
    return (
        <View style={styles.memoListItem} >
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2024年12月17日 08:15</Text>
            </View>
            <TouchableOpacity>
                <Icon name='delete' size={32} color='#B0B0B0'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default MemoListItem
