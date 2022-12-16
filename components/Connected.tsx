import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="green"
            as="h1"
            size="2xl"
            noOfLines={5}
            textAlign="center"
          >
            Welcome - wally connected.!
          </Heading>

          <Text color="bodyText" fontSize="XL" textAlign="center">
           Once wallet is connected view your assets, nfts and coins SPL 
            <Text as="b"> $BoldTXT</Text> eNTER INFO <Text as="b"> $BoldTXT</Text> Mint page for NFT/staking platform
          </Text>
        </VStack>
      </Container>

      <HStack spacing={100}>
        <Image src="avatar1.png" alt="" />
        <Image src="avatar2.png" alt="" />
        <Image src="avatar3.png" alt="" />
        <Image src="avatar4.png" alt="" />
        <Image src="avatar5.png" alt="" />
      </HStack>

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>mint button</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected