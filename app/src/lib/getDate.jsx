
const getDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return today.toLocaleDateString();
}

export default getDate