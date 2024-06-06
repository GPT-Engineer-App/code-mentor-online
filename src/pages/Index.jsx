import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate online learning platform for coding. Start your journey to become a coding master today!
        </Text>
        <Button
          leftIcon={<FaCode />}
          colorScheme="teal"
          size="lg"
          onClick={() => alert("Get Started Clicked!")}
        >
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;