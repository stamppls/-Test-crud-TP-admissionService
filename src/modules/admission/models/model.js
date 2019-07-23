'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AdmissionSchema = new Schema({
    fullname: {
        type: String,
        required: 'Please fill a Admission fullname',
    },
    pid: {
        type: String,
        required: 'Please fill a Admission pid',
    },
    status: {
        type: String,
        required: 'Please fill a Admission status',
    },


    ///////////////////
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

mongoose.model("Admission", AdmissionSchema);