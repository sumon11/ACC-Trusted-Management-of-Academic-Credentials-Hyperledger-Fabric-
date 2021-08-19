/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class NewContract extends Contract {

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

    async queryStudents(ctx, carNumber) {
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        console.log(carAsBytes.toString());
        return carAsBytes.toString();
    }

    async createStudents(ctx, sKey, studentid, name, department, semester) {
        console.info('============= START : Create Car ===========');
        //const num1 = parseInt(number1);
        //const num2 = parseInt(number2);
        //const totalNumber = parseInt(num1+num2);

        const car = {
            studentid,
            name,
            department,
            semester,
            docType: 'students',
        };

        await ctx.stub.putState(sKey, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    

    async queryAllStudents(ctx) {
        const startKey = 'STUDENT0';
        const endKey = 'STUDENT999';
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



module.exports = NewContract;
