// テンプレートのようなファイル、テンプレートの中に現時点であればindex.tsxが表示される
import { Slot } from 'expo-router'

const Layout = (): JSX.Element =>{
    // 受け取った画面をそのまま表示する
    return <Slot />
}
// reactnativeのコンポーネントを記載するときは必ずexport defaultと記載する
export default Layout
