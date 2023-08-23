'use client';

import PersonalCard from '@/components/PesonalCard';
import { HStack, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <main>
      <HStack
        bg='#121212'
        h='100vh'
        w='full'
        justifyContent='center'
        alignItems='center'>
        <PersonalCard />
      </HStack>
    </main>
  );
};

export default Home;
