import React, { useEffect, useState } from "react";
import { URL } from '../url'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

// const verification = [
//   {
//     id:1,
//     verified:true,
//     name:"Verify"
//   },
//   {
//     id:1,
//     verified:false,
//     name:"Unverify"
//   }
// ]
const VerifyModal = ({ isOpen, onClose, communityId, onVerificationUpdate, children }) => {
  if (!isOpen) return null;

  const navigate = useNavigate()
  // const {id: communityId } = useParams()
  const [info, setInfo] = useState({
    verified:""
  })
  const [selectedVerified, setSelectedVerified] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")


  const editVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")

    const updatedInfo = { 
      verified: selectedVerified === "true"
    }

    try {
      const res = await axios.put(`${URL}/api/communities/${communityId}`, updatedInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.data) {
        onClose();
        onVerificationUpdate();
      }
    } catch (error) {
      console.error("failed to verify:", error)
      setError("Failed to verify. Please try again")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        {children}
        <p className='text-center'>Update Verification status </p>
        <form onSubmit={editVerify}>
          <div className="flex flex-col justify-center items-center">
        <select value={selectedVerified} onChange={(e) => setSelectedVerified(e.target.value)} className="border border-gray-500 rounded-xl max-w-[140px] mt-2 px-2 py-1">
              <option value="">Verify status:</option>
              <option value="true">Verify</option>
              <option value="false">Unverify</option>
              {/* {verification.map(item => (
                <option key={item.id} value={item.verified}>{item.name}</option>
              ))} */}
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
        type="submit" disabled={isLoading || !selectedVerified}
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

export default VerifyModal;