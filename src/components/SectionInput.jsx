import { useState } from "react";
import uniqid from "uniqid";
import Icon from "@mdi/react";
import { mdiArrowDownDropCircle } from "@mdi/js";

function SectionInput({ title, children, addNew }) {
    const [isOpen, setOpen] = useState('open');

    function toggleOpen() {
        if (isOpen == 'open') {
            setOpen('closed');
        } else {
            setOpen('open');
        }
    }

    return (
        <>
            <div className="input-section">
                <header onClick={toggleOpen}>
                    <h2>
                    {title}                  
                    </h2>
                    <Icon path={mdiArrowDownDropCircle} className={"drop-down " + isOpen} color={"lightgrey"}/>
                </header>

                <div className={"input-section-content " + isOpen}>
                    {children}
                </div>

                <AddButton addNew={addNew} />
            </div>
        </>
    )
}

function AddButton({ addNew }) {
    if (addNew == null) {
        return null;
    } else {
        return (
            <div className="add-btn-container">
            <button className="add-btn" key={uniqid()} onClick={addNew}>
                +
            </button>
            </div>
        )
    }
}

export default SectionInput;
