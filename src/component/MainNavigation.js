import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <header className>
            <div className>Edvora</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;