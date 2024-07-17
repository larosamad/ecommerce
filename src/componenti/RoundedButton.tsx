export interface RoundedButtonProps{
    label: string;
    onClick: () => void;
}

export default function RoundedButton(
    { label, onClick }: RoundedButtonProps = { label: "", onClick: () => {} }
) {
    return(
        <button
        style ={{ borderRadius: "10px"}}
        onClick= {(e) =>{
            e.preventDefault();
            onClick();
        }}
        >
            {label && <p>{label}</p>}
        </button>
    );
}