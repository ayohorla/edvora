import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <header className>
            <div>Edvora</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product'>Product</Link>
                    </li>
                    <li>
                        <Link to = '/state'>State</Link>
                    </li>
                    <li>
                        <Link to='/city'>City</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;