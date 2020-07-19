export default function calcResults(questions) {
    let correct = 0
    let incorrect = 0
    let blank = 0

    questions.forEach((q) => {
        if (q.answer === null) {
            blank += 1
        } else if (q.answer === q.correct_answer) {
            correct += 1
        } else {
            incorrect += 1
        }
    })
    const net = calcNet(correct, incorrect)
    const point = calcPoint(net, questions.length)
    // Firebase Realtime database not storing arrays
    return {
        '0': { label: 'Correct', value: correct },
        '1': { label: 'Incorrect', value: incorrect },
        '2': { label: 'Blank', value: blank },
        '3': { label: 'Net', value: net },
        '4': { label: 'Point', value: point },
    }
}

export const calcNet = (correct, incorrect) => {
    const net = correct - incorrect / 3
    if (net < 0) return 0
    return net.toFixed(2)
}

export const calcPoint = (net, length) => {
    const point = net * (100 / length)
    return point.toFixed(2)
}
