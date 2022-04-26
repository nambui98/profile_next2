import React from 'react'
// import './style.scss'
type Props = {}

const Loading = (props: Props) => {
    return (
        <div className="case__loading">
            <div className="loading dark:loading--dark">
                <div className="inner__loading dark:inner__loading--dark"></div>
                <div className="loader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="var(--color)" />
                                <stop offset="50%" stopColor="var(--color)" /> <stop offset="100%" stopColor="var(--color)" />
                            </linearGradient>
                        </defs>
                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" stroke="url(#gradient)" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default Loading