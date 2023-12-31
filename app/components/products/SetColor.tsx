    'use client'

    import { CartProductType, SelectedImgType } from '@/app/product/[productId]/ProductDetails'
    import React from 'react'

    interface SetColorProps {
        images: SelectedImgType[],
        cartProduct: CartProductType,
        handColorSelect: (value: SelectedImgType) => void
    }

    const  SetColor: React.FC<SetColorProps> = ({
        images,
        cartProduct,
        handColorSelect
    }) => {
    return (
        <div>
            <div className='flex gap-4 items-center'>
                <span className='font-semibold'>COLOR:</span>
                <div className='flex gap-1'>
                    {
                        images.map((image) =>{
                            return (
                            <div key={image.color} 
                            onClick={() => handColorSelect(image)}
                            className={`
                            h-7
                            w-7
                            rounded-md
                            border-black
                            flex
                            items-center
                            ${cartProduct.selectedImg.color === image.color   
                                ? 'border-[1.5px]' 
                                : 'border-none'
                            }
                            `}>
                                <div style={{background: image.colorCode}}
                                className='h-6
                                w-6
                                rounded-md
                                border-[1.2px]
                                border-slate-300
                                cursor-pointer
                                ml-[1.1px] 
                                
                                '
                                ></div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
    }

    export default SetColor;