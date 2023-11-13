function InputGroup({onChange, label, id, dkey, type, value}){
    return(
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input 
            onChange={onChange} 
            type={type} 
            id={id} 
            value={value} 
            data-key={dkey} 
            />
        </div>
    )
}

export default InputGroup;