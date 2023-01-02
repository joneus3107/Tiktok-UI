import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';
import SearchIco from './SearchIco/index';

const cx = classNames.bind(styles);

function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [checkClear, setCheckClear] = useState(false);

    useEffect(() => {
        if (searchInput.length > 0) {
            setCheckClear(true);
        } else {
            setCheckClear(false);
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
                <div className={cx('l-header__searchBar')}>
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
                    <button type="submit" className={cx('l-header__search')}>
                        <SearchIco />
                    </button>
                </div>
                <div className={cx('l-header__navMenu')}></div>
            </div>
        </header>
    );
}

export default Header;
