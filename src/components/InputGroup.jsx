import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = props => {
    const {name, value, isError, labelName, inputType, eventHandler} = props;
    return (
        <div className='form-group'>
            <label htmlFor={labelName.replace(" ", "_").toLowerCase()}>{labelName}</label>
            <input
                id={labelName.replace(" ", "_").toLowerCase()}
                name={name}
                type={inputType} 
                className={`form-control ${isError ? "is-invalid" : null}`}
                placeholder={labelName}
                onChange = {eventHandler}
                defaultValue = {value}
            />
        </div>
    );
};

InputGroup.propTypes = {
    labelName: PropTypes.string.isRequired,
    eventHandler: PropTypes.func.isRequired,
    inputType: PropTypes.string
};

InputGroup.defaulProps = {
    inputType: "text"
};

export default InputGroup;