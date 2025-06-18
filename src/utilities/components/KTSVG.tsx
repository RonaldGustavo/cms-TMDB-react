import React from 'react';
import SVG from 'react-inlinesvg';
type Props = {
  className?: string;
  path: string;
  svgClassName?: string;
  onClick?: () => void;
};

const KTSVG: React.FC<Props> = ({
  className = '',
  path,
  svgClassName = 'mh-50px',
  onClick,
}) => {
  return (
    <span onClick={onClick} className={`svg-icon ${className}`}>
      {/* <SVG src={toAbsoluteUrl(path)} className={svgClassName} /> */}
      <SVG src={path} className={svgClassName} />
    </span>
  );
};

export { KTSVG };
