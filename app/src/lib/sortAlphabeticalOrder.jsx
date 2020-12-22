

const sortAlphabeticalOrder = (a, b) => {
    return ((a.name || a) > (b.name || b))?1:-1;
}

export default sortAlphabeticalOrder