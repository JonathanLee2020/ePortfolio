function Label({value, color}) {
    return (
        <div style={{backgroundColor: {color}}}>
            {value}
        </div>
    )
}

export function Preview () {
    return <Label value={"Solution"} color = {"blue"}></Label>
}

function closest (ts) {
    let res = -Infinity;

    for (val of ts) {
        if (Math.abs(val) === Math.abs(res) && val > 0) res = val;
        if (Math.abs(val) < Math.abs(res)) res = val;
    }
    return res;

}

def closest(ts):
    res = float('-inf')
    for val in ts:
        if abs(val) == abs(res) and val > 0:
            res = val
        if abs(val) < abs(res):
            res = val
    return res


    #!/bin/bash 
    file=/tmpfile
    {
        Mount
        echo 
        df 
    } > $file

    import React from 'react'
    class ButtonAndInput extends React.Componenet {
        constructor (props) {
            super(proprs)
        }

        handleClick() {
            this.textInput.focus();
        }
    
        render () {
            return (
                <div>
                    <input type="text" 
                    ref={{input} => this.textInput = input}
                    
                    />
                    <button onClick={() => this.handleClick()}>
                        Button
                    </button>
    
                </div>
            )
        }
    }

    

    export function Preview () {
        return <Blink>Solution</Blink>
    }

    import React, { useState, useEffect } from 'react';

function Blink({ children }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(v => !v);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <span style={{ visibility: isVisible ? 'visible' : 'hidden' }}>{children}</span>;
}

export function Preview() {
    return <Blink>Solution</Blink>;
}
