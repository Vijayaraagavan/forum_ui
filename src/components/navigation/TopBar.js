import { Button, HStack, Icon } from "@chakra-ui/react";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function TopBar() {
  return (
    <HStack>
      <Button colorScheme="transparent" variant="ghost">
        <Icon as={MdOutlineAccountCircle} boxSize={6}></Icon>
      </Button>
    </HStack>
  );
}
