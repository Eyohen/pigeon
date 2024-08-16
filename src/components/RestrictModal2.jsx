import React, { useEffect, useState } from "react";
import { URL } from '../url'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const RestrictModal2 = ({ isOpen, onClose, communityId, onRestrictionUpdate, children }) => {
  if (!isOpen) return null;

  const navigate = useNavigate()
  const [info, setInfo] = useState({
    restrict:""
  })
  const [selectedRestriction, setSelectedRestriction] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")


  const editRestriction = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")

    const updatedInfo = { 
      restrict: selectedRestriction === "true"
    }

    try {
      const res = await axios.put(`${URL}/api/visible/restrict/${communityId}`, updatedInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.data) {
        onClose();
        onRestrictionUpdate();
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
        <p className='text-center'>Update Restriction status </p>
        <form onSubmit={editRestriction}>
          <div className="flex flex-col justify-center items-center">
        <select value={selectedRestriction} onChange={(e) => setSelectedRestriction(e.target.value)} className="border border-gray-500 rounded-xl max-w-[140px] mt-2 px-2 py-1">
              <option value="">Restrict:</option>
              <option value="true">Restrict</option>
              <option value="false">UnRestrict</option>
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
        type="submit" disabled={isLoading || !selectedRestriction}
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

export default RestrictModal2;