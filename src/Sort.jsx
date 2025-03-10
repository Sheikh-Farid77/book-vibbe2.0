// eslint-disable-next-line react/prop-types
export default function Sort({ sortValue, onSort }) {
  return (
    <div className="flex items-stretch space-x-3">
      <select
        className="cursor-pointer rounded-md px-4 py-2 text-center bg-white text-gray-600"
        name="sortBy"
        id="sortBy"
        onChange={(e) => onSort(e.target.value)}
        value={sortValue}
      >
        <option value="">Sort</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
}
