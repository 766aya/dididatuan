const getRoleInfo = (self, cb) => {
    new Promise((resolve, reject)=>{
        self.Axios.get('/api/v1/role/').then(res=>{
            if (res.data._status == 0 && res.status == 200) {
                // resolve(res.data)
                let i = 0;
                let list = [];
                res.data.objects.forEach(element =>{
                    i++;
                    let data = {
                        img: element.career.image, // 职业图片
                        career: element.career.name, // 职业信息
                        careerUri: element.career.resource_uri, // 职业信息
                        roleName: element.name, // 角色名
                        roleUri: element.resource_uri, // 角色资源
                        serverName: element.server.name, // 服务器名
                        serverUri: element.server.resource_uri, // 服务器资源
                    }
                    list.push(data)
                })
                self.$store.commit('getRoleList', list)
                console.log("roleList: ", self.$store.state.user.roleList)
                resolve(list)
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