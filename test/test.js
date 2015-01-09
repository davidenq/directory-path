/**
 * Created by Davip on 07/01/2015.
 */

'use strict';

var assert  = require('chai').assert,
    dpath   = require('..'),
    empty,
    result;

describe('There are not files nested', function(){

    before(function(){
        empty = dpath('empty');
    })

    describe('Result', function(){

        it('should be a null array', function(){
            assert.lengthOf(empty, 0, 'array is length 0')
        })

        it('works when there are not directory nested or the nested directories are empties', function(){
            assert.ok(empty, 'everything is ok')
        })
    })
})

describe('There are files nested', function(){

    before(function(){
        result = dpath('full');
    })

    describe('Result', function(){

        it('should be an array', function(){
            assert.isArray(result, 'Great!, is an Array')
        })

        it('correctly list all relatives paths of parents directories and nested directories', function(){
            var expected = [
                'full/nested/nested-a',
                'full/nested',
                'full/nested/nested-b/b1/b11'
            ]
            assert.includeMembers(result,expected, 'array contains value')

        })

        it('should not be include files with extensions', function(){

            assert.notInclude(result, '*.*', 'Great!!!')

        })
    })
})
