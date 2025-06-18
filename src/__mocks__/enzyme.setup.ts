import { configure } from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new EnzymeAdapter() });