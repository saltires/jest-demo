const { endsWith } = require('./src/index')

test('测试 endsiwth', () => {
    expect(endsWith('hello foo', 'o')).toBe(true)
    expect(endsWith('hello foo', 'oo')).toBe(true)
    expect(endsWith('hello foo', 'foo')).toBe(true)
    expect(endsWith('hello foo', 'hello foo')).toBe(true)
    expect(endsWith('hello foo', 'hello fo')).toBe(false)
    expect(endsWith('hello foo', false)).toBe(false)
})