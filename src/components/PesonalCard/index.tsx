import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Center,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { url } from 'inspector';
import Image from 'next/image';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

const PersonalCard = () => {
  return (
    <>
      <Card
        maxW='sm'
        className='card_element'
        bg='rgb(0, 0, 0,0.2)'
        height='700px'
        maxHeight='100vh'
        width='550px'
        border='1px solid'
        borderRadius='20px'
        borderColor='#3d3d3d'>
        <CardHeader>
          <Box
            mt='1'
            color='white'
            fontWeight='semibold'
            as='h1'
            display='flex'
            justifyContent='space-between'>
            <Box as='span'>Eddy Silva M</Box>
            <Box as='span' fontSize='12px'>
              Web & Mobile
              <br /> developer
            </Box>
          </Box>
        </CardHeader>

        <CardBody display='flex' flexDirection='column' justifyContent='center'>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            height='250'
            width='100%'>
            <Box as='div' position='relative' width='80%'>
              <Image
                src='/fotoPortafolio.svg'
                alt=''
                layout='fill'
                style={{ borderRadius: '20px' }}
              />
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            height='250'
            width='100%'>
            <Box
              mt='1'
              color='white'
              fontWeight='semibold'
              textAlign='center'
              as='h1'
              display='flex'
              flexDirection='column'
              marginTop='20px'>
              <Box as='span' padding='5px'>
                alexandematute@gmail.com
              </Box>
              <Box as='span' padding='5px' fontSize='18px'>
                Base in Managua,Nicaragua
              </Box>
              <Box marginTop='80px'>
                <ButtonGroup variant='outline' spacing='6'>
                  <IconButton
                    isRound={true}
                    variant='outline'
                    colorScheme='white'
                    aria-label='Done'
                    fontSize='20px'
                    _hover={{ backgroundColor: '#fff', color: '#000' }}
                    icon={<FaLinkedinIn />}
                  />
                  <IconButton
                    isRound={true}
                    variant='outline'
                    colorScheme='white'
                    aria-label='Done'
                    fontSize='20px'
                    _hover={{ backgroundColor: '#fff', color: '#000' }}
                    icon={<FaInstagram />}
                  />
                  <IconButton
                    isRound={true}
                    variant='outline'
                    colorScheme='white'
                    aria-label='Done'
                    _hover={{ backgroundColor: '#fff', color: '#000' }}
                    fontSize='20px'
                    icon={<FaGithub />}
                  />
                </ButtonGroup>
              </Box>
              <Box marginTop='50px'>
                <Button
                  colorScheme='whatsapp'
                  leftIcon={<FaEnvelope />}
                  borderRadius='10px'
                  width='100%'>
                  Hire ME!
                </Button>
              </Box>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default PersonalCard;
