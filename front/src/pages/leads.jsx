import {useEffect, useState} from "react";
import {NavLink, Link} from 'react-router-dom'
import trophy from "../assets/img/trophy.png";

export function Leads() {

    const users = [
        {name: 'ירדן', tokens: 82},
        {name: 'רונן', tokens: 80},
        {name: 'עדן', tokens: 68},
        {name: 'אביב', tokens: 57},
        {name: 'רון', tokens: 50},
        {name: 'אופיר', tokens: 30},
    ]

    return (
        <section className='leads main-layout'>
            <div className="container">
                <h1>מובילים</h1>
                <div className="image-wrapper">
                    <img src={trophy}/>
                </div>
                <p style={{ fontWeight: 'bold' }}>אז מי מיחזר הכי הרבה?</p>

                <div className="list">
                    {users.length ? users.map((user, idx) => {
                        return <div className="list-item"key={idx} 
                        style={{ backgroundColor: user.name === 'עדן' ? '#D3D3D3' : '#FFFFFF' }}>
                            <span className="name">{user['name']}</span>
                            <span className="tokens">{user['tokens']}</span>
                        </div>
                    }) : null}
                </div>


            </div>
        </section>
    )
}