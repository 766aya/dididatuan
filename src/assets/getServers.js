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
        self.$store.commit('getServerInfo', serverInfo)
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
    }).catch(err => {
        cb(err)
    })
}

const getJobs = (self, cb) => {
    new Promise((resolve, reject) => {
        self.Axios.get('/api/v1/game_career/').then(res => {
            if (res.status == 200 && res.data._status == 0) {
                resolve(res.data.objects)
            } else {
                reject(res)
            }
        }).catch(err => {
            reject(err)
        })
    }).then(res => {
        let jobInfo = res;
        self.$store.commit('getJobInfo', jobInfo)
        let jobs = {}
        res.forEach(StartServer => {
            let serverArray = []
            if (StartServer.children.length >= 1) {
                StartServer.children.forEach(EndServer => {
                    serverArray.push(EndServer.name)
                })
            }else{
                serverArray.push(StartServer.name)
            }
            jobs[StartServer.name] = serverArray
        })
        cb(null, jobs)
    }).catch(err => {
        cb(err)
    })
}

export default {getServers,getJobs}