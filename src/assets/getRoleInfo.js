const getRoleInfo = (self, cb) => {
    console.log('self: ', self)
    new Promise((resolve, reject)=>{
        console.log('getRoleInfo')
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