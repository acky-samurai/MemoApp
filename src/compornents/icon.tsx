import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

import fontData from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,
    'IcoMoon',
    'icomoon.ttf'
)

interface Props {
    name: string
    size: number
    color: string
}

const Icon = (props: Props): JSX.Element | null => {
    const { name, size, color } = props
    const [fontLoaded] = useFonts({
        IcoMoon: fontData
    })
    // fontLoadedが読み込まれて居なかったらFalseが入る.読み込まれていたらCustomIconを返す.
    // if (!fontLoaded)では、fontLoadedがfalseの場合に条件がtrueになる.つまり、フォントがまだ読み込まれていない場合には、この条件が成立する.
    if (!fontLoaded) {
        return null
    }
    return (
        <CustomIcon name={name} size={size} color={color} />
    )
}

export default Icon
