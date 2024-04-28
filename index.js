module.exports = async function (domainName) {
    try {
        const response = await fetch(`https://api.quad9.net/search/${domainName}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch domain information: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        const {
            domain,
            blocked,
            blocked_by,
            meta
        } = responseData;

        return {
            domain,
            blocked,
            blocked_by,
            meta
        };
    } catch (error) {
        console.error('Error fetching domain information:', error.message);
        throw error;
    }
}