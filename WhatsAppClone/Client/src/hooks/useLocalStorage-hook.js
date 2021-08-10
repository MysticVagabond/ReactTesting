import {useEffect, useState} from 'react';

const PREFIX = 'whatsapp-clone-';

export default function useLocalStorageHook(key, initialValue) {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(getInitialValue(prefixedKey, initialValue));

    useEffect(() => {
        const v = JSON.stringify(value);
        console.log("Local Storage Setting Key & Value: " + prefixedKey + " value: " + v);
        localStorage.setItem(prefixedKey, v)
    }, [value, prefixedKey]);

    return [value, setValue];
}

function getInitialValue(prefixedKey, initialValue) {
    let jsonValue = localStorage.getItem((prefixedKey));

    if (jsonValue != null && jsonValue !== 'undefined') {
        const v = JSON.parse(jsonValue);
        console.log("Value exists in localstorage for key: " + prefixedKey + " value: " + v);
        return v;
    }
    if (typeof(initialValue) === 'function') return initialValue();
    return initialValue;
}