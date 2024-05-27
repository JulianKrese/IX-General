const getCategories = async () => {

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
        console.log(categoriesAPIData.data);
        return categoriesAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }

}

const categoriesService = {
    getCategories,
}

export default categoriesService;