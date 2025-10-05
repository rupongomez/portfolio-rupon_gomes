import React from 'react';

const Title = ({ title }) => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-4 text-blue-400 ">{`<${title}/>`}</h2>

        </div>
    );
};

export default Title;