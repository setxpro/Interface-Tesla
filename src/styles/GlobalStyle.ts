import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, input, button {
        font-family: 'Roboto', sans-serif
    }

`;