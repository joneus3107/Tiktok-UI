import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/Layouts';

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/">HomePage</Link>
                <br />
                <Link to="/following">Following</Link>
                <br />
                <Link to="/upload">Upload</Link>
                <br />
                <Link to="/search">Search</Link>
                <br />
            </nav>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.element;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
