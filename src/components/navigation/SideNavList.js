import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { RiCommunityFill } from "react-icons/ri";
import { CgCommunity } from "react-icons/cg";

export default function SideNavList({ goTo, ...props }) {
  const navs = [
    {
      id: 1,
      name: "Recently visited",
      icon: RiCommunityFill,
      link: "/app/community/recent",
    },
    {
      id: 2,
      name: "Your communities",
      icon: CgCommunity,
      link: "/app/community/recent",
    },
  ];

  return (
    <VStack pt={4} className={props.className}>
      {navs.map((i) => {
        return (
          <Flex
            key={i.id}
            p={2}
            pl={4}
            justifyContent="start"
            w="100%"
            _hover={{
              bgColor: "teal",
              color: "white",
            }}
            onClick={() => goTo(i)}
          >
            <Icon as={i.icon} mr={2} boxSize={6}></Icon>
            <Text
              textAlign="start"
              ml={4}
              fontSize="md"
              fontWeight="800"
              cursor="pointer"
            >
              {/* <Link to={i.link} >{i.name}</Link> */}
              {i.name}
            </Text>
          </Flex>
        );
      })}
    </VStack>
  );
}
