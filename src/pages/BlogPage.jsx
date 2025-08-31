// import React from 'react';
// import axios from 'axios';
// import { URL } from '../url';
// import { useAuth } from '../context/AuthContext';

// const BlogPage = () => {
//   const handleCreatePost = () => {
//     // Handle create new post functionality
//     console.log('Create New Post clicked');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
//       {/* Illustration */}
//       <div className="mb-8">
//         <div className="relative">
//           {/* Background elements */}
//           <div className="absolute -top-4 left-12 w-3 h-3 bg-gray-300 rounded-full opacity-60"></div>
//           <div className="absolute -top-8 right-16 w-2 h-2 bg-gray-300 rounded-full opacity-40"></div>
//           <div className="absolute top-2 -left-2 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-50"></div>
//           <div className="absolute bottom-12 -right-4 w-2.5 h-2.5 bg-gray-300 rounded-full opacity-30"></div>
//           <div className="absolute -bottom-2 left-8 w-2 h-2 bg-gray-300 rounded-full opacity-40"></div>

//           {/* Main illustration container */}
//           <div className="w-48 h-48 relative flex items-center justify-center">
//             {/* Background subtle circle */}
//             <div className="absolute w-32 h-32 bg-gray-100 rounded-full opacity-50"></div>
            
//             {/* Megaphone/Speaker illustration */}
//             <div className="relative z-10">
//               {/* Megaphone body */}
//               <div className="relative">
//                 {/* Main cone */}
//                 <div className="w-16 h-12 bg-orange-500 relative transform rotate-12">
//                   {/* Cone shape using clip-path effect with borders */}
//                   <div className="w-full h-full bg-orange-500 transform skew-x-12 origin-left"></div>
//                 </div>
                
//                 {/* Handle */}
//                 <div className="absolute -bottom-2 left-2 w-6 h-3 bg-orange-600 rounded transform rotate-12"></div>
                
//                 {/* Sound waves */}
//                 <div className="absolute -right-8 top-0">
//                   <div className="w-4 h-1 bg-orange-300 rounded-full mb-1 animate-pulse"></div>
//                   <div className="w-6 h-1 bg-orange-300 rounded-full mb-1 animate-pulse delay-100"></div>
//                   <div className="w-8 h-1 bg-orange-300 rounded-full mb-1 animate-pulse delay-200"></div>
//                   <div className="w-6 h-1 bg-orange-300 rounded-full mb-1 animate-pulse delay-300"></div>
//                   <div className="w-4 h-1 bg-orange-300 rounded-full animate-pulse delay-400"></div>
//                 </div>

//                 {/* Alternative simpler megaphone */}
//                 <div className="absolute top-0 left-0">
//                   {/* Cone */}
//                   <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-12 border-b-orange-500 transform rotate-45 translate-x-4 translate-y-2"></div>
                  
//                   {/* Body */}
//                   <div className="w-12 h-8 bg-orange-500 rounded-lg transform rotate-12 translate-x-2 translate-y-1 flex items-center justify-center">
//                     <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
//                   </div>
                  
//                   {/* Handle */}
//                   <div className="w-3 h-6 bg-orange-600 rounded transform rotate-12 translate-x-1 -translate-y-1"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating elements */}
//             <div className="absolute top-8 right-12 w-3 h-3 bg-orange-200 rounded transform rotate-45 animate-bounce"></div>
//             <div className="absolute bottom-8 left-16 w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
//           </div>
//         </div>
//       </div>

//       {/* Empty State Text */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">
//           No Blog Post Yet
//         </h2>
//         <p className="text-gray-600">
//           No blog content found. Start by adding a new post
//         </p>
//       </div>

//       {/* Create New Post Button */}
//       <button
//         onClick={handleCreatePost}
//         className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//       >
//         Create New Post
//       </button>
//     </div>
//   );
// };

// export default BlogPage;





import React, { useState, useEffect } from 'react';
import { Search, Download, MoreHorizontal, ChevronLeft, ChevronRight, Plus, Edit, Trash2, Eye } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';
import CreateBlogModal from '../components/CreateBlogModal';
import EditBlogModal from '../components/EditBlogModal';
import ViewBlogModal from '../components/ViewBlogModal';

const BlogPage = () => {
  const { token } = useAuth();
  const [selectedBlogs, setSelectedBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(6);
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Modal states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, resultsPerPage, searchTerm, token]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${URL}/api/posts`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      let blogData = response.data || [];
      
      // Apply search filter
      if (searchTerm) {
        blogData = blogData.filter(blog => 
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.heading.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Apply pagination
      const startIndex = (currentPage - 1) * resultsPerPage;
      const endIndex = startIndex + resultsPerPage;
      const paginatedBlogs = blogData.slice(startIndex, endIndex);
      
      setBlogs(paginatedBlogs);
      setTotalPages(Math.ceil(blogData.length / resultsPerPage));
      setError(null);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSuccess = () => {
    fetchBlogs();
    setShowCreateModal(false);
  };

  const handleEditSuccess = () => {
    fetchBlogs();
    setShowEditModal(false);
    setSelectedBlog(null);
  };

  const handleEditClick = (blog) => {
    setSelectedBlog(blog);
    setShowEditModal(true);
  };

  const handleViewClick = (blog) => {
    setSelectedBlog(blog);
    setShowViewModal(true);
  };

  const handleDeleteClick = async (blogId, blogTitle) => {
    if (window.confirm(`Are you sure you want to delete "${blogTitle}"? This action cannot be undone.`)) {
      try {
        await axios.delete(`${URL}/api/posts/${blogId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete blog post');
      }
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedBlogs(blogs.map((_, index) => index));
    } else {
      setSelectedBlogs([]);
    }
  };

  const handleSelectBlog = (index) => {
    if (selectedBlogs.includes(index)) {
      setSelectedBlogs(selectedBlogs.filter(i => i !== index));
    } else {
      setSelectedBlogs([...selectedBlogs, index]);
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Title', 'Heading', 'Has Image', 'Created At'];
    const csvData = blogs.map(blog => [
      blog.id,
      blog.title,
      blog.heading,
      blog.imageUrl ? 'Yes' : 'No',
      new Date(blog.createdAt).toLocaleDateString()
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blog-posts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateText = (text, maxLength = 100) => {
    if (!text) return 'No content';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={exportToCSV}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <Download className="w-4 h-4" />
            <span>CSV</span>
          </button>
          
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create Post</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-red-800">{error}</div>
          <button 
            onClick={fetchBlogs}
            className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-12 px-6 py-4">
                <input
                  type="checkbox"
                  checked={selectedBlogs.length === blogs.length && blogs.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Heading
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Content Preview
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="text-center px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              Array.from({ length: resultsPerPage }).map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-4 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-16 w-20 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-24 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-8 w-40 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-20 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-16 rounded"></div>
                  </td>
                </tr>
              ))
            ) : blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedBlogs.includes(index)}
                      onChange={() => handleSelectBlog(index)}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    {blog.imageUrl ? (
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="h-16 w-20 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="h-16 w-20 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No image</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 max-w-xs">
                      {truncateText(blog.title, 50)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700 max-w-xs">
                      {truncateText(blog.heading, 40)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 max-w-sm">
                      {truncateText(blog.text, 80)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatDate(blog.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleViewClick(blog)}
                        className="text-blue-600 hover:text-blue-900"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditClick(blog)}
                        className="text-orange-600 hover:text-orange-900"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(blog.id, blog.title)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                  No blog posts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Show result:</span>
          <select
            value={resultsPerPage}
            onChange={(e) => setResultsPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={currentPage === 1 || loading}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded ${
                currentPage === page
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              disabled={loading}
            >
              {page}
            </button>
          ))}
          
          {totalPages > 5 && (
            <>
              <span className="px-2 text-gray-500">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`w-8 h-8 rounded ${
                  currentPage === totalPages
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                disabled={loading}
              >
                {totalPages}
              </button>
            </>
          )}
          
          <button 
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={currentPage === totalPages || loading}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <CreateBlogModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={handleCreateSuccess}
      />

      <EditBlogModal
        isOpen={showEditModal}
        blog={selectedBlog}
        onClose={() => {
          setShowEditModal(false);
          setSelectedBlog(null);
        }}
        onSuccess={handleEditSuccess}
      />

      <ViewBlogModal
        isOpen={showViewModal}
        blog={selectedBlog}
        onClose={() => {
          setShowViewModal(false);
          setSelectedBlog(null);
        }}
      />
    </>
  );
};

export default BlogPage;