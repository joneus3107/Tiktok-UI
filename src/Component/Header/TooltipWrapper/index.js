import classNames from 'classnames/bind';
import Styles from './TooltipWrapper.module.scss';

const cx = classNames.bind(Styles);

function TooltipWrapper({ children, classNames }) {
    return (
        <div className={cx('l-header__tooltipWrapper', classNames)}>
            {children}
        </div>
    );
}

export default TooltipWrapper;
