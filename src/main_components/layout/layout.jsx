import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import "./layout.css";

const LayoutComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <header>
                <div class="container text-center">
                    <img class="nav-img" src={require('./banner.png')} alt="" />
                    <nav class="navbar navbar-expand-lg ">
                        <div class="navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item">
                                    <Link to='/news/1'
                                        className={`nav-link ${location.pathname === '/' || location.pathname === '/news' ? 'actived' : ''}`}
                                    >
                                        <i class="bi bi-newspaper">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                                class="bi bi-newspaper" viewBox="0 0 16 16">
                                                <path
                                                    d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                                                <path
                                                    d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                                            </svg>
                                        </i>
                                        <span>Haberler</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/market'
                                        className={`nav-link ${location.pathname === '/' || location.pathname === '/market' ? 'actived' : ''}`}
                                    >
                                        <i class="bi bi-newspaper">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                                class="bi bi-newspaper" viewBox="0 0 16 16">
                                                <path
                                                    d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                                            </svg>
                                        </i>
                                        <span>Borsa</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <Outlet/>
        </>
    )
}

export default LayoutComponent;