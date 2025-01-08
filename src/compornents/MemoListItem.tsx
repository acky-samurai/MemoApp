import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Link, router } from 'expo-router'

import Icon from './icon'
import { type Memo } from '../../types/memo'

interface Props{
    memo: Memo
}

const MemoListItem = (props: Props): JSX.Element | null => {
    const { memo } = props
    const { bodyText, updatedAt } = memo
    if (bodyText === null || updatedAt === null) { return null }
    const dateString = updatedAt.toDate().toLocaleString('ja-JP')
    return (
        <Link href='/memo/detail' asChild >
            <TouchableOpacity style={styles.memoListItem} >
                <View>
                    <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dateString}</Text>
                </View>
                <TouchableOpacity>
                    <Icon name='delete' size={32} color='#B0B0B0' />
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
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
