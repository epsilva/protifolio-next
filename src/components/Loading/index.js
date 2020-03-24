import React from 'react';
import Loader from 'react-loader-spinner'

export default function Loading() {
    return (
        <>
            <Loader
                type="ThreeDots"
                color="#6963fb"
                height={30}
                width={30}
            />
        </>
    );
}
