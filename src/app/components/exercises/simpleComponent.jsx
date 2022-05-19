import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ props }) => {
    const getLogins = () => {
        if (!props.isAuth) {
            return (
                <>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={props.onLogin}
                    >
                        Войти
                    </button>
                </>
            );
        } else if (props.isAuth) {
            return (
                <>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={props.onLogOut}
                    >
                        Выйти из системы
                    </button>
                </>
            );
        }
    };

    return (
        <>
            {getLogins()}
        </>
    );
};

SimpleComponent.propTypes = {
    props: PropTypes.object,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
