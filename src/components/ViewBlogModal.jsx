import React from 'react';
import { X, FileText, Calendar, Hash } from 'lucide-react';

const ViewBlogModal = ({ isOpen, blog, onClose }) => {
  if (!isOpen || !blog) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTextWithLineBreaks = (text) => {
    if (!text) return 'No content available';
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <FileText className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl font-semibold text-gray-900">View Blog Post</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Information */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Hash className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">ID:</span>
                <span className="font-mono text-gray-900">#{blog.id.slice(0, 8)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Created:</span>
                <span className="text-gray-900">{formatDate(blog.createdAt)}</span>
              </div>
              {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                <div className="flex items-center space-x-2 md:col-span-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="text-gray-900">{formatDate(blog.updatedAt)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {blog.imageUrl && (
            <div className="mb-6">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-80 object-cover rounded-lg shadow-sm"
              />
            </div>
          )}

          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {blog.title}
            </h1>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Heading/Subtitle
            </label>
            <h2 className="text-xl font-semibold text-gray-700 leading-relaxed">
              {blog.heading}
            </h2>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                {formatTextWithLineBreaks(blog.text)}
              </div>
            </div>
          </div>

          {/* Word Count and Reading Stats */}
          {blog.text && (
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Content Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-blue-600">Characters:</span>
                  <span className="ml-1 font-semibold text-blue-800">
                    {blog.text.length.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-blue-600">Words:</span>
                  <span className="ml-1 font-semibold text-blue-800">
                    {blog.text.split(/\s+/).filter(word => word.length > 0).length.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-blue-600">Paragraphs:</span>
                  <span className="ml-1 font-semibold text-blue-800">
                    {blog.text.split('\n\n').filter(p => p.trim().length > 0).length}
                  </span>
                </div>
                <div>
                  <span className="text-blue-600">Est. Reading:</span>
                  <span className="ml-1 font-semibold text-blue-800">
                    {Math.ceil(blog.text.split(/\s+/).filter(word => word.length > 0).length / 200)} min
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogModal;