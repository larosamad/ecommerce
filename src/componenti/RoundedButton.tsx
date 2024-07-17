export interface RoundedButtonProps{
    label: string;
    onClick: () => void;
}
//props sta per proprietà
export default function RoundedButton(
    { label, onClick }: RoundedButtonProps = { label: "", onClick: () => {} }
) {
    return(
        <button
        style ={{ borderRadius: "10px"}}
        onClick= {(e) =>{
            e.preventDefault();//previene il comportamento predefinito di un evento
            onClick();
        }}
        >
            {label && <p>{label}</p>}
        </button>
    );
}