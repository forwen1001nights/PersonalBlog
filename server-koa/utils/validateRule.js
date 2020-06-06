module.exports = {
    // 对博客的验证
    blogRules: {
        title: {
            presence: {
                allowEmpty: false
            },
            length: {
                maximum: 30
            },
            type: 'string'
        },
        content: {
            presence: {
                allowEmpty: false
            },
            type: 'string'
        },
        customaryContent: {
            presence: {
                allowEmpty: false
            },
            type: 'string'
        },
        tag: {
            presence: {
                allowEmpty: false
            },
            length: {
                maximum: 10
            },
            type: 'string'
        },
        parentTag: {
            presence: {
                allowEmpty: false
            },
            length: {
                maximum: 10
            },
            type: 'string'
        },
        ctime: {
            presence: {
                allowEmpty: false
            },
            datetime: {
                dateOnly: true
            }
        }
    },
    // 对修改对象的验证
    changeRule: {
        title: {
            length: {
                maximum: 30
            },
            type: 'string'
        },
        content: {
            type: 'string'
        },
        customaryContent: {
            type: 'string'
        },
        tag: {
            length: {
                maximum: 10
            },
            type: 'string'
        },
        parentTag: {
            length: {
                maximum: 10
            },
            type: 'string'
        },
        ctime: {
            datetime: {
                dateOnly: true
            }
        }
    }
}