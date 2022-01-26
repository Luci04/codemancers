import React, { useEffect } from 'react';
import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import axios from 'axios';

function Gif_Grid() {

    const [item_name, setItem_name] = useState("");
    const [gifData, setgifData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("lightgrey");

    const handleChangename = (e) => {
        setItem_name(e.target.value)
        console.log(item_name);
    }

    const fetchData = async () => {

        if (item_name.trim().length === 0) {
            setLoading(true)
            return;
        }
        setLoading(true);

        const api = `https://api.giphy.com/v1/gifs/search?api_key=rDZde1nms1AQOJZkSIlXdA7GLDSeIXi7&q=${item_name}&limit=20&offset=0&rating=g&lang=en`;


        const response = await axios.get(api).then((data) => data.data);
        let data = response.data;

        data = data.map((e) => [e.images.preview_gif.url, e.id])

        console.log(data);

        setgifData(data);
    }

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

    useEffect(() => {
        fetchData();
    }, [item_name]);


    return <div>
        <div className="gif-conatiner">
            <div>
                <input name="item_name" onChange={handleChangename} value={item_name} className="gif-search" placeholder="Searching for gif ..." />
            </div>
            <div className='gif-grid'>
                <Masonry columnsCount={3}>
                    {
                        gifData?.map((e) => {
                            return (
                                <div key={e[1]}>
                                    <img src={e[0]} style={{ width: "100%", height: "100%", padding: "5px" }} />
                                </div>
                            )
                        })
                    }

                </Masonry>
            </div>

            {
                gifData.length == 0 && (<div className='loading-set'> <BounceLoader className="bounce-loading" color={color} size={80} /> </div>)
            }
        </div>
    </div>;
}

export default Gif_Grid;
