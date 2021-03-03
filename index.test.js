import { endsWith } from './src/index'

// test('测试 endsiwth', () => {
//     // toBe 被称作匹配器
//     expect(endsWith('hello foo', 'o')).toBe(true)
//     expect(endsWith('hello foo', 'oo')).toBe(true)
//     expect(endsWith('hello foo', 'foo')).toBe(true)
//     expect(endsWith('hello foo', 'hello foo')).toBe(true)
//     expect(endsWith('hello foo', 'hello fo')).toBe(false)
//     expect(endsWith('hello foo', false)).toBe(false)
// })

test('测试 not 否定', () => {
    // toBe 被称作匹配器
    expect(10).not.toBe(11)
})

test('测试 toEqual 匹配器', () => {
    const foo = {name: 'saltire'}
    expect(foo).toEqual({name: 'saltire'})
})

test('测试 toBeNull 匹配器', () => {
    expect(null).toBeNull()
})

test('测试 toBeGreaterThan 匹配器', () => {
    expect(10).toBeGreaterThan(9)
})

test('toBeLessThan', () => {
    expect(10).toBeLessThan(11)
})

// 常用语数组、Set
test('测试 toContain 匹配器', () => {
    expect([1,2,3]).toContain(1)
    expect(new Set([1,2])).toContain(1)
})

// 匹配异常
const throwErrorFunc = () => {
    throw new Error('error')
}


test('测试异常匹配器', () => {
    expect(throwErrorFunc).toThrow()
})