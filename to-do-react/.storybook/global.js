import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const StoryStyle = createGlobalStyle`
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

`;

export default StoryStyle;
