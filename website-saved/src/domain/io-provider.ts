/**
 * Client side download
 */
export const downloadSVG = (svg: string) => {

    const blob = new Blob([svg], {type : 'text/plain'});
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.title = '';
    link.download = 'stripes.svg';
    link.click();

    URL.revokeObjectURL(url);
};