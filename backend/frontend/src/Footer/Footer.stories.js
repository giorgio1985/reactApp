import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Footer from './Footer';

storiesOf('Footer', module)
    .add('with title', withInfo()(() => (
        <Footer title="Footer title" />
    )));
