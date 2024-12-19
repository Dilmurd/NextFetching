import React from 'react'
import "./page.scss"

async function Detail({params}) {
  const data = await fetch(`https://dummyjson.com/products/${params.id}`)
  const posts = await data.json()
  return (
    <main>
      <section className="pro">
        <div className="container">
          <div className="pro__wrapper">
            <div className='pro__img'>
              <img src={posts?.thumbnail} alt="" />
            </div>
            <div className="pro__text">
              <h2>{posts?.title}</h2>
              <p>{posts?.description}</p>
              <p>{posts?.price}$</p>
              <div>
              <button>-</button>
              <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Detail