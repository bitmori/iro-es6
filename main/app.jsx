import React from 'react';
import ReactDOM from 'react-dom';
import ColorGrid from './colorGrid';
import ColorData from './data';
import PageNav from './pageNav';

ReactDOM.render(
    <div className="page-wrapper">
        <PageNav />
        <div className="page-body">
            <ColorGrid data={ColorData} />
        </div>
        <div className="page-footer">
            <div className="container">
                Copyright &copy; 2015 &middot; Built by <a href="https://github.com/neonmori" target="_blank">Neonphytismo</a>. A showcase of React + Flux + Babel + Elemental UI
            </div>
        </div>
    </div>
    ,
    document.getElementById(`app`)
);