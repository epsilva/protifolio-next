import React from 'react';

import { Text } from './styles';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" >
            <a>
                <Text>PF</Text>
            </a>
        </Link>
    );
}
