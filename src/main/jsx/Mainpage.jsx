import '../webapp/css/font.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';

import HeaderRouter from'./routes/HeaderRouter.jsx';



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
    margin: 0 auto;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
`

    ReactDOM
    .render(<MainPage/>, document.getElementById('root'));