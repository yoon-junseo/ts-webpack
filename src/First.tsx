import React from 'react';

type GreetingProps = {
    name: string;
}

const First = ({name} : GreetingProps) => {
    return (
        <div>
            hello {name}
        </div>
    );
};

export default First;