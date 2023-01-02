import classNames from 'classnames/bind';
import Style from './Sidebar.module.scss';

const cx = classNames.bind(Style);

function Sidebar(props) {
    console.log(props);
    return (
        <aside className={cx('c-sidebar', props.customClass)}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
