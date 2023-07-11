import Image from 'next/image'

export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default async function Home() {
  const res = await fetch('https://64ad4d51b470006a5ec5b8ea.mockapi.io/products', {
    cache: 'no-cache'
  });

  const products: Product[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Product Warehouse</h1>
      <form action="" className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input placeholder={'Product name'} type="text" className="border border-gray-300 p-2 rounded-md"/>
        <input placeholder={'Price tag'} type="text" className="border border-gray-300 p-2 rounded-md"/>
        <button className="border bg-blue-500 text-white p-2 rounded-md">Add Product</button>
      </form>

      <h2 className="font-bold px-16">List of products</h2>
      <div className="flex flex-wrap gap-5 p-10">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>EUR ${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
