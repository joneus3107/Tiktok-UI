import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from '~/Component/Header/Header.module.scss';
import images from '~/assets/images';
import SearchIco from '~/Component/Header/SearchIco';
import TooltipWrapper from '~/Component/Header/TooltipWrapper';
import HeaderSVG from '~/Component/Header/HeaderSVG';
import GuestNav from './guestNav';
import MemberNav from './memberNav';

const cx = classNames.bind(styles);
const testData = [
    {
        avatar: 'https://yt3.googleusercontent.com/ytc/AMLnZu-dve9_9Pny-sISQqtWQeKPTwbmvduMsqR1F9M_dw=s900-c-k-c0x00ffffff-no-rj',
        userName: 'tranthanh123',
        niceName: 'Trấn Thành',
        blueStick: true,
    },
    {
        avatar: 'https://bedental.vn/wp-content/uploads/2022/11/hot-girl_8-683x1024.jpg',
        userName: 'iamleon9999',
        niceName: 'iamlion',
    },
    {
        avatar: 'https://image-us.24h.com.vn/upload/4-2021/images/2021-10-23/anh-1-1634958379-406-width650height813.jpg',
        userName: 'dothuyquynh999',
        niceName: 'Quỳnh Moon 🌙',
    },
];

function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [checkClear, setCheckClear] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [member, setMember] = useState(false);

    useEffect(() => {
        if (searchInput.length > 0) {
            setCheckClear(true);
            setSearchResult(testData);
        } else {
            setCheckClear(false);
            setSearchResult([]);
        }
    }, [searchInput]);

    const clearRef = useRef();

    // eslint-disable-next-line
    const logInAction = () => {
        setMember(!member);
    };

    const handleChangeSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const resetSearch = () => {
        setSearchInput('');
    };

    return (
        <header className={cx('l-header')}>
            <div className={cx('l-container', 'l-header__inner')}>
                <div className={cx('l-header__logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <div className={cx('l-header__searchArea')}>
                    {/* Search Account Result */}
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(atts) => (
                            <div
                                className={cx('l-header__searchResult')}
                                tabIndex="-1"
                                {...atts}
                            >
                                <TooltipWrapper>
                                    <h4>Tài khoản</h4>
                                    {searchResult.map((account, index) => (
                                        <div
                                            key={index}
                                            className={cx(
                                                'l-header__searchAccount',
                                            )}
                                        >
                                            <div
                                                className={cx(
                                                    'l-header__searchAccountImg',
                                                )}
                                            >
                                                <img
                                                    src={account.avatar}
                                                    alt={account.userName}
                                                />
                                            </div>
                                            <div
                                                className={cx(
                                                    'l-header__searchAccountInfo',
                                                )}
                                            >
                                                <h5>
                                                    {account.userName}
                                                    {account.blueStick && (
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faCheckCircle
                                                                }
                                                            />
                                                        </span>
                                                    )}
                                                </h5>
                                                <p>{account.niceName}</p>
                                            </div>
                                        </div>
                                    ))}
                                </TooltipWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('l-header__searchBar')} id="parent">
                            <input
                                className={cx('l-header__txtInput')}
                                type="text"
                                spellCheck="false"
                                autoComplete="false"
                                value={searchInput}
                                onChange={handleChangeSearch}
                                placeholder="Tìm kiếm tài khoản và video"
                            />
                            <button
                                type="reset"
                                className={cx('l-header__clear', {
                                    'l-header__clear--show': checkClear,
                                })}
                                ref={clearRef}
                                onClick={resetSearch}
                            >
                                <img src={images.clear} alt="clear_ico" />
                            </button>
                            <span className={cx('l-header__border')}></span>

                            <button
                                type="submit"
                                className={cx('l-header__search')}
                            >
                                <SearchIco />
                            </button>
                        </div>
                    </Tippy>
                </div>
                {member ? (
                    <MemberNav />
                ) : (
                    <GuestNav logInAction={logInAction} />
                )}
            </div>
            <HeaderSVG />
        </header>
    );
}

export default Header;
