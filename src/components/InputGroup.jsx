function InputGroup({onChange, label, id, dkey, type, value, infoid}){
    if(type == "textarea"){
        return(
            <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <textarea 
            onChange={onChange} 
            type={type} 
            id={id} 
            value={value} 
            data-key={dkey} 
            data-infoid={infoid}
            />
        </div>
        )
    }

    return(
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input 
            onChange={onChange} 
            type={type} 
            id={id} 
            value={value} 
            data-key={dkey} 
            data-infoid={infoid}
            />
        </div>
    )
}

export default InputGroup;