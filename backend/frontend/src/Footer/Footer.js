import React from 'react';
import { string } from 'prop-types';

import {
    Title,
} from './styles';

function Footer ({
    title,
}) {
    return (
        <Title>Footer {title}</Title>
    );
}

Footer.defaultProps = {
    title: "",
};

Footer.propTypes = {
    title: string,
};

export default Footer;
