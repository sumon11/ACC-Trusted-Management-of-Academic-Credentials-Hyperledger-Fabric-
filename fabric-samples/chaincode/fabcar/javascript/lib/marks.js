/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class Marks extends Contract {

    /*async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const students = [
            {
                studentid :'1',
                name: 'test1',
                
            },
            
        ];

        for (let i = 0; i < students.length; i++) {
            students[i].docType = 'students';
            await ctx.stub.putState('STUDENT' + i, Buffer.from(JSON.stringify(students[i])));
            console.info('Added <--> ', students[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }*/

    async queryMarks(ctx, carNumber) {
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        console.log(carAsBytes.toString());
        return carAsBytes.toString();
    }

    async createMarks(ctx, mKey, studentid, sessional, practical) {
        console.info('============= START : Create Car ===========');
        //const num1 = parseInt(number1);
        //const num2 = parseInt(number2);
        //const totalNumber = parseInt(num1+num2);

        const car = {
            studentid,
            sessional,
            practical,
            docType: 'marks',
        };

        await ctx.stub.putState(mKey, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    

    async queryAllMarks(ctx) {
        const startKey = 'MARKS0';
        const endKey = 'MARKS999';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async changeStudentsOwner(ctx, carNumber, newOwner) {
        console.info('============= START : changeCarOwner ===========');

        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        const car = JSON.parse(carAsBytes.toString());
        car.owner = newOwner;

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeCarOwner ===========');
    }

}



module.exports = Marks;
