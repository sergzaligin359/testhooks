import { useState } from 'react'


export const useTest = str => {
    
    const [res, setRes] = useState(str)

    const doTest = (txt) => {
        setRes(txt)
        console.log('useTest', txt);
    }

    return [
        res
        ,
        doTest
    ]
}