import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from '~/Layouts/Component/Header/Header.module.scss';
import images from '~/assets/images';
import SearchIco from '~/Layouts/Component/Header/SearchIco';
import TooltipWrapper from '~/Layouts/Component/Header/TooltipWrapper';

const cx = classNames.bind(styles);
const testData = [
    {
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1663032433476609.jpeg?x-expires=1672844400&x-signature=zSHh3ToKDIAzgPO63uJud7EuAXI%3D',
        userName: 'tranthanh123',
        niceName: 'Trấn Thành',
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/07d7f3e222765515c2787c1d093bcdaa~c5_100x100.jpeg?x-expires=1672844400&x-signature=sbfYFATqfsOJMD6JYlQa6xH2srw%3D',
        userName: 'iamleon9999',
        niceName: 'iamlion',
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fdd0c0deb03af5576ae12c894c3ab86d~c5_100x100.jpeg?x-expires=1672844400&x-signature=%2BXIMLn73Fwa05Z9UVPivBXHgRDM%3D',
        userName: 'dothuyquynh999',
        niceName: 'Quỳnh Moon 🌙',
    },
];

function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [checkClear, setCheckClear] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        console.log(searchResult);
        if (searchInput.length > 0) {
            setSearchResult(testData);
        } else {
            setSearchResult([]);
        }
    }, [searchInput]);

    const clearRef = useRef();

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
                                                <h5>{account.userName}</h5>
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
                <div className={cx('l-header__navMenu')}></div>
            </div>
        </header>
    );
}

export default Header;
