import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        font-family: 'Noto Sans KR', sans-serif;
        font-size:100%;
    }
    a{
        text-decoration: none;
        color: inherit;
        font-size:inherit;
        font-weight:inherit;
        letter-spacing:inherit;
    }

    input, textarea {
        width:100%;
        margin:0;
        padding:0;
        border:0;
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

    html{
        overflow:hidden;
        height: 100%;
    }
    body{
        ${({ theme }) => theme.flexBox("row", "center", "center")}
        height:100%;
        background:#8dcacb;
    }

    #root{
        overflow:hidden;
        position:relative;
        width: 18.3rem;
        height:33rem;
        margin: 0 auto;
        border:1px solid #ddd;
        border-radius: 1rem;
        background:#fff;
    }

    main{
        width:100%;
        height:100%;
    }

    article, form{
        overflow:scroll;
        ${({ theme }) => theme.flexBox("column", "inherit", "inherit")}
        height: 29rem;
        padding:${({ theme }) => theme.pd25};
        padding-top:0;
    }

    h3{
        font-size:1rem;
        font-weight:600;
        letter-spacing: -0.001em;
    }

    h4{
        font-size: 0.813rem;
        font-weight:600;
        letter-spacing: -0.001em;
    }
`;

export default GlobalStyle;
