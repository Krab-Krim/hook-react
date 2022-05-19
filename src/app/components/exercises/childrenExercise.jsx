import React from "react";
// import React, { useEffect, useState } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import PropTypes from "prop-types";

const NewReactChildrenArray = ({ children }) => {
    return (
        <ol>
            {React.Children.map(children, child => <li>{child}</li>)}
        </ol>
    );
};

NewReactChildrenArray.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Component />
            <Component />
            <Component />
            <Divider />
            <NewReactChildrenArray>
                {<Component />}
                {<Component />}
                {<Component />}
            </NewReactChildrenArray>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
