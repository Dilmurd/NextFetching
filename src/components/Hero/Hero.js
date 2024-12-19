import React from 'react'
import "./Hero.scss"
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';
import watch from "@/assets/watch.png"

async function Hero() {
  const data = await fetch('https://dummyjson.com/products?limit=1')
  const posts = await data.json()
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            {
              posts?.products?.map((item) => (
          <div className='hero__wrapp' key={item.id}>
            <div className="hero__text">
              <p className='hero__title'>{item.title}</p>
              <p className='hero__desc'>{item.description}</p>
              <div className='hero__inps'>
                <IoSearchOutline/>
                <input type="search" placeholder='Find the best brands' />
                <button>Search</button>
              </div>
            </div>
            <div className="hero__img">
              <img src={item.thumbnail} alt="" />
            </div>
          </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero