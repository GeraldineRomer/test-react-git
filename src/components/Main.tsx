import '../styles/Main.css';
import ProductCard from './ProductCard';
import Hamb from "../assets/productPhotos/sabrosa-hamburguesa-aislada-sobre-fondo-blanco-comida-rapida-hamburguesa-fresca-carne-queso.jpg";
import Dog from "../assets/productPhotos/classic-hot-dog-with-ketchup-mustard-sauce-isolated-white-background.jpg"
import Elephant from "../assets/productPhotos/hand-with-cooked-meat.jpg"
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
      <aside className='main__aside'>Categorías</aside>
      <section className='main__products'>
        {products.map((product, index) => (
          <ProductCard key={index} image={product.image} description={product.description} />
        ))}
      </section>
    </main>
  );
}
