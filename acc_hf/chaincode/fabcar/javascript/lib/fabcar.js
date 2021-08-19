/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const cars = [
            {
                carid :'1',
                num1: 'test1',
                fileName: 'test2',
                
            },
            
        ];

        for (let i = 0; i < cars.length; i++) {
            cars[i].docType = 'car';
            await ctx.stub.putState('FILE' + i, Buffer.from(JSON.stringify(cars[i])));
            console.info('Added <--> ', cars[i]);
        }
        const students = [
            {
                studentid :'1',
                name: 'test1',
                department :'CSE',
                semester :'1st',
                
            },
            
        ];

        for (let i = 0; i < students.length; i++) {
            students[i].docType = 'students';
            await ctx.stub.putState('STUDENT' + i, Buffer.from(JSON.stringify(students[i])));
            console.info('Added <--> ', students[i]);
        }
        const marks = [
            {
                studentid :'1',
                sessional: '50',
                practical :'60',
                
                
            },
            
        ];

        for (let i = 0; i < marks.length; i++) {
            students[i].docType = 'marks';
            await ctx.stub.putState('MARKS' + i, Buffer.from(JSON.stringify(marks[i])));
            console.info('Added <--> ', marks[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryCar(ctx, carNumber) {
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        console.log(carAsBytes.toString());
        return carAsBytes.toString();
    }

    async createCar(ctx, fKey, carid, num1, fileName) {
        console.info('============= START : Create Car ===========');
        //const num1 = parseInt(number1);
        //const num2 = parseInt(number2);
        //const totalNumber = parseInt(num1+num2);

        const car = {
            carid,
            num1,
            fileName,
            docType: 'car',
        };

        await ctx.stub.putState(fKey, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    

    async queryAllCars(ctx) {
        const startKey = 'FILE0';
        const endKey = 'FILE999';
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

    async changeCarOwner(ctx, carNumber, newOwner) {
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

module.exports = FabCar;
