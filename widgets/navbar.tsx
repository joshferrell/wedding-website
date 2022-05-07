import {
  Box,
  VisuallyHidden,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Home from "../media/home.svg";
import OurStory from "../media/our-story.svg";
import Photos from "../media/photos.svg";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          display: ["block", "block", "none"],
          p: "8px 16px",
          bg: "green.800",
          position: "sticky",
          top: 0,
          zIndex: 9999,
        }}
      >
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                bg="green.100"
                as={Button}
                leftIcon={isOpen ? <CloseIcon h={3} /> : <HamburgerIcon />}
              >
                Menu
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => router.push("/")}>Home</MenuItem>
                <MenuItem onClick={() => router.push("/our-story")}>
                  Our Story
                </MenuItem>
                <MenuItem onClick={() => router.push("/photos")}>
                  Photos
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
      <Box
        sx={{
          display: ["none", "none", "flex"],
          height: "75px",
          bg: "green.800",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          zIndex: 1,
          position: "relative",
          color: "white",
        }}
      >
        <Link href="/" passHref>
          <a>
            <Home aria-hidden width={87} height={38} fill="white" />
            <VisuallyHidden>Home Page</VisuallyHidden>
          </a>
        </Link>
        <Link passHref href="/our-story">
          <a>
            <OurStory aria-hidden fill="white" width={85} height={47} />
            <VisuallyHidden>Our story</VisuallyHidden>
          </a>
        </Link>
        <Link passHref href="/photos">
          <a>
            <Photos aria-hidden height={45} width={83} fill="white" />
            <VisuallyHidden>Photos</VisuallyHidden>
          </a>
        </Link>
      </Box>
    </>
  );
};

export default NavBar;
