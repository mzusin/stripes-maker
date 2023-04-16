import React from 'react';
import { downloadSVG } from '../../domain/io-provider';

interface IDownloadButton {
    svg: string,
}

const DownloadButton = (props: IDownloadButton) => {

    /**
     * download the result SVG
     */
    const downloadHandler = () => {
        downloadSVG(props.svg);
    };

    return (
        <button
            type="button"
            className="bg-blue-500 text-gray-100 rounded-full px-10 py-6 text-xl"
            onClick={ downloadHandler }>Download SVG</button>
    )
};

export default DownloadButton;