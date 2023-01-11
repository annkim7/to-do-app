import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        font-family: 'Noto Sans KR', sans-serif;
    }
    a{
        text-decoration: none;
        color: inherit;
    }

    input, textarea { 
        -moz-user-select: auto;
        -webkit-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
    }
    input:focus {
        outline: none;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }

    #root{
        max-width: 400px;
        margin: 0 auto;
        border:1px solid #ddd;
        border-radius: 1rem;
    }

    main{
        overflow:hidden;
        width:100%;
    }

    article{
        padding:${({ theme }) => theme.pd25};
        padding-top:0;
    }
`;

export default GlobalStyle;
