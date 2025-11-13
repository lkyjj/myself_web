'use client';

interface FilterTabsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterTabs({ filters, activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-lg transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-black text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:border-black'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}