/**
 * convert SVG string to CSS background image
 */
export const svgToBackgroundImage = (svg: string) => {

    // toggle double quotes to single quotes and vice versa
    // for a bit more readability
    let toggled = '';

    for(let i=0; i<svg.length; i++){
        const char = svg[i];

        if(char === "'"){
            toggled += '"';
            continue;
        }

        if(char === '"'){
            toggled += "'";
            continue;
        }

        toggled += char;
    }

    return `background-image: url("data:image/svg+xml,${ encodeURIComponent(toggled) }");`;
};