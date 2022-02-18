import React from 'react';
import { InnerContainer, StyledContainer, PageLogo, PageTitle } from '../components/styles';






const Login = () => {
    return(
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={ require('./../assets/img/in.png') } />
                <PageTitle>M&F Login</PageTitle>

            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;