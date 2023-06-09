import Head from "next/head";
import React from "react";
import Navbars from "./Navbars";
import type { ReactElement } from "react";

type LayoutProps = {
  children: ReactElement;
  title: string;
};
export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mb-12">
          <Navbars />
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="">
            <h1 className="text-3xl font-medium">{title}</h1>
          </div>
          <div className="relative py-10">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-sm text-gray-500">
                Continue
              </span>
            </div>
          </div>
          <div className="">{children}</div>
        </div>
      </main>
    </>
  );
}
