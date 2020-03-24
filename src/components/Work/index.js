import React from 'react';

import { Container } from './styles';
import List from './components/List';
import PropTypes from 'prop-types';

function Work({ works }) {
    return (
        <Container id="Work">
            <List works={works} />
        </Container>
    );
}

Work.defaultProps = {
    works: [],
}

Work.PropTypes = {
    works: PropTypes.arrayOf(PropTypes.object),
}

export default Work;
