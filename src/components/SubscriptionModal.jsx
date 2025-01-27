import React, { useEffect, useState } from "react";
import { URL } from '../url'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const SubscriptionModal = ({ isOpen, onClose, communityId, onVerificationUpdate, children }) => {
  if (!isOpen) return null;

  const navigate = useNavigate()
  const [info, setInfo] = useState({
    subscribed:""
  })
  const [selectedSubscription, setSelectedSubscription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")


  const editSubscription = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")

    const updatedInfo = { 
        subscribed: selectedSubscription === "true"
    }

    try {
      const res = await axios.put(`${URL}/api/users/${communityId}`, updatedInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.data) {
        onClose();
        onVerificationUpdate();
      }
    } catch (error) {
      console.error("failed to subscribe:", error)
      setError("Failed to subscribe. Please try again")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        {children}
        <p className='text-center'>Update Subscription status </p>
        <form onSubmit={editSubscription}>
          <div className="flex flex-col justify-center items-center">
        <select value={selectedSubscription} onChange={(e) => setSelectedSubscription(e.target.value)} className="border border-gray-500 rounded-xl max-w-[140px] mt-2 px-2 py-1">
              <option value="">Update Subscription:</option>
              <option value="true">Subscribe</option>
              <option value="false">Unsubscribe</option>
            </select>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="flex">
        <button 
        type="button"
          onClick={onClose} 
          className="mt-4 border border-red-500 text-red-500 px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button 
        type="submit" disabled={isLoading || !selectedSubscription}
          className="mt-4 ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {isLoading ? "Updating ..." : "Update"}
        </button>
        </div>


        </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionModal;