const getRoleInfo = (self, cb)=>{
    new Promise((resolve, reject)=>{
        self.Axios.get('/api/v1/role/').then(res=>{
            if (res.data._status == 0 && res.status == 200) {
                resolve(res.data)
            } else {
                reject(res._status)
            }
        }).catch(err=>{
            reject(err)
        })
    }).then(res=>{
        cb(null, res)
    }).catch(err=>{
        cb(err)
    })
}

export default getRoleInfo