import tradesReducer from './trades';
import {ADD_TRADE, SET_TRADES} from '../constants';

describe('trades reducer', () => {
    it('should return default state if no action passed', () => {
        expect(tradesReducer([])).toEqual([]);
    })
    it('should return default state if action has no type passed', () => {
        expect(tradesReducer([], {})).toEqual([]);
    })
    describe('SET_TRADES', () => {
        it('should replace trades in state', () => {
            const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];
            const newTrades = [{ code: 'XYZ', price: 100, quantity: 25 }];

            expect(tradesReducer(initialTrades, { type: SET_TRADES, payload: newTrades })).toEqual(newTrades);
        })
        it('should return default state if action has no payload', () => {
            const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];

            expect(tradesReducer(initialTrades, { type: SET_TRADES })).toEqual(initialTrades);
        })
        it('should convert to an array and set if payload is not an array', () => {
            const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];
            const newTrades = { code: 'XYZ', price: 100, quantity: 25 };

            expect(tradesReducer(initialTrades, { type: SET_TRADES, payload: newTrades })).toEqual([newTrades]);
        })
    })
    describe('ADD_TRADE', () => {
        it('should add to trades in state', () => {
            const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];
            const tradeToAdd = { code: 'XYZ', price: 100, quantity: 25 };
            const tradesAfter = [{ code: 'ABC', price: 100, quantity: 25 }, { code: 'XYZ', price: 100, quantity: 25 }];

            expect(tradesReducer(initialTrades, { type: ADD_TRADE, payload: tradeToAdd })).toEqual(tradesAfter);
        })
        it('should add to trades in state if array of trades passed', () => {
            const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];
            const tradeToAdd = [{ code: 'XYZ', price: 100, quantity: 25 }];
            const tradesAfter = [{ code: 'ABC', price: 100, quantity: 25 }, { code: 'XYZ', price: 100, quantity: 25 }];

            expect(tradesReducer(initialTrades, { type: ADD_TRADE, payload: tradeToAdd })).toEqual(tradesAfter);
        })
        it('should return default state if action has no payload', () => {
            const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];

            expect(tradesReducer(initialTrades, { type: ADD_TRADE })).toEqual(initialTrades);
        })
    })
});