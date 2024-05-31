const createCategory = async (category) => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(category),
            });
        const categoriesAPIData = await data.json();
        return categoriesAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}

const fetchCategories = async () => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories", 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        const categoriesAPIData = await data.json();
        return categoriesAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}


const updateCategory = async (categoryId) => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories" + categoryId, 
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        const categoriesAPIData = await data.json();
        return categoriesAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}

const deleteCategoryById = async (categoryId) => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories" + categoryId, 
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        const categoriesAPIData = await data.json();
        return categoriesAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}

const categoriesService = {
    createCategory,
    fetchCategories,
    updateCategory,
    deleteCategoryById,
  };

export default categoriesService;