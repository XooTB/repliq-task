import ProductCard from "@/components/ProductCard";
import shoesList from "@/constants/shoes";

export default function Home() {
  return (
    <div className="min-h-screen px-20 py-5">
      <h1 className="text-3xl font-medium pt-3">
        Buy your favorite shoes at the best price.
      </h1>
      <p className="pb-10 text-sm text-gray-500">
        Browse from our extensive collection and chose the shoes that you
        prefer, all in your choice of colors and size!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {shoesList.map((shoe, i) => (
          <ProductCard key={i} product={shoe} />
        ))}
      </div>
    </div>
  );
}
