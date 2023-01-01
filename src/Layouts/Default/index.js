import Header from './Header';

function Default({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Default;
