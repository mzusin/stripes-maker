import React from 'react';
import { download } from 'mz-svg';

const DownloadSvg = () => {

    const onDownloadSvg = async () => {

        const $svg = document.getElementById('stripes-svg') as unknown as SVGSVGElement;
        if(!$svg) return;

        await download({
            $svg,
            outfileName: 'my-svg', // optional file name ---> my-svg.svg
            ext: 'svg', // optional file extension ---> svg, png, jpg, etc.
        });
    };

    return(
        <button type="button" className="flex justify-center" onClick={ onDownloadSvg }>
            Download
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="24"
                 height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                 strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"></path>
                <path d="M12 13l0 9"></path>
                <path d="M9 19l3 3l3 -3"></path>
            </svg>
        </button>
    )
};

export default DownloadSvg;