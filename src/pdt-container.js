import React from 'react';
import './pdt-container.css';


const ProductContainer = () => {

    const image ="https://taxbrick.com/wp-content/uploads/2023/04/PROPRIETORSHIP-FIRM-REGISTRATION-.png.webp";
    const product_name= "Proprietorship Firm Registration";

    return (
        <div>



<div className='main-product-container'>
                <div className='image-container'>
                    <img src= {image} width='350' height='auto' className='product-image' />
                </div>
                <div className='short-desc-container'>
                    <h1 className='product-name'>{product_name}</h1>
                    <h5 className='review-and-rating-heading'> <span className='customers-rating'>4.7</span> <span
                        className='customers-review'>3422 customers</span></h5>
                    <div className='short-line-desc'>
                        Proprietorship firm Registration includes GST and MSME (Udyam
                        Registration).
                    </div>
                    <hr className='' />
                    <div className='box-desc-container'>
                        <div className='short-desc-box1'>
                            <h5 className='short-desc-box-heading'>Services Included</h5>
                            <h5 className='short-desc-box-line'>✔️ GST Registration </h5>
                            <h5 className='short-desc-box-line'>✔️ Udyam Registration (MSME)</h5>
                        </div>
                        <div className='short-desc-box2'>
                            <h5 className='short-desc-box-heading'>Offers & Discounts</h5>
                            <h5 className='short-desc-box-line'>1st Month GST Return Filing</h5>
                            <h5 className='short-desc-box-line'>1st Month GST Invoice</h5>
                            <h5 className='short-desc-box-line'>Open FREE ICICI Current Account</h5>
                            <h5 className='short-desc-box-line'>Get 52% off on Annual Compliance of Proprietorship Firm</h5>
                        </div>
                    </div>
                    <hr className='' />
                    <div className='discount-description'>
                        You will save 50% on the market price. Government fee included.
                    </div>
                    <hr className='' />
                    <p className='price-container'>
                        <span className='discounted-price'>₹4,998</span>
                        <span className='original-price'> ₹2,499</span>
                    </p>
                    <button className='add-to-basket-btn'>Add To Basket</button>








                </div>
            </div>
        </div>
    )
}

export default ProductContainer;