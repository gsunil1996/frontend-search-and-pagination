import React from 'react'

const Practice = () => {

    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }

    async function asyncCall() {
        const result = await resolveAfter2Seconds();
        console.log("result", result);
        return result;
    }

    asyncCall()

    return (
        <div>Practice</div>
    )
}

export default Practice