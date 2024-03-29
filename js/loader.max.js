/*
    <link rel="preload" as="script" id="katex-url" href="katex-path">
    <link rel="preload" as="script" id="hljs-url" href="hljs-path">
*/

((document) => {
    const insert = () => {
        // insert KaTeX (https://github.com/KaTeX/KaTeX)
        let elem = document.createElement('script');
        elem.src = document.querySelector('#katex-url').href;
        elem.addEventListener('load', () => {
            document.body.querySelectorAll('span.math.inline').forEach((elem) => {
                katex.render(elem.textContent, elem, {
                    displayMode: false,
                    throwOnError: false
                });
            });
            document.body.querySelectorAll('div.math.block').forEach((elem) => {
                katex.render(elem.textContent, elem, {
                    displayMode: true,
                    throwOnError: false
                });
            });
        });
        document.body.appendChild(elem);

        // insert highlight.js (https://github.com/highlightjs/highlight.js)
        elem = document.createElement('script');
        elem.src = document.querySelector('#hljs-url').href;
        elem.addEventListener('load', () => hljs.highlightAll());
        document.body.appendChild(elem);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insert);
    } else {
        insert()
    }
})(document);