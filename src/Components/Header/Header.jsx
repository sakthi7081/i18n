import React from 'react';
import { StyledPaper,StyledBox,HeaderIcon } from './Header.style';

const Header = () => {
    return (
        <StyledPaper elevation={0} data-test='Header-Component'>
            <StyledBox data-test='Title'>
            <HeaderIcon/>
                Multi Language
            </StyledBox>
            
        </StyledPaper>        
    );
};

export default Header;