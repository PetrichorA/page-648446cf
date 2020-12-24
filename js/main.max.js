(() => {
    const render = () => {
        const eq = document.querySelectorAll('eq');
        for (const elem of eq) {
            katex.render(elem.textContent, elem, {
                displayMode: false,
                throwOnError: false
            });
        }
        const eqn = document.querySelectorAll('eqn');
        for (const elem of eqn) {
            katex.render(elem.textContent, elem, {
                displayMode: true,
                throwOnError: false
            });
        }
        const preCode = document.querySelectorAll('pre code');
        for (const elem of preCode) {
            hljs.highlightBlock(elem);
        }
    };

    if (document.readyState === 'complete') {
        render();
    } else {
        document.addEventListener('DOMContentLoaded', render);
    }
})();