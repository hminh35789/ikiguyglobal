"use client";

import Container from '@/app/components/Container';
import { product } from '@/utils/product';
import { useRouter } from 'next/navigation';
import React from 'react'
import ProductDetails from './ProductDetails';
import ListRating from '../ListRating';
interface IPrams {
    productId?: string;
}

const  Product = ({ params } : {params: IPrams}) => {
    console.log('parmas', params);
    const router = useRouter();
   
  return (
    <div className='p-8'>
        <Container>
          <div className='font-semibold text-lg cursor-alias' onClick= {() => router.back()}>Back</div>
          <ProductDetails product= {product} />
          <div className='flex flex-col mt-20 gap-4'>
            <div>Add Rating</div>
            <ListRating product={product} />
          </div>
        </Container>
        
            
    </div>
  )
}

export default Product;