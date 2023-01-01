import Header from './Header';
import Sidebar from './Sidebar';

function Primary({ children }) {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
        </div>
    );
}

export default Primary;
