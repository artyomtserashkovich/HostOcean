import * as React from 'react';
import { Typography } from '@material-ui/core';

class AccountRegisterContainer extends React.Component{
    public render(){
        return(
            <Typography align={"left"} variant={"h2"} >
                Its Main Page
            </Typography>
        );
    }
}

export const AccountRegister =  AccountRegisterContainer;