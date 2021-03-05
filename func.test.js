import { runCallback } from './src/func'

test('测试runCallback', () => {
    const fn = () => {
        return 123
    }
    expect(runCallback(fn)).toBe(123)
})

test('测试runCallback - 使用 mock', () => {
    const fn = jest.fn(() => {
        return 123
    })
    expect(runCallback(fn)).toBe(123)
    expect(runCallback(fn)).toBe(123)
    // 通过 mock 函数的 mock 属性可以得知该函数在测试过程中被调用的详细情况
    console.log(fn.mock)
})