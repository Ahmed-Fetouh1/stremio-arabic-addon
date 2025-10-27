
import React from 'react';
import type { ContentItem } from '../types';

interface ContentCardProps {
  item: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-[2/3]">
      <img src={item.posterUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${item.type === 'فيلم' ? 'bg-blue-600' : 'bg-green-600'} text-white`}>
          {item.type}
        </span>
        <h3 className="text-lg font-bold text-white mt-2 leading-tight">{item.title}</h3>
      </div>
    </div>
  );
};

export default ContentCard;
