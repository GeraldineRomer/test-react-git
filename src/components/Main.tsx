import { useState } from 'react';
import '../styles/Main.css';
import ProductCard from './ProductCard';
import { FaHamburger } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa6";
import { TbMeat } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaChildReaching } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import Hamb from "../assets/productPhotos/sabrosa-hamburguesa-aislada-sobre-fondo-blanco-comida-rapida-hamburguesa-fresca-carne-queso.jpg";
import Dog from "../assets/productPhotos/classic-hot-dog-with-ketchup-mustard-sauce-isolated-white-background.jpg";
import Elephant from "../assets/productPhotos/hand-with-cooked-meat.jpg";
import Cola from "../assets/productPhotos/ice-cola-glass.jpg";
import Papas from "../assets/productPhotos/crispy-french-fries-with-ketchup-mayonnaise.jpg";
import Explorador from "../assets/productPhotos/Captura de pantalla 2024-08-26 215338.png";
import Aventurero from "../assets/productPhotos/slices-sausages-near-bread.jpg";



interface Product {
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
}

const products: Product[] = [
  {
    name: "Cebra caramelizada",
    image: Hamb,
    description: "Deliciosa hamburguesa de cebolla caramelizada.",
    category: "Sabana Burguer",
    price: 33900
  },
  {
    name: "Cachorro",
    image: Dog,
    description: "Perro caliente",
    category: "Hot Dogs",
    price: 18900

  },
  {
    name: "Coca Cola",
    image: Cola,
    description: "Bebida de Cola Gasificada",
    category: "Bebidas",
    price: 5000

  },
  {
    name: "Costifante",
    image: Elephant,
    description: "Costilla de cerda asada en salsa BBQ de maracuyá",
    category: "Cacería Africana",
    price: 45900

  },
  {
    name: "Papas a la Francesa",
    image: Papas,
    description: "Papas a la francesa",
    category: "Mochila de adiciones",
    price: 7900

  },
  {
    name: "Explorador mini",
    image: Explorador,
    description: "Papas a la francesa",
    category: "Menú Zafaritos",
    price: 24900

  },
  {
    name: "Dulce Aventurero",
    image: Aventurero,
    description: "Chorizo de cerdo ahumado",
    category: "Bocados Salvajes",
    price: 18900

  }
];

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <main className='main'>
      <aside className='main__aside'>
        <div className='main__aside__sections' onClick={() => handleCategoryClick('Sabana Burguer')}>
          <FaHamburger />
          Sabana Burguer
        </div>
        <div className='main__aside__sections' onClick={() => handleCategoryClick('Hot Dogs')}>
          <FaHotdog />
          Hot Dogs
        </div>
        <div className='main__aside__sections' onClick={() => handleCategoryClick('Cacería Africana')}>
          <TbMeat />
          Cacería Africana
        </div>
        <div className='main__aside__sections' onClick={() => handleCategoryClick('Bebidas')}>
          <RiDrinks2Fill />
          Bebidas
        </div>
        <div className='main__aside__sections' onClick={() => handleCategoryClick('Mochila de adiciones')}>
          <IoMdAdd />
          Mochila de adiciones
        </div>
        <div className='main__aside__sections' onClick={() => handleCategoryClick('Menú Zafaritos')}>
          <FaChildReaching />
          Menú Zafaritos
        </div>
        <div className='main__aside__sections' onClick={() => handleCategoryClick('Bocados Salvajes')}>
          <FaClock />
          Bocados Salvajes
        </div>
      </aside>
      <section className='main__products'>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} name={product.name} image={product.image} description={product.description} price={product.price} />
        ))}
      </section>
    </main>
  );
}
