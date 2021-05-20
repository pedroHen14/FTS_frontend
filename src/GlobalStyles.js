import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --dark: #3A4F6B;
        --darkGray: #3a4f6b;
        --light: #D1E6FF;
        --white: #FFFFFF;
        --primary: #9EB4FF;
        --secondary: #6C85CC;
        --black: #000000;
        --green: #27AE60;
        --red: #EB5757;
    }

    *{
        padding:0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif; 
    }

    body{
        color: white;
        user-select:none;
    }

    /* button{
        padding:10px;
        font-weight:bold;
        color:var(--light);
        background-color:var(--darkGray);
        border:2px solid var(--light);
        border-radius:4px;
        cursor:pointer;
        transition:.2s ease-in-out;

        :hover{
            background-color:var(--primary);
            color: var(--text);
            border:2px solid var(--dark);
        }

        :active{
            transform:scale(.95);
        }

        :disabled{
            background-color:transparent;
            border:1px solid var(--darkGray);
            color:var(--darkGray);
        }
    } */

    a{
        color: var(--white);
        transition:.2s;
        text-decoration:none;
        
        :hover{
            color:var(--dark);
        }

        :active{
            transform:scale(.95);
        }
    }

`;
