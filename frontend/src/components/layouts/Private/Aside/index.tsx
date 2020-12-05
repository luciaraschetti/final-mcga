import './style.css';
import React from 'react';


const Index = (props: any) => {
    return (
        <React.Fragment>
            <div className="aside">
                <div className="logo">
                    E-P
                </div>
                <div className="list">
                    <ul>
                        <li>Torneos</li>
                        <li>Admins</li>
                        <li>Players</li>
                        <li>Juegos</li>
                        <li>Config</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Index;