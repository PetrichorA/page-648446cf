((document) => {
    const render = () => {
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
        document.querySelectorAll('pre code').forEach((elem) => {
            hljs.highlightBlock(elem);
        });
    };

    if (document.readyState === 'complete') {
        render();
    } else {
        document.addEventListener('DOMContentLoaded', render);
    }
})(document);