import { Fragment } from 'react';
import classNames from 'classnames/bind';
import Style from './Primary.module.scss';
import Header from '~/Component/Header';
import Sidebar from '~/Component/Sidebar';

const cx = classNames.bind(Style);

function Primary({ children }) {
    return (
        <Fragment>
            <Header />
            <div className={cx('l-primary')}>
                <div className={cx('l-primary__inner', 'l-container')}>
                    <Sidebar customClass={cx('l-primary__sidebar')} />
                    <section className={cx('l-primary__content')}>
                        {children}
                    </section>
                </div>
            </div>
        </Fragment>
    );
}

export default Primary;
