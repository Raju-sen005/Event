import { useState } from "react";

/* ================= TYPES ================= */

interface Category {
  id: number;
  name: string;
  subcategories: string[];
}

/* ================= COMPONENT ================= */

export default function CategoryManager() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [openMain, setOpenMain] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  const [mainCategoryName, setMainCategoryName] = useState("");

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [subCategoryName, setSubCategoryName] = useState("");

  /* ================= HANDLERS ================= */

  // Add Main Category
  const handleAddMainCategory = () => {
    if (!mainCategoryName.trim()) return;

    const newCategory: Category = {
      id: Date.now(),
      name: mainCategoryName.trim(),
      subcategories: [],
    };

    setCategories((prev) => [...prev, newCategory]);
    setMainCategoryName("");
    setOpenMain(false);
  };

  // Add Sub Category
  const handleAddSubCategory = () => {
    if (!selectedCategoryId || !subCategoryName.trim()) return;

    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === selectedCategoryId
          ? {
              ...cat,
              subcategories: [...cat.subcategories, subCategoryName.trim()],
            }
          : cat
      )
    );

    setSubCategoryName("");
    setSelectedCategoryId(null);
    setOpenSub(false);
  };

  /* ================= UI ================= */

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Category Management
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => setOpenMain(true)}
            className="px-5 py-2 bg-[#FF5B04] text-white rounded-lg shadow hover:bg-[#FF5B04]/80"
          >
            + Main Category
          </button>

          <button
            onClick={() => setOpenSub(true)}
            className="px-5 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
          >
            + Subcategory
          </button>
        </div>
      </div>

      {/* ================= MAIN CATEGORY MODAL ================= */}
      {openMain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">
              Add Main Category
            </h2>

            <input
              type="text"
              value={mainCategoryName}
              onChange={(e) => setMainCategoryName(e.target.value)}
              placeholder="e.g. Weddings, Corporate Events"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04]"
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpenMain(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMainCategory}
                className="px-4 py-2 bg-[#FF5B04] text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SUB CATEGORY MODAL ================= */}
      {openSub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">
              Add Subcategory
            </h2>

            {/* Select Main Category */}
            <select
              value={selectedCategoryId ?? ""}
              onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2 mb-3"
            >
              <option value="">Select Main Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Subcategory Name */}
            <input
              type="text"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
              placeholder="e.g. Indoor, Outdoor, Luxury"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04]"
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpenSub(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSubCategory}
                className="px-4 py-2 bg-[#FF5B04] text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= CATEGORY LIST ================= */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Saved Categories</h2>

        {categories.length === 0 ? (
          <p className="text-sm text-gray-500">No categories added yet.</p>
        ) : (
          <div className="space-y-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border rounded-lg p-4"
              >
                <h3 className="font-semibold text-gray-900">
                  {cat.name}
                </h3>

                {cat.subcategories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.subcategories.map((sub, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-[#FF5B04]/10 text-[#FF5B04] rounded-full"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
