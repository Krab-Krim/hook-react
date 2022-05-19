import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
const UseRefExercise = () => {
   // Изменится содержимое блока на &quot;text&quot;
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("Блок");

    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "text" ? "Блок" : "text"
        );
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    // Высота и ширина станут равны 150 и 80 соответственно
    const inputRef = useRef();

    const handleClickWidth = () => {
        inputRef.current.style.width = "150px";
        inputRef.current.style.height = "80px";
    };

    // Два изменения
    const prevStateClic = useRef("");
    const [otherStateClic, setOtherStateClic] = useState("Блок");
    const inputRefClic = useRef();

    useEffect(() => {
        prevStateClic.current = otherStateClic;
    }, [otherStateClic]);

    const handleClickWidthToggleOtherState = () => {
        inputRefClic.current.style.width = "150px";
        inputRefClic.current.style.height = "80px";

        setOtherStateClic((prevState) =>
            prevState === "text" ? "Блок" : "text"
        );
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <Divider/>
            <div className="d-flex justify-content-evenly">
                <div
                    className="bg-danger d-flex flex-row justify-content-center align-items-center rounded"
                    style={{
                        height: 40,
                        width: 60,
                        color: "white"
                    }}
                    onClick={handleClickWidth}
                    ref={inputRef}
                >
                    <small>Блок</small>
                </div>
                <div
                    className="bg-success d-flex flex-row justify-content-center align-items-center rounded"
                    style={{
                        height: 40,
                        width: 60,
                        color: "white"
                    }}
                    onClick={toggleOtherState}
                >
                    <small>{otherState}</small>
                </div>
            </div>
            <Divider/>
            <div className="d-flex justify-content-center">
                <div
                    className="bg-secondary d-flex flex-row justify-content-center align-items-center rounded"
                    style={{
                        height: 40,
                        width: 60,
                        color: "white"
                    }}
                    ref={inputRefClic}
                    onClick={handleClickWidthToggleOtherState}
                >
                    <small>{otherStateClic}</small>
                </div>
            </div>

        </CollapseWrapper>
    );
};

export default UseRefExercise;
