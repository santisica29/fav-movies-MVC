const movieWatched = document.querySelectorAll('span.not')
const movieNotWatched = document.querySelectorAll('span.watched')
const deleteButton = document.querySelectorAll(".fa-trash");
const upvoteButton = document.querySelectorAll(".fa-arrow-up");
const downvoteButton = document.querySelectorAll(".fa-arrow-down");

Array.from(movieWatched).forEach((m) => {
    m.addEventListener('click', markWatched)
})
Array.from(movieNotWatched).forEach((m) => {
    m.addEventListener('click', markNotWatched)
})
Array.from(deleteButton).forEach((btn) => {
    btn.addEventListener("click", deleteMovie);
});
Array.from(upvoteButton).forEach((btn) => {
    btn.addEventListener("click", upvoteMovie);
});
Array.from(downvoteButton).forEach((btn) => {
    btn.addEventListener("click", downvoteMovie);
});

async function markWatched() {
    const movieId = this.parentNode.dataset.id
    try {
        const response = await fetch('movies/watchedMovie', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJS': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.error(err);
    }
}

async function markNotWatched() {
    const movieId = this.parentNode.dataset.id
    
    try {
        const response = await fetch('movies/notWatchedMovie', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJS': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.error(err);
    }
}

async function upvoteMovie() {
    const movieId = this.parentNode.dataset.id
    const movieRank = this.parentNode.dataset.rank

    try {
        const response = await fetch('movies/upvoteMovie', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJS': movieId,
                'movieRankFromJS': movieRank
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.error(err);
    }
}

async function downvoteMovie() {
    const movieId = this.parentNode.dataset.id
    const movieRank = this.parentNode.dataset.rank
    try {
        const response = await fetch('movies/downvoteMovie', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJS': movieId,
                'movieRankFromJS': movieRank
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.error(err);
    }
}

async function deleteMovie() {
    const movieId = this.parentNode.dataset.id
    try {
        const response = await fetch('movies/deleteMovie', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJS': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.error(err);
    }
}