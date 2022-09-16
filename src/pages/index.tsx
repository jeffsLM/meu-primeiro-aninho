import type { NextPage } from 'next'
import { Center, Heading, Flex, Box, Stack, Text, Image, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel } from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go';
import { BsFillHeartFill } from 'react-icons/bs';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
  return (
    <Center>
      <Flex
        flex="1"
        maxWidth={1440}
        align="center"
        flexDir={"column"}
        justify="center"
        textAlign="center"
      >
        <Stack spacing={5}>
          <Box >
            <Heading
              fontFamily="NefelibataBrush"
              color="pink.600"
              fontSize="5rem">Julia</Heading>
            <Heading
              size='sm'
              color="#545454"
              fontFamily="Bitter" mt="5">
              Meu primeiro aninho
            </Heading>
          </Box>
          <Box>
            <Text
              fontSize='md'
              color="#545454"
              fontFamily="Bitter"
              fontWeight="bold"
              mt="5"> É um prazer ter você por aqui!</Text>
            <Text
              fontSize='sm'
              color="#545454"
              fontFamily="Bitter">Estou fazendo todos os preparativos para termos o momento mais memorável juntos!</Text>
          </Box>
          <Center>
            <Box boxSize='200'>
              <Image src='/nuvem.png' alt='Dan Abramov' />
              <Flex>
                <Image src='/estrela.png' alt='Estrela 1 ' />
                <Image src='/estrela.png' alt='Estrela 2' />
              </Flex>
            </Box>
          </Center>
          <Heading
            fontFamily="NefelibataBrush"
            color="pink.600"
            fontSize="1.8rem">Informações Importantes
          </Heading>
          <Box>
            <Accordion defaultIndex={[0, 1, 2]} allowMultiple mt="3">
              <AccordionItem>
                <AccordionButton>
                  <Box flex='1' textAlign='left' color="#545454"
                    fontFamily="Bitter">
                    Quando irá acontecer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Flex flexDir="column" justify="center" align="center" >
                    <Text
                      fontSize='1rem'
                      color="#545454"
                      fontFamily="Bitter">DOMINGO</Text>
                    <Text
                      fontSize='4rem'
                      color="pink.700"
                      mt="-4"
                      fontFamily="NefelibataBrush">02</Text>
                    <Text
                      fontSize='1.5rem'
                      color="pink.700"
                      fontFamily="NefelibataBrush">Outubro</Text>
                    <Text
                      fontSize='sm'
                      color="#545454"
                      fontFamily="Bitter">15 HORAS</Text>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex='1'
                      textAlign='left'
                      color="#545454"
                      fontFamily="Bitter">
                      Onde irá acontecer?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex flexDir="column" justify="center" align="center" mt="4" mb="8">
                    <GoLocation fontSize={50} color="#B83280" />
                    <Text
                      fontSize='sm'
                      mt="4"
                      color="#545454"
                      fontFamily="Bitter">Estr. Pau a Pique, 1691, Louveira - SP, 13290-000</Text>
                    <Link  href='https://goo.gl/maps/SAbqhU775hciBpWw6' isExternal>
                      Ou se preferir clique aqui! <ExternalLinkIcon mx='2px' />
                    </Link>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

          </Box>

        </Stack>
      </Flex>
    </Center>
  )
}

export default Home
