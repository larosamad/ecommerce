import "../css/RoundedButton.css";
export interface RoundedButtonProps{
    icon?: string;
    label: string;
    className?: string;
    style?: string;
    type?: string;
    onClick: () => void;
}
//props sta per proprietà
export default function RoundedButton(
    { icon, label, onClick }: RoundedButtonProps = { 
        icon: "",
        label: "", 
        style: "",
        className: "",
        type: "",
        onClick: () => {} 
    }
) {
    return(
        <button
        style ={{ borderRadius: "10px"}}
        onClick= {(e) =>{
            e.preventDefault();
            onClick();
        }}
        >
            {icon && <img src={icon} alt="icon" />}
            {label && <p>{label}</p>}
        </button>
    );
}