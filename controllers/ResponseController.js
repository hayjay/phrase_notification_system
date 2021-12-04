class ResponseController {
    // constructor(data, message, status) {
    //     this.data = data.length <= 0 ? [] : data;
    //     this.message = message;
    //     this.status = status;
    // }

    sendResponse(data = [], message = '', status = true) {
        // return '';
        return {
            'message' : message,
            'status': status,
            'data' : data,
        }
    }
}

module.exports = ResponseController