'use strict';

import request from '@/libs/request';
import util from '@/libs/util';

export function getTradeSumAmount (params) {
    return request({
        url: util.ajaxFront + 'POS/queryTradeOrderSum',
        method: 'get',
        params: Object.assign({},params,{
            'POS': true
        })
    });
}

export function getTrade (params) {
    return request({
        url: util.ajaxFront + 'POS/queryTradeOrder',
        method: 'get',
        params:  Object.assign({},params,{
            'POS': true
        })
    });
}

export function getRefund (params) {
    return request({
        url: util.ajaxFront + 'POS/queryRefundOrder',
        method: 'get',
        params:  Object.assign({},params,{
            'POS': true
        })
    });
}
export function getPay (params) {
    return request({
        url: util.ajaxFront + 'POS/queryPayOrder',
        method: 'get',
        params:  Object.assign({},params,{
            'POS': true
        })
    });
}

// export function getOrderDetail (params) {
//     return request({
//         url: util.ajaxFront + 'merchant/tradeJour/orderDetail',
//         method: 'get',
//         params:  Object.assign({},params,{
//             'XiMai': true
//         })
//     });
// }

export function cancel(params) {
    return request({
        url: util.ajaxFront + 'POS/cancelOrder',
        method: 'get',
        params:  Object.assign({},params,{
            'POS': true
        })
    });
}

export function refund (params) {
    return request({
        url: util.ajaxFront + 'POS/refund',
        method: 'get',
        params:  Object.assign({},params,{
            'POS': true
        })
    });
}

export default {
    getTradeSumAmount,
    getTrade,
    getRefund,
    getPay,
    // getOrderDetail,
    cancel,
    refund
};
