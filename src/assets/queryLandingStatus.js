const queryLanding = (that, cb)=>{
	new Promise((resolve, reject)=>{
        that.Axios.get('/api/v1/user').then(res=>{
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

export default queryLanding