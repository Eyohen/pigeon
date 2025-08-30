import React from 'react';
import {
    BarChart3,
    Users,
    Building2,
    CreditCard,
    TrendingUp,
    DollarSign,
    Activity,
    FileText,
    Star,
    Settings,
    Bell,
    Menu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children, activeTab = 'Analytics' }) => {
    const sidebarItems = [
        { name: 'Analytics', icon: BarChart3 },
        { name: 'Connectors', icon: Users },
        { name: 'Transactions', icon: CreditCard },
        { name: 'Communities', icon: Building2 },
        { name: 'Users', icon: Users },
        { name: 'Blog', icon: FileText },
        { name: 'Featured-Communities', icon: Star },
        { name: 'Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white">
                {/* Logo */}
                <div className="p-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">🐦</span>
                        </div>
                        <span className="text-xl font-semibold">pigeonhire</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-6">
                    <div className="px-6 mb-4">
                        <span className="text-orange-500 text-sm font-medium">Menu</span>
                    </div>
        
                    <ul className="space-y-1">
                        {sidebarItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={`/${item.name.toLowerCase()}`}
                                    className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-800 transition-colors ${activeTab === item.name ? 'bg-orange-500 text-white' : 'text-gray-300'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Profile */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-orange-500 text-sm font-medium mb-4">Profile</div>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">J</span>
                        </div>
                        <div>
                            <div className="text-white text-sm font-medium">Jenny Wilson</div>
                            <div className="text-gray-400 text-xs">jen.wilson@example.com</div>
                        </div>
                    </div>
                    <button className="w-full mt-4 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="text-sm">Log out</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-64">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="flex items-center justify-between px-8 py-4">
                        <h1 className="text-2xl font-semibold text-gray-900">{activeTab}</h1>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                                <Bell className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">J</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;