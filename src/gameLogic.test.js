import test from 'node:test';import assert from 'node:assert/strict';import {cellFor,getMove,SNAKES,LADDERS} from './gameLogic.js';
test('position 0 is outside board',()=>assert.equal(cellFor(0),null));
test('board zigzags',()=>{assert.deepEqual(cellFor(1),{row:9,col:0});assert.deepEqual(cellFor(10),{row:9,col:9});assert.deepEqual(cellFor(11),{row:8,col:9});assert.deepEqual(cellFor(20),{row:8,col:0});assert.deepEqual(cellFor(100),{row:0,col:0});});
test('six required to enter',()=>{assert.equal(getMove(0,4,false).final,0);assert.equal(getMove(0,6,false).final,1);});
test('exact finish and overshoot',()=>{assert.equal(getMove(97,5,true).final,97);assert.equal(getMove(97,3,true).event,'win');});
test('snake/ladder directions',()=>{for(const s of SNAKES)assert.ok(s.to<s.from);for(const l of LADDERS)assert.ok(l.to>l.from);});
test('snake and ladder triggers',()=>{assert.equal(getMove(95,4,true).event,'snake');assert.equal(getMove(5,1,true).event,'ladder');});
