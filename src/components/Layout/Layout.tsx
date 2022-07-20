import React from 'react';
import Header from '../Header';
import { NextSeo, NextSeoProps } from 'next-seo';
import { tw } from 'twind/css';

interface ILayoutDefault {
  children?: React.ReactNode;
  pageTitle?: string;
  nextSeoProps?: Partial<NextSeoProps>;
}

const LayoutDefault = ({ children, nextSeoProps, ...rest }: ILayoutDefault) => (
  <main
    {...rest}
    className={tw([`bg-white`, `max-w-4xl`, `mx-auto`, `shadow-xl`, `rounded-md`, `mt-8`, `overflow-hidden`])}>
    <NextSeo
      openGraph={{
        url: process.env.NEXT_PUBLIC_APP_URL,
        title: process.env.NEXT_PUBLIC_APP_NAME,
        description: `A gift card form web app`,
        site_name: process.env.NEXT_PUBLIC_APP_NAME
      }}
      {...nextSeoProps}
    />
    {/* Header */}
    <Header />

    {/* Page content */}
    {children}
  </main>
);

export default LayoutDefault;