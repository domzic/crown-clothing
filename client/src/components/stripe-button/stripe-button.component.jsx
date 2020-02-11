import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import crownImage from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_FCtux5D1Yrv06uSth9WzIcug';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('payment sccessfu');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was issue with your payment.');
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image={crownImage}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;