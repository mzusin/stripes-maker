/**
 * transform for field name to id
 * it should be lower-cased with dashes
 */
export const getFormFieldId = (title: string) => {

    let formatted = title.trim().toLocaleLowerCase();
    formatted = formatted.replace(/([^a-zA-Z])+/g, '-');

    // remove first dashes ----------------
    if(formatted.startsWith('-')){
        formatted = formatted.substring(1);
    }

    // remove last dashes ----------------
    if(formatted.endsWith('-')){
        formatted = formatted.substring(0, formatted.length - 1);
    }

    return formatted;
};
