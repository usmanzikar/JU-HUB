import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack
          size="md"
          textTransform={'uppercase'}
          alignItems={'stretch'}
          w={'full'}
          px={'4'}
        >
          <Heading size={'md'}>Contact me for React Projects and Ideas</Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder={'enter email here...'}
              borderRadius={'none'}
              border={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
            <Heading size={'md'} textTransform={"uppercase"} textAlign={'center'}> VIDEO HUB</Heading>
            <Text>All right reserved</Text>
        </VStack>


        <VStack w={'full'}>
            <Heading textTransform={"uppercase"} size={'md'}>Social Media</Heading>
            <Button variant={'link'} colorScheme={"white"}>
            <a
            href="https://www.facebook.com/profile.php?id=100018825455131"
            target={"blank"}
          >
            facebook
          </a>
            </Button>
            <Button variant={'link'} colorScheme={"white"}>
            <a href="https://www.instagram.com/meharusman437/" target={"blank"}>
            Instagram
          </a>
            </Button>
            <Button variant={'link'} colorScheme={"white"}>
            <a href="https://twitter.com/aisytonihota?lang=en" target={"blank"}>
            Twitter
          </a>
            </Button>
            <Button variant={'link'} colorScheme={"white"}>
            <a href="https://github.com/usmanzikar" target={"blank"}>
            Github
          </a>
            </Button>
        </VStack>

      </Stack>
    </Box>
  );
};

export default Footer;
