const getCategoriesById = async () => {

    try {
        const data = await fetch(
            "TO_DO", 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        const categoriesByIdData = await data.json();
        return categoriesByIdData.data;
    }
    catch (error) {
        throw new Error(error);
    }

}

const categoriesByIdService = {
    getCategoriesById,
}

export default categoriesByIdService;