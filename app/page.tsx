import { truncateText } from "@/utils/truncateText";
import Container from "./components/Container"
import HomeBanner from "./components/HomeBanner"
import { products } from "@/utils/products"
import ProductCard from "./components/products/ProductCard";


export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div
        className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
        gap-8"
        >
          {products.map(( prodcut: any) =>{
            return <ProductCard data={prodcut} key={prodcut.id} />;
          })}
        </div>
      </Container>
    </div>
  )
}
