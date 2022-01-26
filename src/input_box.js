import React, { useState } from 'react';
import Gif_Grid from './gif-grid';
import "./input_box.css"

function Input_Box() {

    const [activegrid, setactivegrid] = useState(false);



    return <div>
        <div className="main-conatiner">
            <div className="container">
                <div className="text-input">
                    <textarea placeholder="Text Message"></textarea>
                    <button className="gif-btn" onClick={() => { setactivegrid(!activegrid) }} ><img src="https://img.icons8.com/carbon-copy/100/000000/gif.png" /></button>
                    <button className="send-btn">
                        <img
                            src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-send-user-interface-kmg-design-detailed-outline-kmg-design.png" />
                    </button>
                </div>
                {
                    activegrid && <Gif_Grid setactivegrid={setactivegrid} />
                }
            </div>
        </div>
    </div >
}

export default Input_Box;
