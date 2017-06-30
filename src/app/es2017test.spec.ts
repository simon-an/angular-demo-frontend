import { async, TestBed } from '@angular/core/testing';

describe('Es2017', () => {

    const foo = {
        fooProperty: 'testing',
    }
    const bar = {
        barProperty: 'hello',
    }

    const baz = {
        bazProperty: 'world',
    }

    const merged = { ...foo, ...bar, ...baz };
    const copy = { ...baz };

    it('merge should have all properties.', async(() => {

        expect(merged.fooProperty).toEqual('testing');
        expect(merged.barProperty).toEqual('hello');
        expect(merged.bazProperty).toEqual('world');

    }));

    it('copy should have  property.', async(() => {

        expect(copy.bazProperty).toEqual('world');

    }));

});
