import { calcNet, calcPoint } from '../helpers/calculations'

describe('Calculations', () => {
    const net = calcNet(5, 3)
    const negativeNet = calcNet(1, 4)

    test('CalcNet', () => {
        expect(net).toBe('4.00')
        expect(negativeNet).toBe(0)
    })

    test('CalcPoint', () => {
        expect(calcPoint(net, 10)).toBe('40.00')
    })
})
