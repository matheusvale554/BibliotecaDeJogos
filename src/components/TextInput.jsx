import PropTypes from "prop-types"

TextInput.PropTypes = {
    id:PropTypes.string,
    value:PropTypes.string,
    setValue:PropTypes.func,
    label:PropTypes.string
}
export default function TextInput({id,label,value,setValue}){
    
    return(
        <div>
                <label htmlFor={id}>{label}</label>
                <input
                    type="text"
                    id={id}
                    name={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
            </div>
    )
}