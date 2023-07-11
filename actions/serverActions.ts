"use server";

import {revalidateTag} from "next/cache";
import {Product} from "@/typings";

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get('product')?.toString();
  const price = e.get('price')?.toString();

  if(!product || !price) return;

  const newProduct: Product = {
    product: product,
    price: price,
  };

  await fetch('https://64ad4d51b470006a5ec5b8ea.mockapi.io/products', {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  revalidateTag('products')
}
