import { useState } from "react"
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cat']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <h2>Busca tus Gif favoritos!</h2>

            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map((category) =>
                (
                    <GifGrid key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}