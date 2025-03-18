import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import main from "../styles/main.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

export interface recipeType {
    id: string;
    name: string;
    category: string;
    instruction: string;
    image: string;
    ingredients: string;
}

const index = () => {
    const [recipes, setRecipes] = useState<recipeType[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        const getRecipes = async () => {
            const serverRecipes = await fetchRecipes();
            setRecipes(serverRecipes);
        };

        getRecipes();
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };
    const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const fetchRecipes = async (): Promise<recipeType[]> => {
        const response = await fetch("/db.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();

        // Explicitly access the 'recipes' property
        if (!Array.isArray(data.recipes)) {
            throw new Error("Expected an array of recipes.");
        }

        return data.recipes;
    };

    return (
        <div className={main.container}>
            <Head>
                <title>Taste of India | Home</title>
            </Head>
            <Header onSearch={handleSearch} />
            <Hero />
            <div className={main.bodyContainer}>
                <Body serverRecipes={filteredRecipes} />
            </div>
            <Footer />
        </div>
    );
};

export default index;
