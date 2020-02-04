import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import crownImage from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_FCtux5D1Yrv06uSth9WzIcug';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
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