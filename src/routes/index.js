import { HomePage, FollowingPage, UploadPage, SearchPage } from '~/pages';
import { PrimaryLayout } from '~/Layouts';

// Public Routes
const publicRoutes = [
    { path: '/', element: HomePage, layout: PrimaryLayout },
    { path: '/following', element: FollowingPage, layout: PrimaryLayout },
    { path: '/search', element: SearchPage, layout: null },
    { path: '/upload', element: UploadPage },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
