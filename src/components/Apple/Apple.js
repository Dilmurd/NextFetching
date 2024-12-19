import React from 'react'
import "./Apple.scss"
import Products from '../Products/Products'

async function Apple() {
    const data = await fetch('https://dummyjson.com/products?limit=32')
    const posts = await data.json()
  return (
    <main>
        <section className="apple">
            <div className="container">
             <Products data={posts}/>
            </div>
        </section>
    </main>
  )
}

export default Apple