export const selectRange = (from, to) => {
    return Array(to - from + 1).fill(from).map((item, idx) => {
        const result = item + idx;
        return { value: result, label: result };
    })
}