import { useState } from 'react';
import classNames from 'classnames/bind';

import style from './ThemeBtn.module.scss';

const cx = classNames.bind(style);

function ThemeBtn() {
    const [darkTheme, setDarkTheme] = useState(false);

    const handleClick = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <button
            className={cx('c-themeBtn', {
                'is-active': darkTheme,
            })}
            onClick={handleClick}
        >
            <div className={cx('c-themeBtn__box')}>
                <span className={cx('c-themeBtn__circle')}></span>
            </div>
        </button>
    );
}

export default ThemeBtn;
