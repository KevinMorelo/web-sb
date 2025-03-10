export const fetchServices = async () => {
    const response = await fetch("http://localhost:5000/api/services");
    return response.json();
};
