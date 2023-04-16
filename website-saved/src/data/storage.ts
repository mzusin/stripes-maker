const KEY = 'svg-stripes-maker';

export const saveToSessionStorage = (value: any) => {
    if(!window.sessionStorage) return;

    const encoded = encodeURIComponent(JSON.stringify(value));
    sessionStorage.setItem(KEY, encoded);
};

export const getFromSessionStorage = () => {
    if(!window.sessionStorage) return null;

    const value = sessionStorage.getItem(KEY);
    if(!value) return null;

    let parsed = null;

    try{
        parsed = JSON.parse(decodeURIComponent(value));
    }
    catch (ex){}

    return parsed;
};