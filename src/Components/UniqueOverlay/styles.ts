import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Container = styled.div`
    position: sticky;
    left: 0;
    top: 0;
    right: 0;
`;
export const Header = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;

    height: 52px;
    max-height: 52px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

`;
export const Logo = styled.img`
    margin: 0;
    padding: 0;
    width: 150px;
    height: 90px;
    cursor: pointer;
`;
export const BurgerMenu = styled(FaBars)`
    cursor: pointer;
    font-size: 22px;
    margin-right: 20px;
`;
export const Footer = styled(motion.footer)`
    position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      list-style: none;
      font-size: 14px;
      & + li {
        margin: 10px 0 0;
      }
      a {
        text-decoration: none;
        color: #393c41;
        &:hover {
          color: #000;
        }
      }
        :nth-child(3) {
          color: #00F;

          &:hover {
              text-decoration: underline;
        }
      }
    }
  }
  margin-bottom: 30px;
  @media (min-width: 600px) {
    margin-bottom: 38px;
    ul {
      flex-direction: row;
      li + li {
        margin: 0 0 0 30px;
      }
    }
  }

`;