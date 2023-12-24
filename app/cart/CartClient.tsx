"use client"

import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import React from 'react'
import { MdArrowBack } from 'react-icons/md';
import Heading from '../components/Heading';
import Button from '../components/Button';
import ItemContent from './ItemContent';


const  CartClient = () => {
    const { cartProducts } = useCart()

    if( !cartProducts || cartProducts.length === 0) {
        return(
            <div className='flex flex-col items-center'>
                <div className='text-2xl'>Your cart is empty</div>
                <div>
                    <Link href={"/"} className='
                    text-slate-500 flex items-center
                     gap-1 mt-2
                    '>
                        <MdArrowBack />
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        )
    }
  return (
    <div >
        <Heading title='Shopping Cart' center />
        {/* title */}
        <div className='grid
        grid-cols-5
        text-xs
        gap-4
        pb-2
        items-center
        mt-8
        '>
            <div className='col-span-2 justify-self-start'>Product</div>
            <div className='justify-self-center'>PRICE</div>
            <div className='justify-self-center'>QUANTITY</div>
            <div className='justify-self-end'>TOTAL</div>
        </div>
        {/* cart info */}
        <div>
            {
                cartProducts && cartProducts.map((item) => {
                    return <ItemContent key={item.id} item={item}></ItemContent>
                })
            }
        </div>

         {/* button clear vs total */}
        <div className='border-t-[1.5px]
        border-slate-200 py-4 flex justify-between gap-4
        '>
            {/* button clear */}
            <div className='w-[90px]'>
                <Button 
                disabled={false} 
                label='Clear Cart' 
                onClick={() => {}} 
                small outline
                />
            </div>
            {/* button total */}
            <div className='text-sm flex flex-col gap-1 items-start'>
                {/* ma qua tang giam gia */}
                <div>Coupon</div>

                <div className='flex justify-between w-full
                text-base font-semibold
                '>
                    <span>Subtotal</span>
                    <span>$1,000</span>
                </div>
                <p className='text-slate-500'>Taxes and shipping calculate at checkout</p>
                <Button 
                disabled={false} 
                label='Check out' 
                onClick={() => {}} 
                />
                <Link href={"/"} className='
                        text-slate-500 flex items-center
                        gap-1 mt-2
                '>
                    <MdArrowBack />
                    <span>Continue Shopping</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CartClient;