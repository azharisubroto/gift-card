import React, { ButtonHTMLAttributes, FC } from 'react';
import { tw } from 'twind';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  isLoading?: boolean;
}

const Button: FC<Props> = ({ primary, modifier, children, isLoading, ...rest }) => {
  const baseStyle = `font-medium py-3 text-lg px-4 border rounded disabled:opacity-75 disabled:bg-gray-500 px-16`;
  const styles = primary
    ? `hover:bg-green-400 text-white bg-opacity-75`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button disabled={isLoading} type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {isLoading ? `Processing...` : children}

      <style jsx>{`
        button {
          background: ${primary ? `#58b965` : `#fff`};
        }
      `}</style>
    </button>
  );
};

export default Button;
