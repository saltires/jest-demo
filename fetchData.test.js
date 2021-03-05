import getData from './src/fetchData'

// test('fetchData', (done) => {
    const url = 'http://localhost:3000/saltires'
    const url1 = 'http://localhost:3000/saltires1'
    const expectData = {
        "saltires": [
            { "id": 1, "title": "saltire 1" },
            { "id": 2, "title": "saltire 2" },
            { "id": 3, "title": "saltire 3" }
        ],
        "comments": [
            { "id": 1, "body": "some comment", "saltireId": 1 },
            { "id": 2, "body": "some comment", "saltireId": 1 }
        ],
        "profile": {
            "name": "typicode"
        }
    }

//     getData(url, (data) => {
//         expect(data).toEqual(expectData.saltires)
//         done()
//     })
// })

// test('async', () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(1000)
//         }, 3000)
//     }).then(res => {
//         expect(res).toBe(1000)
//     })
// })


test('async1', async () => {
    await expect(getData(url)).resolves.toMatchObject({
        data: expectData.saltires
    })
})

test('async3', async () => {
    let res = await getData(url)
    expect(res.data).toEqual(expectData.saltires)
})

test('async2', async () => {
    await expect(getData()).rejects.toThrow()
})

test('requestis404', async () => {
    expect.assertions(1)
    try {
        await getData(url1)
    } catch (error) {
        expect(error.toString().indexOf('404') > -1).toBe(true)
    }
})



// test('request404', () => {
//     const url = 'http://localhost:3000/saltires'
//     expect.assertions(1)
//     return getData(url).catch(e => {
//         console.log(e.toString())
//         expect(e.toString().indexOf('404') > -1).toBe(true)
//     })
// })