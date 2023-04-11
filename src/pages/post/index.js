import Link from 'next/link';
import React from 'react';

const users = () => {
    return (
        <div>
            <h2> post</h2>
            <Link href="/post/1" > post1 </Link>
            <Link href="/post/2" > post1 </Link>
            <Link href="/post/3" > post1 </Link>
            <Link href="/post/4" > User1 </Link>
        </div>
    );
};

export default users;