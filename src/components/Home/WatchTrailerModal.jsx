import React from 'react'

const WatchTrailerModal = () => {
    const videoUrl = 'https://youtu.be/EpI8--h_czU?si=7ymG72r-iQb4laji';

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <video width="500" height="500" autoPlay muted controls loop>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default WatchTrailerModal