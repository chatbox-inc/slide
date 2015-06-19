var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? '/bower_components/reveal.js/css/print/pdf.css' : '/bower_components/reveal.js/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );


document.fonts.addEventListener('loadingdone', function() {
    console.log("hoge")
});

// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'fade', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
        { src: '/bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: '/bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '/bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '/bower_components/reveal.js/plugin/highlight/highlight.js', condition: function() { return true;/*!!document.querySelector( 'pre code' );*/ }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: '/bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true },
        { src: '/bower_components/reveal.js/plugin/notes/notes.js', async: true }
    ]
});
