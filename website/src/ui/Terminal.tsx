import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

// highlight.js library for highlighting the SVG code
// https://highlightjs.readthedocs.io/en/latest/readme.html?highlight=import#es6-modules-import
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/tokyo-night-dark.css';

// js-beautify library is used to beautify SVG string
// https://github.com/beautify-web/js-beautify
import js_beautify from 'js-beautify';

interface ITerminal {
    title: string,
    content: string,
}

const Terminal = (props: ITerminal) => {

    /**
     * init highlight.js library
     */
    useEffect(() => {
        hljs.registerLanguage('css', css);
        hljs.registerLanguage('xml', xml);
    }, []);

    /**
     * copy SVG string to the clipboard
     */
    const copyToClipboard = async () => {
        try{
            await window.navigator.clipboard.writeText(props.content);

            // https://fkhadra.github.io/react-toastify/introduction/
            toast('Copied to clipboard successfully.');
        }
        catch(ex){}
    };

    /**
     * highlight and beautify SVG string
     */
    const getFormattedSVGString = () => {
        const beautified = js_beautify.html_beautify(props.content);
        return hljs.highlightAuto(beautified, ['xml', 'css']).value;
    };

    return (
        <div className="text-gray-200 text-sm rounded overflow-hidden flex flex-col">
            <div className="bg-slate-600 px-4 py-2 relative flex items-center">
                <ul className="flex absolute">
                    <li className="bg-red-500 rounded-full w-2.5 h-2.5 mr-2" />
                    <li className="bg-amber-400 rounded-full w-2.5 h-2.5 mr-2" />
                    <li className="bg-lime-500 rounded-full w-2.5 h-2.5 mr-2" />
                </ul>
                <div className="flex-1 text-center 0">{ props.title }</div>
                <button
                    type="button"
                    className="absolute right-5 bg-blue-300 text-gray-900 text-xs px-4 py-0.5 rounded"
                    onClick={ copyToClipboard }>Copy</button>
            </div>
            <div className="bg-black p-6 flex-1">
                <pre>
                    <code className="break-space" dangerouslySetInnerHTML={{ __html: getFormattedSVGString() }} />
                </pre>
            </div>
        </div>
    )
};

export default Terminal;