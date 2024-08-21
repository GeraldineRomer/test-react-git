import '../styles/Main.css';
import ProductCard from './ProductCard';

export default function Main() {
  return (
    <main className='main'>
        <aside className='main__aside'>Categorías</aside>
        <section className='main__products'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </section>
    </main>
  )
}

