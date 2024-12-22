// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const StripePaymentForm = ({ isProcessing, checkbox, onPaymentSuccess }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [error, setError] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: elements.getElement(CardElement),
//         });

//         if (error) {
//             setError(error.message);
//         } else {
//             onPaymentSuccess(null, paymentMethod);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement 
//             />
//             {error && <div className="text-red-500 mt-2">{error}</div>}
//             <button
//                 type="submit"
//                 disabled={isProcessing || !checkbox}
//                 className={`${
//                     isProcessing || !checkbox ? 'bg-gray-300 text-gray-500' : 'bg-[#F08E1F] text-white'
//                 } rounded-full px-9 py-2 mt-2`}
//             >
//                 {isProcessing ? 'Processing...' : 'Pay with Stripe'}
//             </button>
//         </form>
//     );
// };

// export default StripePaymentForm;

import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripePaymentForm = ({ isProcessing, checkbox, onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardNumber = elements.getElement(CardNumberElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardNumber,
        });

        if (error) {
            setError(error.message);
        } else {
            onPaymentSuccess(null, paymentMethod);
        }
    };

    const cardElementStyle = {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                </label>
                <CardNumberElement
                    id="cardNumber"
                    options={cardElementStyle}
                    className="w-full p-3 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiration Date
                    </label>
                    <CardExpiryElement
                        id="cardExpiry"
                        options={cardElementStyle}
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                    </label>
                    <CardCvcElement
                        id="cardCvc"
                        options={cardElementStyle}
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <button
                type="submit"
                disabled={isProcessing || !checkbox || !stripe}
                className={`${
                    isProcessing || !checkbox || !stripe ? 'bg-gray-300 text-gray-500' : 'bg-[#F08E1F] text-white'
                } rounded-full px-9 py-2 mt-4 w-full`}
            >
                {isProcessing ? 'Processing...' : 'Pay with Stripe'}
            </button>
        </form>
    );
};

export default StripePaymentForm;