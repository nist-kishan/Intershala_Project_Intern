import { useState, useRef } from 'react';
import { LogOut } from 'lucide-react';

const getInitials = (name) => {
  if (!name) return '';
  const words = name.trim().split(' ');
  const initials = words.map(word => word[0].toUpperCase());
  return (initials[0] || '') + (initials[1] || '');
};

const Avatar = ({ name, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar Circle */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm cursor-pointer shadow-lg ring-2 ring-white/40">
        {getInitials(name)}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-12 right-0 w-48 bg-white/10 backdrop-blur-md text-white rounded-xl shadow-lg border border-white/20 animate-fade-in z-50">
          <div className="px-4 py-2 text-xs text-white/70 border-b border-white/10 truncate">
            {name.length > 22 ? name.slice(0, 22) + '…' : name}
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-3 w-full text-sm hover:bg-white/10 transition-colors cursor-pointer"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
