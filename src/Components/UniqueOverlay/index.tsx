import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import * as C from './styles';

const UniqueOverlay: React.FC = () => {

    const { scrollYProgress } = useWrapperScroll();

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
      <C.Container>
          <C.Header>
              <C.Logo src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a-370x247.png" alt="logo"/>
              <C.BurgerMenu/>
          </C.Header>

          <C.Footer style={{ opacity }}>
              <ul>
                <li>
                    <a href="#">create with ❤️ by Patrick Anjos</a>
                </li>
                <li>
                    <a href="#">Tesla UI Clone to study purposes</a>
                </li>
                <li>
                    <a href='https://www.tesla.com/'>Home Tesla.com</a>
                </li>
              </ul>
          </C.Footer>
      </C.Container>
  );
}

export default UniqueOverlay;