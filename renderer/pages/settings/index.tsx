import React from "react";
import Head from "next/head";
import Link from "next/link";

function Settings() {
    return (
        <React.Fragment>
            <Head>
                <title>Settings - Nextron (with-typescript-tailwindcss)</title>
            </Head>
            <div className="grid-col-1 grid w-full text-center text-2xl">
                <img className="ml-auto mr-auto" src="/images/logo.png" />
                <span>⚡ Electron ⚡</span>
                <span>+</span>
                <span>Next.js</span>
                <span>+</span>
                <span>tailwindcss</span>
                <span>=</span>
                <span>💕 </span>
            </div>
            <div className="mt-1 flex w-full flex-wrap justify-center">
                <Link href="/">
                    <a className="btn-blue">Go to root page</a>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Settings;
