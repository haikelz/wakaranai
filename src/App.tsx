import Section from './components/Section'; 
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import { Flex, VStack, Spacer } from '@chakra-ui/layout';
import './index.css';
import { LazyMotion, domAnimation, m} from 'framer-motion'; 

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack>
    <LazyMotion features={domAnimation}>
    <Flex w='100%' p={5}> 
      <Spacer />
      <IconButton aria-label='icon-dark' ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode}></IconButton> 
      </Flex> 
      <m.div animate={{y: 90}} transition={{type: "spring", delay: 0}}> 
      <Section/>
      </m.div> 
      </LazyMotion>
    </VStack>
  );
};

export default App;
