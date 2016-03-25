'use strict';

module.exports = (pluginContext) => {
    const shell = pluginContext.shell;

    function search(query, res) {
        const query_trim = query.trim();
        if (query_trim.length == 0) {
            return;
        }
        res.add({
            id: query_trim,
            payload: 'uppercase',
            title: query_trim.toUpperCase(),
            desc: 'Convert Case - Uppercase'
        });

        res.add({
            id: query_trim,
            payload: 'lowercase',
            title: query_trim.toLowerCase(),
            desc: 'Convert Case - Lowercase'
        });
    }

    function execute(id, payload) {
        if (payload == 'uppercase') {
            copy_to_clipboard(`${id}`.toUpperCase())
            return;
        }
         if (payload == 'lowercase') {
            copy_to_clipboard(`${id}`.toLowerCase())
            return;
        }

    }

    function copy_to_clipboard(text){
        const cp = require('child_process');
        const child = cp.spawn('clip');
        child.stdin.write(text);
        child.stdin.end();
    }

    return {search, execute};
};