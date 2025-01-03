import { Redirect, router } from 'expo-router'
// ログイン状態を監視する.
import { onAuthStateChanged } from 'firebase/auth'
// indexが表示されたとき、一度だけ表示されるようにする設定.
import { useEffect } from 'react'
// onAuthStateChangedを利用するには、私たちの設定ファイルからauthを読み込む必要がある.
import { auth } from '../config'

const Index = (): JSX.Element => {
    // useEffectが実行されたとき、一度だけ実行する為に空の配列を用意する.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                router.replace('/memo/list')
            }
        })
    }, [])
    return <Redirect href='auth/log_in' />
}

export default Index
