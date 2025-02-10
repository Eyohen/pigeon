// import React, { useState, useRef, useEffect } from 'react';

// const CustomDropdown = ({ options, value, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleSelect = (option) => {
//     onChange(option);
//     setIsOpen(false);
//   };

//   const selectedOption = options.find(opt => opt.currency === value) || options[0];

//   return (
//     <div className="relative inline-block w-full md:w-[400px]" ref={dropdownRef}>
//       <div
//         className="border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] cursor-pointer flex items-center justify-between"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="flex items-center">
//           {selectedOption.image && <img src={selectedOption.image} alt={selectedOption.currency} className="w-6 h-4 mr-2" />}
//           <span>{selectedOption.currency}</span>
//         </div>
//         <span className="ml-2">▼</span>
//       </div>
//       {isOpen && (
//         <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg">
//           {options.map((option) => (
//             <div
//               key={option.id}
//               className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
//               onClick={() => handleSelect(option.currency)}
//             >
//               {option.image && <img src={option.image} alt={option.currency} className="w-6 h-4 mr-2" />}
//               <span>{option.currency}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;



import React, { useState, useRef, useEffect } from 'react';

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Add useEffect to set default value when component mounts
  useEffect(() => {
    if (!value) {
      onChange(options[0].currency); // Set default to first currency (USD)
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  // Ensure there's always a selected option by falling back to the first option
  const selectedOption = options.find(opt => opt.currency === value) || options[0];

  return (
    <div className="relative inline-block w-full md:w-[400px]" ref={dropdownRef}>
      <div
        className="border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {selectedOption.image && <img src={selectedOption.image} alt={selectedOption.currency} className="w-6 h-4 mr-2" />}
          <span>{selectedOption.currency}</span>
        </div>
        <span className="ml-2">▼</span>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option.id}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => handleSelect(option.currency)}
            >
              {option.image && <img src={option.image} alt={option.currency} className="w-6 h-4 mr-2" />}
              <span>{option.currency}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;