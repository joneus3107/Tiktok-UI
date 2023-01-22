import Header from '~/Component/Header';

function Default({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Default;
