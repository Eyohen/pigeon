// import React, { useState } from 'react'
// import { HiMiniXMark } from "react-icons/hi2"
// import { IoMdSquareOutline, IoMdSquare } from "react-icons/io"
// import { useNavigate } from 'react-router-dom'
// import { PaystackButton } from 'react-paystack';


// const PaymentModal = ({ isOpen, onClose, title, onConfirm, selectedCollaborations, totalAmount, user }) => {
//     const navigate = useNavigate()
//     const [checkbox, setCheckbox] = useState(false)
//     const [isProcessing, setIsProcessing] = useState(false)

//     const handleToggle = () => {
//         setCheckbox(!checkbox)
//     }

//     const publicKey = "pk_test_ee89f7697399182fa170280789b3f1b945c71bed"  // for paystack

//     const paymentProps = {
//       email:user?.email,
//       amount: totalAmount * 100,
//       publicKey,
//       text:"Make Payment",
//       onClose: () => alert("Are you sure you want to close the payment ? "),
//       onSuccess: (response) => {
//         alert(
//           `Your purchase was successful! Transaction reference: ${response.reference}`
//         );
//         handlePaymentSuccess(response);
//       },
//     }

//     const handlePaymentSuccess = async (response) => {
//         if (!checkbox) {
//             alert("Please agree to the Community Standards and Payment Implications.")
//             return
//         }

//         setIsProcessing(true)
//         try {
//             await onConfirm(response)
//             setIsProcessing(false)
//             onClose()
//             // You might want to navigate to a success page or show a success message here
//         } catch (error) {
//             setIsProcessing(false)
//             alert("Payment failed. Please try again. Please contact support.")
//         }
//     }
    
//     if (!isOpen) return null

//     return (
//         <div id="popup-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
//             <div className='relative h-full w-full flex justify-center items-center bg-slate-500/50'>
//                 <div className="relative p-4 w-full max-w-xl max-h-full">
//                     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                         <button type="button" onClick={onClose} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
//                             <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                             </svg>
//                             <span className="sr-only">Close modal</span>
//                         </button>

//                         <div className='p-6'>
//                             <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                            
//                             <div className="mb-4">
//                                 <h4 className="mb-2 text-lg font-medium">Selected Collaborations:</h4>
//                                 <ul>
//                                     {selectedCollaborations.map((collab, index) => (
//                                         <li key={index}>{collab.title} - {collab.currency}{collab.amount}</li>
//                                     ))}
//                                 </ul>
//                                 <p className="mt-2 font-bold">Total: {totalAmount}</p>
//                             </div>

//                             <div className='flex gap-x-4'>
//                                 <input 
//                                     type='checkbox' 
//                                     checked={checkbox} 
//                                     onChange={handleToggle}  
//                                     className="mt-1 appearance-none rounded-sm w-[120px] h-3 bg-transparent focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  
//                                 />
//                                 <p className='font-light text-sm'>
//                                     I Agree to the Community Standards and Payment Implications. By checking this box, I acknowledge and agree that I will not engage in, promote, or distribute any form of explicit content, including but not limited to pornography, graphic violence, hate speech, or illegal activities through our community owners. I understand that such actions are strictly prohibited on this platform and that violating these standards may result in the suspension or termination of my account and the forfeiture of any payments made to community owners. I commit to upholding the values of respect, inclusivity, and safety within the community, fully aware that non-compliance will directly impact my financial transactions on this platform.
//                                 </p>
//                             </div>

//                             <div className='items-center justify-center flex mt-6'>
//                                 <PaystackButton
//                                     {...paymentProps} 
//                                     // onClick={handlePayment} 
//                                     disabled={isProcessing || !checkbox}
//                                     className={`${
//                                         isProcessing || !checkbox ? 'bg-gray-300 text-gray-500' : 'bg-[#F08E1F] text-white'
//                                     } rounded-full px-9 py-2 mt-2`}
//                                 >
//                                     {isProcessing ? 'Processing...' : 'Make Payment'}
//                                 </PaystackButton>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PaymentModal

import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { Elements } from '@stripe/react-stripe-js';
import StripePaymentForm from './StripePaymentForm'; // We'll create this component next

const PaymentModal = ({ isOpen, onClose, title, onConfirm, selectedCollaborations, totalAmount, currency, user, stripePromise }) => {
    const [checkbox, setCheckbox] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleToggle = () => {
        setCheckbox(!checkbox);
    };

    const paystackPublicKey = "pk_test_ee89f7697399182fa170280789b3f1b945c71bed";

    const paystackProps = {
        email: user?.email,
        amount: totalAmount * 100,
        publicKey: paystackPublicKey,
        text: "Make Payment",
        onClose: () => alert("Are you sure you want to close the payment?"),
        onSuccess: (response) => {
            handlePaymentSuccess(response);
        },
    };

    const handlePaymentSuccess = async (response, stripePaymentMethod = null) => {
        if (!checkbox) {
            alert("Please agree to the Community Standards and Payment Implications.");
            return;
        }

        setIsProcessing(true);
        try {
            await onConfirm(response, stripePaymentMethod);
            setIsProcessing(false);
            onClose();
            // You might want to navigate to a success page or show a success message here
        } catch (error) {
            setIsProcessing(false);
            alert("Payment failed. Please try again or contact support.");
        }
    };

    if (!isOpen) return null;

    return (
        <div id="popup-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className='relative h-full w-full flex justify-center items-center bg-slate-500/50'>
                <div className="relative p-4 w-full max-w-xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" onClick={onClose} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className='p-6'>
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                            
                            <div className="mb-4">
                                <h4 className="mb-2 text-lg font-medium">Selected Collaborations:</h4>
                                <ul>
                                    {selectedCollaborations.map((collab, index) => (
                                        <li key={index}>{collab.title} - {collab.currency}{collab.amount}</li>
                                    ))}
                                </ul>
                                <p className="mt-2 font-bold">Total: {currency} {totalAmount}</p>
                            </div>

                            <div className='flex gap-x-4'>
                                <input 
                                    type='checkbox' 
                                    checked={checkbox} 
                                    onChange={handleToggle}  
                                    className="mt-1 appearance-none rounded-sm w-[120px] h-3 bg-transparent focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  
                                />
                                <p className='font-light text-sm'>
                                    I Agree to the Community Standards and Payment Implications. By checking this box, I acknowledge and agree that I will not engage in, promote, or distribute any form of explicit content, including but not limited to pornography, graphic violence, hate speech, or illegal activities through our community owners. I understand that such actions are strictly prohibited on this platform and that violating these standards may result in the suspension or termination of my account and the forfeiture of any payments made to community owners. I commit to upholding the values of respect, inclusivity, and safety within the community, fully aware that non-compliance will directly impact my financial transactions on this platform.
                                </p>
                            </div>

                            <div className='items-center justify-center flex mt-6'>
                                {currency === 'NGN' ? (
                                    <PaystackButton
                                        {...paystackProps} 
                                        disabled={isProcessing || !checkbox}
                                        className={`${
                                            isProcessing || !checkbox ? 'bg-gray-300 text-gray-500' : 'bg-[#F08E1F] text-white'
                                        } rounded-full px-9 py-2 mt-2`}
                                    >
                                        {isProcessing ? 'Processing...' : 'Pay with Paystack'}
                                    </PaystackButton>
                                ) : (
                                    <Elements stripe={stripePromise}>
                                        <StripePaymentForm
                                            isProcessing={isProcessing}
                                            checkbox={checkbox}
                                            onPaymentSuccess={handlePaymentSuccess}
                                        />
                                    </Elements>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;