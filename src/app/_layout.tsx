// テンプレートのようなファイル、テンプレートの中に現時点であればindex.tsxが表示される
import { Stack } from 'expo-router'

const Layout = (): JSX.Element =>{
    // 受け取った画面をそのまま表示する
    return <Stack screenOptions={{
        // 背景色の設定.
        headerStyle: {
            backgroundColor: '#467FD3'
        },
        // タイトルの色やバックボタンの色を設定する.
        headerTintColor: '#ffffff',
        // ヘッダーのタイトル名を設定する.
        headerTitle: 'Memo App',
        // バックボタンの表示名を設定する.
        headerBackTitle: 'Back',
        // Headerタイトルのスタイルを変更する.
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
        }
    }}/>
}
// reactnativeのコンポーネントを記載するときは必ずexport defaultと記載する
export default Layout
