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
import Dog from "../assets/productPhotos/classic-hot-dog-with-ketchup-mustard-sauce-isolated-white-background.jpg"
import Elephant from "../assets/productPhotos/hand-with-cooked-meat.jpg"
import About from './About';
interface Product {
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    name: "Cebra caramelizada",
    image: Hamb,
    description: "Deliciosa hamburguesa de cebolla caramelizada."
  },
  {
    name: "Cachorro salvaje",
    image: Dog,
    description: "perro caliente"
  },
  {
    name: "Costifante",
    image: Elephant,
    description: "Costilla de cerda asada en salsa BBQ de maracuyá"
  }
];

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
        <section className='main__products'>
          {products.map((product, index) => (
            <ProductCard key={index} image={product.image} description={product.description} />
          ))}
        </section>
    </main>
  );
}
