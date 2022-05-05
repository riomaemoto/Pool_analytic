import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { useHistory } from "react-router-dom";

export const Header: FC = memo(() => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const navigate = useHistory();
  const jump = (path: string) => {
    navigate.push(path);
  };

  const buttonStyle = {
    boxShadow: "unset",
  };

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.100"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={() => jump("/")}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={() => jump("/user_management")}>ユーザー一覧</Link>
          </Box>
          <Link onClick={() => jump("/setting")}>設定</Link>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={() => jump("/")} style={buttonStyle}>
                TOP
              </Button>
              <Button
                w="100%"
                onClick={() => jump("/user_management")}
                style={buttonStyle}
              >
                ユーザー一覧
              </Button>
              <Button
                w="100%"
                onClick={() => jump("/setting")}
                style={buttonStyle}
              >
                設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
