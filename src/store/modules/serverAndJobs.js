const state = {
    servers: {},
    serverInfo: '',
    jobs: {},
    jobInfo: '',
}

const getters = {
    
}

const mutations = {
    getServers (state, data) {
        state.servers = data
    },
    getServerInfo (state, data) {
    	state.serverInfo = data
    },
    getJobs (state, data) {
        state.jobs = data
    },
    getJobInfo (state, data) {
    	state.jobInfo = data
    }
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}