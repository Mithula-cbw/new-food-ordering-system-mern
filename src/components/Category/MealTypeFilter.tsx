import React from "react";

type Props = {
  selectedTypes: string[]; // e.g. ["Vegetarian", "Non-Vegetarian"]
  toggleType: (type: string) => void;
  resetTypes: () => void;
};

const MealTypeFilter: React.FC<Props> = ({
  selectedTypes,
  toggleType,
  resetTypes,
}) => {
  const mealTypes = ["Vegetarian", "Non-Vegetarian"];

  const isAllSelected = selectedTypes.length === 0 || selectedTypes.length === mealTypes.length;

  const handleAllClick = () => {
    // If all or none selected, clear selection to mean "All"
    // Otherwise, select all
    if (isAllSelected) {
      resetTypes();
    } else {
      mealTypes.forEach(type => {
        if (!selectedTypes.includes(type)) toggleType(type);
      });
    }
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">MEALS TYPE</h2>
        <button
          onClick={resetTypes}
          className="text-sm text-gray-500 hover:underline"
        >
          Reset
        </button>
      </div>
      <div className="space-y-3">
        <div
          className={`flex items-center space-x-3 cursor-pointer ${
            isAllSelected
              ? "font-normal text-header-catbtn/75"
              : "text-gray-500"
          }`}
          onClick={handleAllClick}
        >
          <input
            type="checkbox"
            checked={isAllSelected}
            readOnly
            className="accent-header-catbtn"
          />
          <span>All</span>
        </div>

        {mealTypes.map((type) => {
          const isSelected = selectedTypes.includes(type);
          return (
            <div
              key={type}
              className={`flex items-center space-x-3 cursor-pointer ${
                isSelected
                  ? "font-normal text-header-catbtn/75"
                  : "text-gray-500"
              }`}
              onClick={() => toggleType(type)}
            >
              <input
                type="checkbox"
                checked={isSelected}
                readOnly
                className="accent-header-catbtn"
              />
              <span>{type}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealTypeFilter;
