import { useState } from "react"
import {
    Button,
    Text,
    View,
} from "react-native"

const Cat = (props) => {
    const {name} = props

    const [isHungry, setIsHungry] = useState(true)

    return (
        <View>
            <Text>
                I am {name}, and I am {isHungry ? "hungry" : "full"}
            </Text>

            <Button
                onPress={() => {
                    setIsHungry(false)
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
        </View>
    )
}

const Cafe = () => {
    return (
        <>
            <Cat name="Kaloo" />
            <Cat name="Soori" />
        </>
    )
}

export default Cafe
