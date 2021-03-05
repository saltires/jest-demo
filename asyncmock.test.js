import axios from 'axios'
import { getData } from './src/asyncmock'

jest.mock('axios')

test('测试 getData', async () => {
    axios.get.mockResolvedValue({ data: 'hello' })
    await getData().then(data => {
        expect(data).toBe('hello')
    })
    
})

