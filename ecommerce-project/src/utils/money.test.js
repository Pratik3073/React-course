import { it,expect,describe } from "vitest";//describe = groups test together
import { formatMoney } from "./money";

describe('formatMoney',()=>{ // 'formatMoney' test suite name
    it('fotmats 1999 sents as $19.99',()=>{
        expect(formatMoney(1999)).toBe('$19.99');   // .toBe is method 
    });
    
    it('displays 2 decimals',()=>{
        expect(formatMoney(1090)).toBe('$10.90');
        expect(formatMoney(100)).toBe('$1.00')
    });
});

// this is unit test



// to run vitest - npm vitest
