/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

//'use strict';

//const FabCar = require('./lib/fabcar');

//module.exports.FabCar = FabCar;
//module.exports.contracts = [ FabCar ];


'use strict';

const FabCar = require('./lib/fabcar');
const NewContract = require('./lib/newcontract');
const Marks = require('./lib/marks');
module.exports.FabCar = FabCar;
module.exports.NewContract = NewContract;
module.exports.Marks = Marks;
module.exports.contracts = [ FabCar, NewContract, Marks ];
