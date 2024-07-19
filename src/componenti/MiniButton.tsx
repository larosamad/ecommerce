import React from "react";
import "../css/MiniButton.css";

interface MiniButtonProps {
    label: string;
    onClick: () => void;
}

const MiniButton: React.FC<MiniButtonProps> = ({ label, onClick }) => {
    return (
        <button className="mini-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default MiniButton;
