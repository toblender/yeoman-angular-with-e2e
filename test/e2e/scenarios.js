'use strict';

describe('Angular end 2 end test', function(){
	describe('Homepage test suit',function(){
		beforeEach(function(){
			browser().navigateTo('/');
		});
		it('should show a title element',function(){
			expect(element('h1').text()).toBe('Welcome to Angular');
		});
	});

});
