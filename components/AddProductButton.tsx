"use client";

import React, {useTransition} from 'react';
import {addProductToDatabase} from "@/actions/serverActions";

const AddProductButton = ({}) => {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append('product', 'Rokas');
  formData.append('price', '1299.99');

  return (
    <button
      onClick={() => startTransition(() => addProductToDatabase(formData))}
      className="border bg-blue-500 text-white p-2 rounded-md">
      {isPending ? 'Adding...' : 'Add Product'}
    </button>
  );
};

export default AddProductButton;
// by Rokas with ❤️
