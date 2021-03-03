import getData from './src/fetchData'

// test('fetchData', (done) => {
//     const url = 'http://localhost:3000/saltires'
//     const expectData = {
//         "saltires": [
//             { "id": 1, "title": "saltire 1" },
//             { "id": 2, "title": "saltire 2" },
//             { "id": 3, "title": "saltire 3" }
//         ],
//         "comments": [
//             { "id": 1, "body": "some comment", "saltireId": 1 },
//             { "id": 2, "body": "some comment", "saltireId": 1 }
//         ],
//         "profile": {
//             "name": "typicode"
//         }
//     }

//     getData(url, (data) => {
//         expect(data).toEqual(expectData.saltires)
//         done()
//     })
// })

test('request404', (done) => {
    const url = 'http://localhost:3000/saltireshihihii'
    return getData(url).catch(e => {
        console.log(e.toString())
        expect(e.toString().indexOf('404') > -1)
    })
})