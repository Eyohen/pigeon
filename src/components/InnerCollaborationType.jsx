// import React, { useState, useEffect } from 'react';
// import Navbar2 from './Navbar2';
// import { IoChevronForward } from "react-icons/io5";
// import { useNavigate, useParams } from 'react-router-dom';
// import PaymentModal from './PaymentModal';
// import { URL } from "../url";
// import axios from "axios";
// import CollaborationCard from './CollaborationCard';
// import { useAuth } from '../context/AuthContext';
// import toast, { Toaster } from "react-hot-toast";
// import { PaystackButton } from 'react-paystack';

// const InnerCollaborationType = () => {
//     const { id: communityId } = useParams();
//     const { user } = useAuth();
//     const [community, setCommunity] = useState([]);
//     const [selectedCollaborations, setSelectedCollaborations] = useState({});
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const navigate = useNavigate();

//     const userId = user?.id;


    

//     // Fetch the community data
//     const fetchCommunity = async () => {
//         try {
//             const res = await axios.get(`${URL}/api/communities/${communityId}`);
//             setCommunity(res.data);
//         } catch (err) {
//             console.error("Error fetching community:", err);
//         }
//     };

//     useEffect(() => {
//         fetchCommunity();
//     }, [communityId]);

//     console.log("check comunity name", community.name)

//     const name = community?.name

//     console.log('collaboration types',community?.collaborationTypes)

//     const handleCollaborationSelection = (collaborationId, isSelected, collaborationData) => {
//       console.log("check is selected",isSelected)
//       console.log("check is collaborationId",collaborationId)

//         setSelectedCollaborations(prev => ({
//             ...prev,
//             [collaborationId]: isSelected ? collaborationData : null
      
//         }));
//     };


//     // Prepare selected purchases and send to backend
//     const handleMakePayment = async (paystackResponse) => {
//         const selectedCollaborationIds = Object.keys(selectedCollaborations).filter(id => selectedCollaborations[id]);

//         if (selectedCollaborationIds.length === 0) {
//             alert("Please select at least one collaboration type.");
//             return;
//         }

//         try {
//             const purchases = selectedCollaborationIds.map(id => {
//               const collaborationData = selectedCollaborations[id];
//               console.log("collaborationData",collaborationData)
//                 if (!collaborationData) {
//                     throw new Error(`Collaboration data with id ${id} not found`);
//                 }
//                 return {
//                     title: collaborationData.title,
//                     amount: parseFloat(collaborationData.amount),
//                     currency: collaborationData.currency,
//                     userId: user?.id,
//                     email: user?.email,
//                     firstName: user?.fname,
//                     communityId: communityId,
//                     communityName:community?.name,
//                     collaborationTypeId: collaborationData.id,
//                     paystackReference: paystackResponse.reference,
//                 };
//             });

//             const response = await axios.post(`${URL}/api/purchases/create`, {purchases});
//             console.log("Purchase successful", response.data);
//             toast.success('Purchase is Successful', { duration: 5000 });
//             setIsModalOpen(false);
//         } catch (error) {
//             console.error("Error making purchase:", error);
//             toast.error(`Failed to complete purchase: ${error.response?.data?.message || error.message}`);
//         }
//     };

//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//     // const getSelectedCollaborations = () => {
//     //     return community.collaborationTypes?.filter(collab => selectedCollaborations[collab.id]) || [];
//     // };

//     // const getTotalAmount = () => {
//     //     const selected = getSelectedCollaborations();
//     //     return selected?.reduce((total, collab) => total + parseFloat(collab.amount), 0).toFixed(2);
//     // };

//     const getSelectedCollaborations = () => {
//       return Object.values(selectedCollaborations).filter(Boolean)
//     }
  
//     const getTotalAmount = () => {
//       return getSelectedCollaborations()
//         .reduce((total, collab) => total + parseFloat(collab.amount), 0)
//         .toFixed(2)
//     }

    
  
  

//     return (
//         <div className='flex-1 ml-[300px]'>
//             <Navbar2 />

//             <div className='flex gap-x-4 ml-12 mt-9 items-center'>
//                 <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-2)}>Community Owners</p>
//                 <IoChevronForward />
//                 <p className='font-semibold cursor-pointer' onClick={() => navigate(-1)}>{community?.name}</p>
//                 <IoChevronForward />
//                 <p className='font-semibold cursor-pointer'>Collaboration Type</p>
//             </div>

//             <Toaster position="top-right" reverseOrder={false} />

//             <div className='max-w-[1000px] px-12 mt-12'>
//                 {community.collaborationTypes && community.collaborationTypes.length > 0 ? (
//                     community.collaborationTypes.map(collab => (
//                         <CollaborationCard
//                             key={collab.id}
//                             collaboration={collab}
//                             onSelect={(id, title, isSelected) => handleCollaborationSelection(id,title, isSelected)}
//                         />
//                     ))
//                 ) : (
//                     <p>No collaboration types available for this community.</p>
//                 )}

//                 <div className='items-center justify-center flex'>
//                     <button
//                         onClick={openModal}
//                         disabled={getSelectedCollaborations().length === 0}
//                         className='bg-[#F08E1F] text-white rounded-full px-9 py-1 mt-9'>
//                         Make Payment
//                     </button>
//                 </div>

//                 <PaymentModal
//                     isOpen={isModalOpen}
//                     onClose={closeModal}
//                     title="Confirm Purchase"
//                     onConfirm={handleMakePayment}
//                     selectedCollaborations={getSelectedCollaborations()}
//                     totalAmount={getTotalAmount()}
//                     user={user}
//                 />
//             </div>
//         </div>
//     );
// };

// export default InnerCollaborationType;


import React, { useState, useEffect } from 'react';
import Navbar2 from './Navbar2';
import { IoChevronForward } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import { URL } from "../url";
import axios from "axios";
import CollaborationCard from './CollaborationCard';
import { useAuth } from '../context/AuthContext';
import toast, { Toaster } from "react-hot-toast";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51J6dZPLnBj8YUXzDOLUhSZppPz2baeIKxysc1Eq8wqSu853eZpfWuolK7ddJr54TyV8L1ZuBgOlaZZ6tXCuEZmuZ00bUZZZ9hE');

const InnerCollaborationType = () => {
    const { id: communityId } = useParams();
    const { user } = useAuth();
    const [community, setCommunity] = useState([]);
    const [selectedCollaborations, setSelectedCollaborations] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const userId = user?.id;

    // Fetch the community data
    const fetchCommunity = async () => {
        try {
            const res = await axios.get(`${URL}/api/communities/${communityId}`);
            setCommunity(res.data);
        } catch (err) {
            console.error("Error fetching community:", err);
        }
    };

    useEffect(() => {
        fetchCommunity();
    }, [communityId]);

    const handleCollaborationSelection = (collaborationId, isSelected, collaborationData) => {
        setSelectedCollaborations(prev => ({
            ...prev,
            [collaborationId]: isSelected ? collaborationData : null
        }));
    };

    const handleMakePayment = async (paystackResponse, stripePaymentMethod) => {
        const selectedCollaborationIds = Object.keys(selectedCollaborations).filter(id => selectedCollaborations[id]);

        if (selectedCollaborationIds.length === 0) {
            alert("Please select at least one collaboration type.");
            return;
        }

        try {
            const purchases = selectedCollaborationIds.map(id => {
                const collaborationData = selectedCollaborations[id];
                if (!collaborationData) {
                    throw new Error(`Collaboration data with id ${id} not found`);
                }
                return {
                    title: collaborationData.title,
                    amount: parseFloat(collaborationData.amount),
                    currency: collaborationData.currency,
                    userId: user?.id,
                    email: user?.email,
                    firstName: user?.fname,
                    communityId: communityId,
                    communityName: community?.name,
                    collaborationTypeId: collaborationData.id,
                    paystackReference: paystackResponse?.reference,
                    stripePaymentMethodId: stripePaymentMethod?.id,
                };
            });

            const response = await axios.post(`${URL}/api/purchases/create`, { purchases });
            console.log("Purchase successful", response.data);
            toast.success('Purchase is Successful', { duration: 5000 });
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error making purchase:", error);
            toast.error(`Failed to complete purchase: ${error.response?.data?.message || error.message}`);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const getSelectedCollaborations = () => {
        return Object.values(selectedCollaborations).filter(Boolean);
    };

    const getTotalAmount = () => {
        return getSelectedCollaborations()
            .reduce((total, collab) => total + parseFloat(collab.amount), 0)
            .toFixed(2);
    };

    const getCurrency = () => {
        const selectedCollabs = getSelectedCollaborations();
        return selectedCollabs.length > 0 ? selectedCollabs[0].currency : 'NGN';
    };

    return (
        <div className='flex-1 ml-[300px]'>
            <Navbar2 />

            <div className='flex gap-x-4 ml-12 mt-9 items-center'>
                <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-2)}>Community Owners</p>
                <IoChevronForward />
                <p className='font-semibold cursor-pointer' onClick={() => navigate(-1)}>{community?.name}</p>
                <IoChevronForward />
                <p className='font-semibold cursor-pointer'>Collaboration Type</p>
            </div>

            <Toaster position="top-right" reverseOrder={false} />

            <div className='max-w-[1000px] px-12 mt-12'>
                {community.collaborationTypes && community.collaborationTypes.length > 0 ? (
                    community.collaborationTypes.map(collab => (
                        <CollaborationCard
                            key={collab.id}
                            collaboration={collab}
                            onSelect={(id, title, isSelected) => handleCollaborationSelection(id, title, isSelected)}
                        />
                    ))
                ) : (
                    <p>No collaboration types available for this community.</p>
                )}

                <div className='items-center justify-center flex'>
                    <button
                        onClick={openModal}
                        disabled={getSelectedCollaborations().length === 0}
                        className='bg-[#F08E1F] text-white rounded-full px-9 py-1 mt-9'>
                        Make Payment
                    </button>
                </div>

                <PaymentModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title="Confirm Purchase"
                    onConfirm={handleMakePayment}
                    selectedCollaborations={getSelectedCollaborations()}
                    totalAmount={getTotalAmount()}
                    currency={getCurrency()}
                    user={user}
                    stripePromise={stripePromise}
                />
            </div>
        </div>
    );
};

export default InnerCollaborationType;