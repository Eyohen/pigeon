import React, { useState, useEffect } from 'react';
import { X, FileText, Upload, Image } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const EditBlogModal = ({ isOpen, blog, onClose, onSuccess }) => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    heading: '',
    text: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [removeCurrentImage, setRemoveCurrentImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (blog && isOpen) {
      setFormData({
        title: blog.title || '',
        heading: blog.heading || '',
        text: blog.text || ''
      });
      setCurrentImage(blog.imageUrl || null);
      setImagePreview(null);
      setSelectedFile(null);
      setRemoveCurrentImage(false);
      setError('');
    }
  }, [blog, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        setError('Please select a valid image file (JPEG, PNG, GIF, or WebP)');
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB');
        return;
      }

      setSelectedFile(file);
      setRemoveCurrentImage(false);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      
      if (error) setError('');
    }
  };

  const removeNewImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
    // Reset file input
    const fileInput = document.getElementById('image-upload-edit');
    if (fileInput) fileInput.value = '';
  };

  const removeExistingImage = () => {
    setRemoveCurrentImage(true);
    setCurrentImage(null);
  };

  const restoreExistingImage = () => {
    setRemoveCurrentImage(false);
    setCurrentImage(blog?.imageUrl || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.title.trim() || !formData.heading.trim()) {
      setError('Title and heading are required');
      setLoading(false);
      return;
    }

    try {
      // For updates, we'll use JSON data instead of FormData since your backend update doesn't handle file uploads
      const updateData = {
        title: formData.title.trim(),
        heading: formData.heading.trim(),
        text: formData.text.trim()
      };

      // If removing current image
      if (removeCurrentImage) {
        updateData.imageUrl = '';
      }

      const response = await axios.put(`${URL}/api/posts/${blog.id}`, updateData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data) {
        onSuccess && onSuccess(response.data);
        onClose();
      }
    } catch (error) {
      console.error('Error updating blog post:', error);
      setError(error.response?.data?.msg || 'Failed to update blog post');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !blog) return null;

  const displayImage = imagePreview || (currentImage && !removeCurrentImage ? currentImage : null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <FileText className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl font-semibold text-gray-900">Edit Blog Post</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            disabled={loading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="text-red-800 text-sm">{error}</div>
            </div>
          )}

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                maxLength={200}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter blog post title..."
                disabled={loading}
              />
              <div className="mt-1 text-xs text-gray-500">
                {formData.title.length}/200 characters
              </div>
            </div>

            {/* Heading */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Heading/Subtitle *
              </label>
              <input
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                required
                maxLength={150}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter blog post heading..."
                disabled={loading}
              />
              <div className="mt-1 text-xs text-gray-500">
                {formData.heading.length}/150 characters
              </div>
            </div>

            {/* Image Management */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image
              </label>
              
              {displayImage ? (
                <div className="relative mb-4">
                  <img
                    src={displayImage}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    {imagePreview ? (
                      <button
                        type="button"
                        onClick={removeNewImage}
                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        disabled={loading}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={removeExistingImage}
                          className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          disabled={loading}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <Image className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <span className="mt-2 block text-sm text-gray-500">
                        {blog.imageUrl && removeCurrentImage ? 'Image removed. Upload a new one or restore the original.' : 'No image selected'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {blog.imageUrl && removeCurrentImage && (
                <button
                  type="button"
                  onClick={restoreExistingImage}
                  className="mb-4 text-sm text-orange-600 hover:text-orange-700"
                  disabled={loading}
                >
                  Restore original image
                </button>
              )}

              <div className="flex items-center space-x-4">
                <label htmlFor="image-upload-edit" className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <Upload className="w-4 h-4 mr-2" />
                  {displayImage ? 'Change Image' : 'Upload Image'}
                </label>
                <input
                  id="image-upload-edit"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={loading}
                />
                <span className="text-xs text-gray-500">
                  PNG, JPG, GIF, WebP up to 5MB
                </span>
              </div>
              
              {selectedFile && !imagePreview && (
                <div className="mt-2 text-sm text-orange-600">
                  Processing new image...
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleChange}
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                placeholder="Write your blog post content here..."
                disabled={loading}
              />
              <div className="mt-1 text-xs text-gray-500">
                {formData.text.length} characters
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !formData.title.trim() || !formData.heading.trim()}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Updating...' : 'Update Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogModal;