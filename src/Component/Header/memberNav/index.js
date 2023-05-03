import HeaderMenu from '~/Component/Header/guestNav/HeaderMenu';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './memberNav.module.scss';
import { IcoMsg, IcoNotice } from '~/Component/IconsList';
import Image from '~/Component/Image';

const cx = classNames.bind(styles);

function MemberNav() {
    return (
        <section className={cx('l-header__navMenu')}>
            <Link to="/" className={cx('c-btn01', 'c-btn01--white-bg')}>
                <svg
                    className={'l-header__plusIco'}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
                    ></path>
                </svg>
                Tải lên
            </Link>
            {/* <Link className={cx('l-header__navIcon')}>
                <svg alt="effect" width={22} height={22}>
                    <use xlinkHref="#add_effect"></use>
                </svg>
            </Link> */}
            <Link className={cx('l-header__navIcon', 'l-header__navIconMsg')}>
                <IcoMsg />
            </Link>
            <button className={cx('l-header__navIcon')}>
                <IcoNotice width={32} height={32} />
            </button>
            <HeaderMenu>
                <div className={cx('l-header__memAvt')}>
                    <Image
                        src="https://yt3.googleusercontent.com/ytc/AL5GRJWaaLS7HptfDgsNtBnudaap13VrwHKxWsY9fWpOew=s900-c-k-c0x00ffffff-no-rj"
                        alt="member_avatar"
                        width={32}
                        className="c-fit"
                    />
                </div>
            </HeaderMenu>
        </section>
    );
}

export default MemberNav;
