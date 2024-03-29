import '../webapp/css/font.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';
import GlobalStyle from './lib/styles/globalStyle';
import HeaderRouter from'./routes/HeaderRouter.jsx';
import configureStore from './redux/ConfigStore';
import { Provider } from 'react-redux';

const store = configureStore();



class MainPage extends React.Component {
    render() {
        return (
            <Layout>
                <HeaderRouter />
            </Layout>
        );
    }

}

const Layout = Styled.div `
    display: flex;
    background-color: #fafafa;

`

ReactDOM.render(
    <Provider store = {store}>
        <GlobalStyle/>
        <MainPage/>
    </Provider> , document.getElementById('root'));

/* registerServiceWorker 만들어 보기*/