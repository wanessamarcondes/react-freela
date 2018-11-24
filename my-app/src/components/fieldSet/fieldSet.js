import React from "react"

const FieldSet = (props) => {
    return (
        <fieldset>
            <legend>{props.legendInput}</legend>
            <div className="secao__formulario__grupo">
                <label htmlFor={props.idInput}>{props.labelInput}</label>
                <input id={props.idInput} type={props.typeInput} value={props.valueInput} onChange={props.onChange}></input>
            </div>
        </fieldset>
    )
}

export default FieldSet
