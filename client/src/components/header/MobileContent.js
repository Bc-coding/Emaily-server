import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, Text } from "@chakra-ui/react";

export default function MobileContent({ display, changeDisplay }) {
  return (
    <Flex
      w="100vw"
      display={display}
      bgColor="gray.50"
      zIndex={20}
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      overflowY="auto"
      flexDir="column"
    >
      <Flex justify="flex-end">
        <IconButton
          mt={2}
          mr={2}
          aria-label="Open Menu"
          size="lg"
          icon={<CloseIcon />}
          onClick={() => changeDisplay("none")}
        />
      </Flex>

      <Flex flexDir="column" align="center">
        <Link href="/">
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            Home
          </Button>
        </Link>

        <Link href="/about">
          <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
            About
          </Button>
        </Link>

        <Link href="/contact">
          <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            Contact
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
