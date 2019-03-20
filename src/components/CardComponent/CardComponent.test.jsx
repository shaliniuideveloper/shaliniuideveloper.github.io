import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {CardComponent} from './CardComponent';

const mockData = {
    msgText :"Home and Away"
}
describe('CardComponent',()=>{
    it('CardComponent',()=>{
        const component = <CardComponent msgText = {mockData.msgText}/>;
        const tree= renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
});