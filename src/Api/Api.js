const API_URL = `https://d1cl7xhtppugmt.cloudfront.net/dashboard/api/userlist/`;

export const getUser = async () => {
    const results = await fetch(API_URL, { method: 'GET' }).then((x) => x.json());
    console.log("results:", results)
    const users = results.map(
        ({
            id,
            name,
            amount,
            address,
            created_at,
            category
        }) => ({
            key: id,
            name: name,
            amount: amount,
            address: address,
            createdDate: created_at,
            category: category,
        })
    );

    return users;
};