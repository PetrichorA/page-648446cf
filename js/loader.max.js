/*
    <link rel="preload" as="script" id="katex-url" href="katex-path">
    <link rel="preload" as="script" id="highlightjs-url" href="highlightjs-path">
*/

((document) => {
    document.addEventListener('DOMContentLoaded', () => {
        // insert KaTeX
        let elem = document.createElement('script');
        elem.src = document.getElementById('katex-url').href;
        elem.addEventListener('load', () => {
            document.querySelectorAll('eq').forEach((elem) => {
                katex.render(elem.textContent, elem, {
                    displayMode: false,
                    throwOnError: false
                });
            });
            document.querySelectorAll('eqn').forEach((elem) => {
                katex.render(elem.textContent, elem, {
                    displayMode: true,
                    throwOnError: false
                });
            });
        });
        document.body.appendChild(elem);

        // insert highlight.js
        elem = document.createElement('script');
        elem.src = document.getElementById('highlightjs-url').href;
        elem.addEventListener('load', () => {
            document.querySelectorAll('pre code').forEach((elem) => {
                hljs.highlightBlock(elem);
            });
        });
        document.body.appendChild(elem);
    });
})(document);