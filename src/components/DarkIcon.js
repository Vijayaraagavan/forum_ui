import { Button, Icon } from "@chakra-ui/react";
import { ThemeContext } from "../modules/themes/UseTheme";
import { useContext } from "react";

export default function DarkIcon(props) {
    const theme = useContext(ThemeContext)
    const inProp = {};
    if (theme.current == 'dark') {
        inProp.colorScheme = 'transparent'
    }
    return (
        <Button {...inProp} onClick={props.onClick}>
            <Icon as={props.icon} ></Icon>
        </Button>
    )
}