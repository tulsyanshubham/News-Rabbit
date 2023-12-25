import React from 'react'
import { Link } from 'react-router-dom'
import './css/error.css';
import errorimgw from '../image/404w.png';
import errorimgb from '../image/404b.png';

export default function Error(props) {
    return (
        <div>
            <h1 class="d-flex align-items-center flex-column">
                <img src={props.mode==="dark"?errorimgw : errorimgb} alt="404 ERROR Page Not Found"/>
                <Link to="/News-Rabbit"><button type="button" class={`btn mt-3 btn-${props.mode==='dark'?'light':'dark'}`}>Go Back</button></Link>
            </h1>
        </div>
    )
}
