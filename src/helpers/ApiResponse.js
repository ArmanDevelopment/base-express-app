class ApiResponse {
    // parent = ApiResponse

    errorRes(res, err = null, errMsg='operation failed', status = 500) {
        if(err) console.error(err)

        res.status(status).json({success: true, error: errMsg})
    }

    successRes(res, data = null, status= 200) {
        res.status(status).json({success: true, ... (data? {data}: {})})
    }

    responseData (res, errMsg, status) {
        return (err, data) => {
            if(err) return this.errorRes(res, err, errMsg, status)

            this.successRes(res, data)
        }
    }
}

module.exports = new ApiResponse