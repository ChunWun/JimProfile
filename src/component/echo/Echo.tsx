import React, { FC, useState } from "react";

interface IShowSomething {
    content: any; //or can be string | number
}

const ShowSomething: FC<IShowSomething> = (props: IShowSomething) => {
    return (
        <div>
            remain : {props.content}
        </div>
    );
}

const Echo: FC = () => {
    const [clickRemain, setClickTime] = useState(3);

    const onPressButton = () => {
        setClickTime(clickRemain - 1);
    }

    const result: IShowSomething = {
        content: (clickRemain > 0) ? clickRemain : 'no time left'
    }

    return (
        <div>
            <button onClick={onPressButton}> click me </button>
            <ShowSomething {...result} />
        </div >
    );
}

export default Echo;

