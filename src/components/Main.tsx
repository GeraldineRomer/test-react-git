import React from 'react'
import '../styles/Main.css';
import { FaHamburger } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa6";
import { TbMeat } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaChildReaching } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

export default function Main() {
  return (
    <main className='main'>
        <aside className='main__aside'>
            <div className='main__aside__sections'>
                <FaClock />
                Bocados Salvajes
            </div>
            <div className='main__aside__sections'>
                <FaHamburger />
                Sabana Burguer
            </div>
            <div className='main__aside__sections'>
                <FaHotdog />
                Hot Dogs
            </div>
            <div className='main__aside__sections'>
                <TbMeat />
                Cacería Africana
            </div>
            <div className='main__aside__sections'>
                <RiDrinks2Fill />
                Bebidas
            </div>
            <div className='main__aside__sections'>
                <IoMdAdd />
                Mochila de adiciones
            </div>
            <div className='main__aside__sections'>
                <FaChildReaching />
                Menú Zafaritos
            </div>
        </aside>
        <section className='main__products'></section>
    </main>
  )
}

