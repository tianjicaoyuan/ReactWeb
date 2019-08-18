import './index.css';
import Logo from './components/test/Logo';
const React = require('react') ;
const ReactDOM = require('react-dom');

function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
const element = <HelloMessage />;
//render的第一个参数代表HTML元素，可以由函数，也可以由react创建新的元素也是由基本HTML元素构成。
ReactDOM.render(
    <Logo /> ,
    document.getElementById('myApp')
);
