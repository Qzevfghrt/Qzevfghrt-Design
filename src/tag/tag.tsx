import React from 'react';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import {
  PresetColorType,
  PresetColorTypes,
  PresetStatusColorType,
  PresetStatusColorTypes,
} from '../_util/colors';
import { LiteralUnion } from '../_util/type';
import { getPrefixClass } from '../_util/prefix-class';
import { tuple } from '../_util/tuple';
import Icon from '../icon';
import './style';

const TagVariantTypes = tuple('filled', 'light', 'outlined', 'stroked');
export type TagVariantType = typeof TagVariantTypes[number];

const TagSizeTypes = tuple('md', 'sm');
export type TagSizeType = typeof TagSizeTypes[number];

export type TagType = React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>>;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefixCls?: string;
  className?: string;
  variant?: TagVariantType;
  size?: TagSizeType;
  color?: LiteralUnion<PresetColorType | PresetStatusColorType, string>;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  visible?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
const PresetColorRegex = new RegExp(`^(${PresetColorTypes.join('|')})(-inverse)?$`);
const PresetStatusColorRegex = new RegExp(`^(${PresetStatusColorTypes.join('|')})$`);

const InternalTag: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = (
  {
    prefixCls: customizePrefixCls,
    className,
    variant = 'filled',
    size = 'md',
    style,
    children,
    startIcon,
    endIcon,
    color = 'purple',
    onClose,
    closeIcon = <Icon type="icon-close" />,
    closable = false,
    ...props
  },
  ref,
) => {
  const isPresetColor = (): boolean => {
    if (!color) {
      return false;
    }
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  const tagStyle = {
    backgroundColor: color && !isPresetColor() ? color : undefined,
    ...style,
  };

  const presetColor = isPresetColor();
  const prefixCls = getPrefixClass('tag', customizePrefixCls);
  const tagClassName = classNames(
    prefixCls,
    {
      [`${prefixCls}-${color}`]: presetColor,
    },
    `${prefixCls}-${variant}`,
    `${prefixCls}-${size}`,
    className,
  );

  const tagProps = omit(props, ['visible']);
  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);
  };
  const closeIconNode = (
    // 这里没有用onClick以及设置了aria-hidden="true"是为了解决EsLint报错，希望以后能改进
    <span className={`${prefixCls}-close-icon`} onMouseUp={handleCloseClick} aria-hidden="true">
      {closeIcon}
    </span>
  );
  const kids =
    startIcon || endIcon || closable ? (
      <>
        {startIcon}
        <span className={`${prefixCls}-text`}>{children}</span>
        {closable ? closeIconNode : endIcon}
      </>
    ) : (
      <span className={`${prefixCls}-text`}>{children}</span>
    );

  return (
    <span {...tagProps} ref={ref} className={tagClassName} style={tagStyle}>
      {kids}
    </span>
  );
};

const Tag = React.forwardRef<any, TagProps>(InternalTag) as TagType;

export default Tag;
