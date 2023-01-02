import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('l-header')}>
            <div className={cx('l-container', 'l-header__inner')}></div>
        </header>
    );
}

export default Header;
