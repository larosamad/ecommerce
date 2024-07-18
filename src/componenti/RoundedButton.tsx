import "../css/RoundedButton.css";
export interface RoundedButtonProps{
    icon?: string;
    label: string;
    className?: string;
    style?: string;
    onClick: () => void;
}
//props sta per proprietà
export default function RoundedButton(
    { icon, label, onClick }: RoundedButtonProps = { 
        icon: "",
        label: "", 
        style: "",
        className: "",
        onClick: () => {} 
    }
) {
    return(
        <button
        style ={{ borderRadius: "10px"}}
        onClick= {(e) =>{
            e.preventDefault();//previene il comportamento predefinito di un evento
            onClick();
        }}
        >
            {icon && <img src={icon} alt="icon" />}
            {label && <p>{label}</p>}
        </button>
    );
}