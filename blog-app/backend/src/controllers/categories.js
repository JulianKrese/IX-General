/* Create */

const createCategory = () => {
    res.status(200).json({ message: "Creating new category...", data: [] });
}

/* Read */

const getCategories = () => {
    res.status(200).json({ message: "Retrieving all categories...", data: [] });
}

const getCategoryById = () => {
    res.status(200).json({ message: "Retrieving category by Id...", data: [] });
}

/* Update */

const updateCategoryById = () => {
    res.status(200).json({ message: "Updating category by Id...", data: [] });
}

/* Delete */

const deleteCategoryById = () => {
    res.status(200).json({ message: "Deleting category by Id...", data: [] });
}

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
};