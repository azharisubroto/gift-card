import React, { FC, InputHTMLAttributes } from 'react';
import { tw } from 'twind/css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const TextField: FC<InputProps> = ({ name, label, ...rest }) => (
  <div className={tw(`mb-6 xl:w-96`)}>
    {label && (
      <label
        htmlFor={`${name}`}
        className={tw([`form-label`, `inline-block`, `mb-2`, `text-gray-700`, `text-md`, `block`])}>
        {label}
      </label>
    )}

    <input
      id={name}
      name={name}
      {...rest}
      className={tw([
        `form-control`,
        `block`,
        `w-full`,
        `px-4`,
        `py-2`,
        `text-xl`,
        `font-normal`,
        `text-gray-700`,
        `bg-white bg-clip-padding`,
        `border border-2 border-solid border-gray-300`,
        `rounded-md`,
        `transition`,
        `ease-in-out`,
        `m-0`,
        `focus:outline-none`,
        `focus:border-green-600`
      ])}
    />
  </div>
);

export default TextField;
