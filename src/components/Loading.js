import React from 'react'
import Lottie from 'react-lottie'
import * as loading from '../icons/loading.json'

const options = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const Loading = () => {
    return <Lottie options={options} height={128} width={128} />
}

export default Loading
