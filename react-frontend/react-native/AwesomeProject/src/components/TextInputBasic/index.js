import { useState } from "react"
import {
    Text,
    TextInput,
    View
} from "react-native"

const TextInputBasic = () => {
    const [text, setText] = useState("")

    return (
        <View>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />

            <Text style={{padding: 0, fontSize: 42}}>
                {text
                    .split(" ")
                    .map(word => word && "🍕")
                    .join(" ")}
            </Text>
        </View>
    )
}

export default TextInputBasic
