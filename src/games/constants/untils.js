const createPath = path => {
    // console.log(`/games/${path || ''}`)
    return `/games/${path || ''}`
}

export {
    createPath
}