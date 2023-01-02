import classNames from 'classnames/bind';
import Styles from './TooltipWrapper.module.scss';

const cx = classNames.bind(Styles);

function TooltipWrapper({ children }) {
    return <div className={cx('l-header__tooltipWrapper')}>{children}</div>;
}

export default TooltipWrapper;
