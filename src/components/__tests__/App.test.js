import { shallowMount } from '@vue/test-utils';
import App from '../../App.vue';

describe('App', () => {
    beforeEach(() => {
        wrapper = shallowMount(<App />);
        
    });

    it('should pass', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    })
})