import { useState } from "react";

function SectionInput({ title, children }){
    const [isOpen, setOpen] = useState('open');

    function toggleOpen(){
        if(isOpen == 'open'){
            setOpen('closed');
        }else{
            setOpen('open');
        }
    }

    return(
        <>
        <form className="input-section">
            <header onClick={toggleOpen}><h2>{title}</h2></header>
            <div className={"input-section-content " + isOpen}>
                {children}
            </div>
        </form>
        </>
    )
}

export default SectionInput;
