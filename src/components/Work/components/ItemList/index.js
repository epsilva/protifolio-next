import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import {
    Container,
    TitleCompany,
    Function,
    Period,
    ContainerHeader,
} from './styles';
import Tag from '../../../Tag';
import { viewDetail } from '../../../../store/modules/actions/actions';

export default function ItemList({ work }) {
    const dispatch = useDispatch();
    const view = useSelector(state => state.actions.view);
    const [click, setClick] = useState(false);

    function onClickViewDetail(work) {
        setClick(true);
        const data = {
            view: !view,
            work,
        };
        dispatch(viewDetail(data));
    }

    useEffect(() => {
        setTimeout(() => {
            if (view) {
                setClick(false);
            } else if (click) {
                const data = {
                    view: true,
                    work,
                };
                dispatch(viewDetail(data));
            }
        }, 300);
    }, [click, dispatch, view, work]);

    return (
        <Container
            key={work.name}
            className="card"
            onClick={() => onClickViewDetail(work)}
        >
            <ContainerHeader>
                <Avatar name={work.company} src={work.img} round size={80} />
                {work.freela && <Tag msg="Freelancer" />}
            </ContainerHeader>
            <TitleCompany>{work.company}</TitleCompany>
            <Function>{work.function}</Function>
            <Period>{work.period}</Period>
        </Container>
    );
}
