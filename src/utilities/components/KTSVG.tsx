import React from 'react';
import SVG from 'react-inlinesvg';
type Props = {
  className?: string;
  path: string;
  svgClassName?: string;
  onClick?: () => void;
  useDefaultClass?: boolean;
};

const KTSVG: React.FC<Props> = ({
  className = '',
  path,
  svgClassName = 'mh-50px',
  onClick,
  useDefaultClass = true,
}) => {
  const wrapperClass = useDefaultClass
    ? `svg-icon ${className}`.trim()
    : className;

  return (
    <span onClick={onClick} className={wrapperClass}>
      <SVG src={path} className={svgClassName} />
    </span>
  );
};

export { KTSVG };

