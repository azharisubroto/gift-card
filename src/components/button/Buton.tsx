import { tw } from 'twind';

interface Props {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  isLoading?: boolean;
}

const Button = ({ primary, modifier, children, isLoading, ...rest }: Props) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded disabled:opacity-75 disabled:bg-gray-500`;
  const styles = primary
    ? `bg-success border-success hover:bg-success text-vanilla`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button disabled={isLoading} type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {isLoading ? `Processing...` : children}
    </button>
  );
};

export default Button;
