import React from 'react'
import CategoryCard from './categoryCard'

export default function CategoryComponent({children,allCategory}) {
    return (
        <>
            <div className="container-fluid pt-5">
                {children}
                <div className="row px-xl-5 pb-3">
                   {allCategory && allCategory.map((item,idx)=>(<CategoryCard data={item} key={idx}/>))}
                </div>
            </div>
        </>
    )
}
