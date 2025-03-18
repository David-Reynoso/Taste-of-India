import main from "../../styles/main.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { recipeType } from "../index";

interface BodyProps {
    serverRecipes?: recipeType[]; // Make it optional
}

const Body: React.FC<BodyProps> = ({ serverRecipes = [] }) => {
    return (
        <>
            {serverRecipes.length > 0 ? (
                serverRecipes.map((recipe) => (
                    <Link
                        key={recipe.id}
                        href={{
                            pathname: "/details",
                            query: {
                                id: recipe.id,
                            },
                        }}
                        passHref
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div className={main.recipeDivs}>
                            <div className={main.recipeThumbnailholder}>
                                <Image className={main.recipeThumbnailimage} src={recipe.image} width={500} height={500} alt="Food Thumbnail" />
                            </div>
                            <div className={main.thumbnailContent}>
                                <h4 className={main.recipeCategory}>{recipe.category}</h4>
                                <h2 className={main.recipeName}>{recipe.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No recipes available</p>
            )}
        </>
    );
};

export default Body;
