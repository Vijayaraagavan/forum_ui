import { Button, Icon } from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
export default function Home() {
    const nav = useNavigate();
    const newPost = () => {
        nav('post');

    }
    return (
        <>
        <Button  colorScheme="primary" onClick={newPost}>
            <Icon as={FaPlus} mr="2"></Icon> Post
        </Button>
        </>
    )
}