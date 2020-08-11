import React from 'react';
import CommunityCTN from '../../container/CommunityCTN.jsx';
import styled from 'styled-components';
class Community extends React.Component{

    render(){
        return(
            <div>
                <CommunityCTN/>
            </div>
        );
    }

}

export default Community;

const div = styled.div`
    width:100%
`