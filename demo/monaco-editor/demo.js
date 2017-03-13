// require.config({
//     paths: {
//         'vs': 'https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min/vs'
//     }
// });

// require(['vs/editor/editor.main'], function() {
//     var container = document.getElementById('container');
//     var editor = monaco.editor.create(container, {
//         value: [
//             'function func() {',
//             '\tconsole.log("Hello Monaco Editor");',
//             '}'
//         ].join('\n'),
//         language: 'javascript'
//     });
// });


window.addEventListener('load', function() {
    var container = document.getElementById('container');
    var editor = monaco.editor.create(container, {
        value: [
            'function func() {',
            '\tconsole.log("Hello Monaco Editor");',
            '}'
        ].join('\n'),
        language: 'javascript'
    });
},false);