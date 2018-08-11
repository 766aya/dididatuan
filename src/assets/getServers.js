const getServers = (self, cb) => {
    new Promise((resolve, reject) => {
        self.Axios.get('/api/v1/game_server/').then(res => {
            if (res.status == 200 && res.data._status == 0) {
                resolve(res.data.objects)
            } else {
                reject(res)
            }
        }).catch(err => {
            reject(err)
        })
    }).then(res => {
        let serverInfo = res;
        let servers = {}
        res.forEach(StartServer => {
            let serverArray = []
            if (StartServer.children.length >= 1) {
                StartServer.children.forEach(EndServer => {
                    serverArray.push(EndServer.name)
                })
            }else{
                serverArray.push(StartServer.name)
            }
            servers[StartServer.name] = serverArray
        })
        cb(null, servers)
        // for (let i = 0; i < res.length; i++) {
        //     let arr = []
        //     res[i].children.forEach(element => {
        //         console.log('element.name: ', element.name)
        //     });
        //     console.log(res[i].children.length)
        //     if (res[i].children.length == 0) {
        //         arr.push(res[i].name)
        //     }
        //     servers[res[i].name] = arr
        // }
        // cb(null, serverArray, serverInfo)
    }).catch(err => {
        cb(err)
    })
}

export default getServers