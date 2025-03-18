import main from "../../styles/main.module.css";
import Image from "next/image";
import mekusLogo from "../../public/mekusLogo.png";
import React from "react";
import { useState } from "react";

interface HeaderProps {
    onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className={main.navbar}>
            <Image className={main.navbarLogo} src={mekusLogo} alt="Dishcovery logo"></Image>
            <h1 className={main.navbarTitle}>Taste of India: Food Recipes</h1>
            <input type="text" className={main.navbarSearch} value={searchQuery} onChange={inputChange} placeholder="Search recipe here..." />
        </div>
    );
};

export default Header;
